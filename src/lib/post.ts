import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  published: boolean
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      const readTime = readingTime(content).text

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        content,
        category: data.category,
        author: data.author,
        date: data.date,
        readTime: data.readTime || readTime,
        image: data.image,
        published: data.published ?? true,
      }
    })
    .filter(post => post.published)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return allPosts
}

export function getPostBySlug(slug: string): Post | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return undefined
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const readTime = readingTime(content).text

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    content,
    category: data.category,
    author: data.author,
    date: data.date,
    readTime: data.readTime || readTime,
    image: data.image,
    published: data.published ?? true,
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => ({
      slug: fileName.replace(/\.md$/, '')
    }))
}
