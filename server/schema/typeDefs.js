const typeDefs = `
type User {
  _id: ID
  username: String!
  password: String!
  email: String!
  posts: [Post]
}

type Post {
  _id: ID
  title: String!
  description: String!
  image: String
}

type Query {
  users: [User]
  posts(_id: ID!): [Post]
}

type Auth {
  token: ID
  user: User
}

type Mutation {
  addUser(username: String!, password: String!): Auth
}
`

module.exports = typeDefs