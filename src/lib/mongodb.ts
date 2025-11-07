// src/lib/mongodb.ts
import mongoose from 'mongoose'

/**
 * Lee la URI de MongoDB desde las variables de entorno
 * Esta variable debe estar definida en .env.local
 */
const MONGODB_URI = process.env.MONGODB_URI

/**
 * Validación: verificar que existe la variable de entorno
 */
if (!MONGODB_URI) {
  throw new Error(
    '⚠️ Por favor define la variable MONGODB_URI en tu archivo .env.local\n' +
      'Ejemplo: MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/dbname'
  )
}

/**
 * Interface para tipar el cache global de Mongoose
 */
interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

/**
 * Cache global para reutilizar la conexión en Next.js
 * Esto evita crear múltiples conexiones en hot-reload (desarrollo)
 */
declare global {
  var mongoose: MongooseCache | undefined
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null }

if (!global.mongoose) {
  global.mongoose = cached
}

/**
 * Función principal que conecta a MongoDB
 * Reutiliza conexiones existentes para mejorar performance
 */
export async function dbConnect(): Promise<typeof mongoose> {
  // Si ya existe una conexión activa, reutilizarla
  if (cached.conn) {
    console.log('✅ Usando conexión existente a MongoDB')
    return cached.conn
  }

  // Si no hay promesa de conexión pendiente, crear una nueva
  if (!cached.promise) {
    const opts = {
      bufferCommands: false // Desactiva el buffering de comandos
    }

    console.log('🔄 Conectando a MongoDB...')

    cached.promise = mongoose
      .connect(MONGODB_URI!, opts)
      .then((mongoose) => {
        console.log('✅ Conexión establecida a MongoDB')
        return mongoose
      })
      .catch((error) => {
        console.error('❌ Error al conectar a MongoDB:', error.message)
        cached.promise = null // Resetear promesa en caso de error
        throw error
      })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

/**
 * Función auxiliar para desconectar (útil en tests o scripts)
 */
export async function dbDisconnect(): Promise<void> {
  if (cached.conn) {
    await cached.conn.disconnect()
    cached.conn = null
    cached.promise = null
    console.log('🔌 Desconectado de MongoDB')
  }
}
