const typeDefs = `
type User {
  _id: ID
  username: String!
  password: String!
}

type Query {
  users: [User]
}
`

module.exports = typeDefs