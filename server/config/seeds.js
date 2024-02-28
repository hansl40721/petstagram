const db = require('./connection');
const { User, Post } = require('../models');

const posts = [
  {
    _id: "65df98edf9411a9f2f8a22e8",
    description: "This is a cat.",
    image: "https://www.marthastewart.com/thmb/g-FunKfdiZombJQ7pB4wb8BF4C8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-kitten-138468381-4cd82b91d7be45cb9f9aa8366e10bce4.jpg",
    postAuthor: "user1",
    createdAt: "2024-02-28T20:34:53.008Z",
    comments: [
      {
        commentText: "WOW!",
        commentAuthor: "user1",
        _id: "65df9948f9411a9f2f8a22f3",
        createdAt: "2024-02-28T20:36:24.343Z",
      },
      {
        commentText: "I AM BOB",
        commentAuthor: "Bob",
        _id: "65df99b8f9411a9f2f8a2303",
        createdAt: "2024-02-28T20:38:16.719Z",
      }
    ],
  },
  {
    _id: "65df9915f9411a9f2f8a22ed",
    description: "Wizards are cool.",
    image: "https://assets3.thrillist.com/v1/image/3129374/382x382/flatten;scale;matte=ffffff=center;webp=auto;jpeg_quality=60.jpg",
    postAuthor: "user1",
    createdAt: "2024-02-28T20:35:33.131Z",
    comments: [
      {
        commentText: "WIZARDS ARE AMAZING",
        commentAuthor: "user1",
        _id: "65df9965f9411a9f2f8a22f9",
        createdAt: "2024-02-28T20:36:53.354Z",
      },
    ],
  },
  {
    _id: "65df9dbcd0aa013839975d0d",
    description: "This is neato!",
    image: "http://res.cloudinary.com/dcjz6vl08/image/upload/v1709153601/petstagram/erc5njgczggueg7978nc.jpg",
    postAuthor: "Bob",
    createdAt: "2024-02-28T20:55:24.435Z",
    comments: [],
  },
]

const users = [
  {
    username: "user1",
    password: "$2b$10$ajVdrds.6Vv1VtMgalU9GevA3VG6hokehyig0WW2izAOfIrLfKdQ.",
    email: "user1@example.com",
    posts: [
      {
        _id: "65df98edf9411a9f2f8a22e8"
      },
      {
        _id: "65df9915f9411a9f2f8a22ed"
      }
    ],
  },
  {
    username: "Bob",
    password: "$2b$10$/7gmqYMbV6xSOCL4osmfbedvGe1BTzAjYoKT/zIWSR6ne7GO/6LH2",
    email: "bob@bob.com",
    posts: [
      {
        _id: "65df9dbcd0aa013839975d0d"
      }
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