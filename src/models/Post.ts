import mongoose, { Schema, model, models } from 'mongoose'

export interface IPost {
  _id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: Date
  readTime: string
  image?: string
  published: boolean
}

const PostSchema = new Schema<IPost>(
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

const Post = models.Post || model<IPost>('Post', PostSchema)

export default Post
