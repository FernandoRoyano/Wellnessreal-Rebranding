// src/scripts/seedBlog.js
/**
 * Script para popular la base de datos con posts iniciales
 * Ejecutar con: node src/scripts/seedBlog.js
 */

// Cargar variables de entorno desde .env.local
require('dotenv').config({ path: '.env.local' })
const mongoose = require('mongoose')

// Leer URI de MongoDB desde variable de entorno
const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error('❌ Error: Define MONGODB_URI en .env.local')
  process.exit(1)
}

/**
 * Schema del Post (igual que en Post.ts pero en JavaScript)
 */
const PostSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    readTime: { type: String, required: true },
    image: { type: String },
    published: { type: Boolean, default: true }
  },
  { timestamps: true }
)

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema)

/**
 * Datos de los posts iniciales
 */
const posts = [
  {
    slug: 'estrenimiento-integral',
    title: 'CÓMO ABORDAR EL ESTREÑIMIENTO DE MANERA INTEGRAL',
    excerpt:
      'El estreñimiento es un problema digestivo común. Descubre cómo abordarlo de forma integral.',
    category: 'Nutrición',
    author: 'Fernando Royano',
    date: new Date('2025-10-30'),
    readTime: '5 min',
    content: `# Cómo Abordar el Estreñimiento de Manera Integral

El estreñimiento afecta a millones de personas. Aquí te mostraremos cómo abordarlo desde una perspectiva integral.

## Causas Principales

Falta de agua, sedentarismo, dieta pobre en fibra. Pero la solución no es tan simple como crees.

## Solución Integral

Combinamos nutrición, movimiento y hábitos. Los resultados hablan solos.`,
    published: true
  },
  {
    slug: 'reglas-mujer-moderna',
    title: 'REGLAS DE ORO PARA LA MUJER MODERNA',
    excerpt: 'Descubre las reglas básicas para ser tu mejor versión.',
    category: 'Bienestar',
    author: 'Fernando Royano',
    date: new Date('2025-10-28'),
    readTime: '4 min',
    content: `# Reglas de Oro para la Mujer Moderna

Descubre las reglas básicas para ser tu mejor versión como mujer moderna.

## Autoconocimiento

Conoce tu cuerpo, tus ciclos hormonales, tus necesidades nutricionales.

## Balance

Equilibrio entre trabajo, vida personal y autocuidado.`,
    published: true
  },
  {
    slug: 'dia-alimentacion',
    title: 'UN DÍA EN MI ALIMENTACIÓN',
    excerpt: 'Te cuento exactamente qué como en un día normal.',
    category: 'Nutrición',
    author: 'Fernando Royano',
    date: new Date('2025-10-25'),
    readTime: '6 min',
    content: `# Un Día en Mi Alimentación

Te cuento exactamente qué como en un día normal y por qué.

## Desayuno

Proteína, grasas saludables y carbohidratos complejos.

## Comida

Plato completo con todos los macronutrientes.

## Cena

Ligera pero nutritiva.`,
    published: true
  },
  {
    slug: 'mitos-fitness',
    title: 'LOS 5 MITOS DEL FITNESS QUE DEBES CONOCER',
    excerpt:
      'Desmontamos los mitos más comunes sobre el fitness y la nutrición.',
    category: 'Entrenamiento',
    author: 'Fernando Royano',
    date: new Date('2025-10-20'),
    readTime: '7 min',
    content: `# Los 5 Mitos del Fitness que Debes Conocer

Desmontamos los mitos más comunes sobre el fitness y la nutrición.

## Mito 1: Más es mejor

No necesariamente. La calidad supera la cantidad.

## Mito 2: Sin dolor no hay resultados

Falso. El dolor excesivo indica lesión.`,
    published: true
  }
]

/**
 * Función principal para popular la base de datos
 */
async function seedDatabase() {
  try {
    // Conectar a MongoDB
    console.log('🔄 Conectando a MongoDB...')
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Conectado a MongoDB')

    // Limpiar colección existente
    const deleteResult = await Post.deleteMany({})
    console.log(
      `🧹 Colección limpiada (${deleteResult.deletedCount} documentos eliminados)`
    )

    // Insertar posts
    const insertedPosts = await Post.insertMany(posts)
    console.log(`✅ ${insertedPosts.length} posts insertados correctamente`)

    // Mostrar los posts insertados
    console.log('\n📝 Posts insertados:')
    insertedPosts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title} (slug: ${post.slug})`)
    })

    // Cerrar conexión y salir
    await mongoose.connection.close()
    console.log('\n🔌 Conexión cerrada')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

// Ejecutar la función
seedDatabase()
