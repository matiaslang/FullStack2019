const dummy = (blogs) => {
  return 1
}

const totalLikes = blogs => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }
  return blogs.length === 0 ?
    0 :
    blogs.reduce(reducer, 0)
}

const favoriteBlog = blogs => {
  const reducer = (max, current) => {
    return current.likes > max.likes ?
      current :
      max
  }
  const result = blogs.reduce(reducer)
  delete result._id
  delete result.__v
  delete result.url
  return result
}

const mostBlogs = blogs => {
  const adder = (total, value) => {
    return total + value
  }
  const mostBlogs = 0
  var authorNames = []


  blogs.forEach(element => {
    console.log(element)
    if (!authorNames.includes(element.author)) {
      name = element.author
      oneAuthor = blogs.filter(function (item) {
        return item.author === name
      })
      newName = oneAuthor[Object.keys(oneAuthor)[0]]
      newName = newName.author
      names = [...authorNames, newName]
      authorNames = names
    }
    console.log(`authorNames: ${authorNames}` )

  });

}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}