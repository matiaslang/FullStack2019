const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'once upon a time',
    author: 'Martti kirjailia',
    url: 'www.google.com/MartinSeikkailut',
    likes: 20000
  },
  {
    title: 'Who am i?',
    author: 'Mysteerikirjoittaja Mikko',
    url: 'www.MikonKotisivut.com/Blogi',
    likes: 100
  }
]

const addedBlog = {
  title: 'I AM A NEW WRITER',
  author: 'Niko Lentäjä',
  url: 'www.cloud.mongodb.com',
  likes: 2
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const blogWihtoutLikes = {
  title: 'This blog has no likes :(',
  author: 'Puuhapete',
  url: 'www.puuhapete.com'
}

const blogWithoutUrl = {
  title: 'This blog has no URL :(',
  author: 'Serkku joonatan',
  likes: 100
}

const blogWithoutTitle = {
  url: 'www.google.com',
  author: 'Serkku joonatan',
  likes: 100
}

module.exports = {
  initialBlogs,
  addedBlog,
  blogsInDb,
  blogWihtoutLikes,
  blogWithoutUrl,
  blogWithoutTitle
}
