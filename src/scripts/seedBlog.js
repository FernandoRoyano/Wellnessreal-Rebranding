const mongoose = require('mongoose')

// Connection string
const MONGODB_URI = 'mongodb+srv://fernandoroyano_db_user:aYDFIcokXgY5NwVq@wellnessreal.rftvttd.mongodb.net/wellnessreal?appName=wellnessreal'
// Schema del Post
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
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
)

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema)

// Datos de los posts
const posts = [
  {
    slug: 'estrenimiento-integral',
    title: 'CÓMO ABORDAR EL ESTREÑIMIENTO DE MANERA INTEGRAL',
    excerpt: 'El estreñimiento es un problema digestivo común. Descubre cómo abordarlo de forma integral.',
    content: `<h2>El estreñimiento: un problema digestivo común</h2><p>El estreñimiento afecta a millones de personas. Aquí te mostraremos cómo abordarlo desde una perspectiva integral.</p><h2>Causas principales</h2><p>Falta de agua, sedentarismo, dieta pobre en fibra. Pero la solución no es tan simple como crees.</p><h2>Enfoque WellnessReal</h2><p>Combinamos nutrición, movimiento y hábitos. Los resultados hablan solos.</p>`,
    category: 'Nutrición',
    author: 'Fernando Royano',
    date: new Date('2025-10-30'),
    readTime: '5 min',
    published: true,
  },
  {
    slug: 'reglas-mujer-moderna',
    title: 'REGLAS DE ORO PARA LA MUJER MODERNA',
    excerpt: 'Descubre las reglas básicas para ser tu mejor versión.',
    content: `<h2>La mujer moderna necesita equilibrio</h2><p>No se trata de tenerlo todo. Se trata de elegir qué importa.</p><h2>Regla 1: Tu salud es prioridad</h2><p>Sin salud, no hay nada. Punto.</p><h2>Regla 2: La disciplina es libertad</h2><p>Cuanto más disciplinada, más libre te sentirás.</p>`,
    category: 'Bienestar',
    author: 'Fernando Royano',
    date: new Date('2025-10-25'),
    readTime: '8 min',
    published: true,
  },
  {
    slug: 'remedios-resaca',
    title: 'REMEDIOS CONTRA LA RESACA',
    excerpt: 'Estrategias efectivas para prevenir y combatir la resaca.',
    content: `<h2>La resaca no es castigo, es deuda fisiológica</h2><p>Cuando bebes, tu cuerpo se deshidrata. La resaca es la factura.</p><h2>Prevención antes que cura</h2><p>Hidratación, electrolitos, comida. Los básicos funcionan.</p><h2>Si ya es tarde...</h2><p>Agua, movimiento suave, y espera. No hay atajo.</p>`,
    category: 'Recuperación',
    author: 'Fernando Royano',
    date: new Date('2025-10-20'),
    readTime: '6 min',
    published: true,
  },
  {
    slug: 'calcular-calorias',
    title: 'MÉTODO PARA CALCULAR TUS CALORÍAS',
    excerpt: 'Aprende a calcular cuántas calorías necesita tu cuerpo.',
    content: `<h2>Las calorías son importantes</h2><p>No es todo, pero importa. Aquí te enseñamos a calcularlas correctamente.</p><h2>Tu metabolismo basal (BMR)</h2><p>Primero, calcula cuántas calorías quemas en reposo.</p><h2>Multiplica por tu nivel de actividad</h2><p>Sedentario, moderado, activo. Cada uno tiene su factor.</p>`,
    category: 'Nutrición',
    author: 'Fernando Royano',
    date: new Date('2025-10-15'),
    readTime: '7 min',
    published: true,
  },
  {
    slug: 'proteina-suero',
    title: 'TODO SOBRE LA PROTEÍNA DE SUERO',
    excerpt: 'Guía completa sobre la proteína en polvo.',
    content: `<h2>La proteína de suero: ¿mito o realidad?</h2><p>Es real. Pero no es mágica ni es lo único que necesitas.</p><h2>Tipos de proteína de suero</h2><p>Concentrado, aislado, hidrolizado. Cada uno tiene su lugar.</p><h2>¿Cuándo tomarla?</h2><p>Post-entreno es ideal. Pero cualquier momento sirve.</p>`,
    category: 'Nutrición',
    author: 'Fernando Royano',
    date: new Date('2025-10-10'),
    readTime: '8 min',
    published: true,
  },
  {
    slug: 'reducir-antojos-azucar',
    title: 'CÓMO REDUCIR LOS ANTOJOS POR AZÚCAR',
    excerpt: 'Estrategias para controlar la ansiedad por ultraprocesados.',
    content: `<h2>Los antojos por azúcar son reales</h2><p>No es debilidad. Es fisiología. Tu cuerpo está acostumbrado al pico de insulina.</p><h2>Estrategia 1: Estabiliza el azúcar en sangre</h2><p>Come proteína, fibra y grasas en cada comida.</p><h2>Estrategia 2: Duerme bien</h2><p>La falta de sueño aumenta los antojos. No es casualidad.</p>`,
    category: 'Nutrición',
    author: 'Fernando Royano',
    date: new Date('2025-10-05'),
    readTime: '5 min',
    published: true,
  },
]

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Conectado a MongoDB')
    
    await Post.deleteMany({})
    console.log('🗑️  BD limpiada')
    
    await Post.insertMany(posts)
    console.log('✅ 6 Posts insertados correctamente')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

seed()
