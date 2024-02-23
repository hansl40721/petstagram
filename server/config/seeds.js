const db = require('./connection');
const { User, Post } = require('../models');

const users = [
    {
      username: 'user1',
      password: 'password1',
      email: 'user1@example.com',
      posts: [
        {
          title: 'First Post',
          description: 'This is the first post.',
          image: 'https://example.com/image1.jpg',
        },
        {
          title: 'Second Post',
          description: 'This is the second post.',
          image: 'https://example.com/image2.jpg',
        },
      ],
    },
    {
      username: 'user2',
      password: 'password2',
      email: 'user2@example.com',
      posts: [
        {
          title: 'Another Post',
          description: 'This is another post.',
          image: 'https://example.com/image3.jpg',
        },
      ],
    },
  ];
  
  async function seed() {
    try {
      // Clear existing data
      await User.deleteMany({});
      console.log('Users removed');
      await Post.deleteMany({});
      console.log('Posts removed');
  
      // Insert seed data
      const createdUsers = await User.insertMany(users);
      console.log('Users seeded:', createdUsers);
    } catch (err) {
      console.error('Error seeding data:', err);
    } finally  {
        // Disconnect from server
        await db.disconnect();
        console.log('Disconnected from server');
    }
  }
  
  seed();