export interface Service {
  id: string
  name: string
  slug: string
  description: string
  price: number
  duration: number
  category: 'entrenamiento' | 'nutricion' | 'osteopatia'
  features: string[]
  image?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface NewsletterFormData {
  email: string
}
