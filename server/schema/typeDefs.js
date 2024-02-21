const typeDefs = `
type User {
  _id: ID
  username: String!
  email: String!
  password: String!
  posts: [Post]
}

type Post {
  _id: ID
  description: String!
  image: String
}

type Query {
  users: [User]
  user: User
  posts(_id: ID!): [Post]
}

type Auth {
  token: ID
  user: User
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
}
`

module.exports = typeDefs