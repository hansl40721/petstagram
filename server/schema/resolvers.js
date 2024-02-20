const { User } = require('../models')

const users = [
  {
    id: 1, username: 'one', password: 'password'
  },
  {
    id: 2, username: 'two', password: 'wordpass'
  },
]

const resolvers = {
  Query: {
    // users: async ()=>{
    //   return User.find().select("-password")
    // }
    users: () => users,
  }
}

module.exports = resolvers