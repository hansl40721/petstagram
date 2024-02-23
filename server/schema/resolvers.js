const { User } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

// const users = [
//   {
//     id: 1, username: 'one', password: 'password'
//   },
//   {
//     id: 2, username: 'two', password: 'wordpass'
//   },
// ]

const resolvers = {
  Query: {
    // users: async ()=>{
    //   return User.find().select("-password")
    // }
    users: () => users,
    user: async (_, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id);

        return user;
      }
    },
  },
  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers