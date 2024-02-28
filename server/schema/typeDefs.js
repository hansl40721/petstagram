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
  image: String!
  postAuthor: String
  createdAt: String
  comments: [Comment]
}

type Comment {
  _id: ID
  commentText: String
  commentAuthor: String
  createdAt: String
}

type Query {
  users: [User]
  user(username: String!): User
  posts(username: String): [Post]
  post(postId: ID!): Post
  me: User
}

type Auth {
  token: ID
  user: User
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addPost(description: String!, image: String!): Post
  addComment(postId: ID!, commentText: String!): Post
  removePost(postId: ID!): Post
  removeComment(postId: ID!, commentId: ID!): Post
}
`;

module.exports = typeDefs