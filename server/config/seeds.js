const db = require('./connection');
const { User, Post } = require('../models');

const posts = [
  {
    description: 'Wizards are cool. Wizard cats are cooler!',
    image: 'https://i.etsystatic.com/18315680/r/il/128c77/3542395763/il_570xN.3542395763_kl1k.jpg',
    postAuthor: 'user1',
    createdAt: '2023-08-01T15:23:55.066+00:00',
    _id: '65df8bbeacdce5caf9e6cab7',
  },
  {
    description: 'Chinchillas are awesome!',
    image: 'https://image.petmd.com/files/styles/978x550/public/2023-01/chinchilla_0.jpg',
    postAuthor: 'user1',
    createdAt: '2023-11-08T15:23:55.066+00:00',
    _id: '65df8bbeacdce5caf9e6cab8',
  },
]

const users = [
  {
      username: 'user1',
      password: '$2b$10$Dd8t4L4SFoO2S7kCCu1bYOpFTbkYlVryy5k5x8ydGhdz4AyOexdaS',
      email: 'user1@example.com',
      posts: [
        {
          _id: "ObjectId('65df8bbeacdce5caf9e6cab7')"
        },
        {
          _id: "ObjectId('65df8bbeacdce5caf9e6cab8')"
        },
      ],
  },
]
// const users = [
//     {
//       username: 'user1',
//       password: '$2b$10$Dd8t4L4SFoO2S7kCCu1bYOpFTbkYlVryy5k5x8ydGhdz4AyOexdaS',
//       email: 'user1@example.com',
//       posts: [
//         {
//           description: 'Wizards are cool. Wizard cats are cooler!',
//           image: 'https://i.etsystatic.com/18315680/r/il/128c77/3542395763/il_570xN.3542395763_kl1k.jpg',
//           postAuthor: 'user1',
//           createdAt: '2023-08-01T15:23:55.066+00:00',
//         },
//         {
//           description: 'Chinchillas are awesome!',
//           image: 'https://image.petmd.com/files/styles/978x550/public/2023-01/chinchilla_0.jpg',
//           postAuthor: 'user1',
//           createdAt: '2023-11-08T15:23:55.066+00:00',
//         },
//       ],
//     },
//     {
//       username: 'user2',
//       password: '$2b$10$keWrOXiE1zCQ4GyxRD7wlumRjUp9mApFew2x70p03QMOMzjUzkFku',
//       email: 'user2@example.com',
//       posts: [
//         {
//           description: 'This is another post.',
//           image: 'https://images.squarespace-cdn.com/content/v1/5c6245b42727be14c54eceb9/1687228999288-UBXOSGMQAM1KHOKLP98O/Ultimate+guide+to+puppy+teething',
//           postAuthor: 'user2',
//           createdAt: '2023-11-08T15:23:55.066+00:00',
//         },
//       ],
//     },
//   ];
  
  async function seed() {
    try {
      // Clear existing data
      await User.deleteMany({});
      console.log('Users removed');
      await Post.deleteMany({});
      console.log('Posts removed');
  
      // Insert seed data
      const createdUsers = await User.insertMany(users);
      const createdPosts = await Post.insertMany(posts);
      console.log('Users seeded:', createdUsers);
      console.log('Posts seeded:', createdPosts);
    } catch (err) {
      console.error('Error seeding data:', err);
    } finally  {
        // Disconnect from server
        await db.disconnect();
        console.log('Disconnected from server');
    }
  }
  
  seed();