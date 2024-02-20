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

type Auth {
  token: ID
  user: User
}

type Query {
  users: [User]
  posts(_id: ID!): [Post]
}

type Mutation {
  addUser(username: String!, password: String!): Auth
}
`

module.exports = typeDefs