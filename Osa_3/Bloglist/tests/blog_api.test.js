const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const helper = require('./api_test_helper')
const api = supertest(app)

beforeEach(async () => {
  await Blog.remove({})

  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog)
    await blogObject.save()
  }
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('All Blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body.length).toBe(helper.initialBlogs.length)
})

test('a spesific blog is within the returned blogs', async () => {
  const response = await api.get('/api/blogs')
  const contents = response.body.map(r => r.title)
  expect(contents).toContainEqual('once upon a time')
})

test('The ID must exist', async () => {
  const response = await api.get('/api/blogs')
  response.body.map(r => expect(r.id).toBeDefined())
})

test('Valid blog gets saved', async () => {
  const newBlog = helper.addedBlog

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)

  const titles = blogsAtEnd.map(n => n.title)
  expect(titles).toContain('I AM A NEW WRITER')
})

test('Blog without likes get assigned likes of amount 0', async () => {
  const newBlog = helper.blogWihtoutLikes

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  response.body.map(r => expect(r.likes).toBeGreaterThanOrEqual(0))
})

test('Blog without url gets rejected', async () => {
  const newBlog = helper.blogWithoutUrl

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)
})

test('Blog without title gets rejected', async () => {
  const newBlog = helper.blogWithoutTitle

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)
})

afterAll(() => {
  mongoose.connection.close()
})
