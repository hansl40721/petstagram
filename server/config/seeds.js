const db = require('./connection');
const { User, Post } = require('../models');

const posts = [
  {
    _id: "65df98edf9411a9f2f8a22e8",
    description: "This is my kitten, being sleepy and adorable.",
    image: "https://www.marthastewart.com/thmb/g-FunKfdiZombJQ7pB4wb8BF4C8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-kitten-138468381-4cd82b91d7be45cb9f9aa8366e10bce4.jpg",
    postAuthor: "user1",
    createdAt: "2024-02-28T20:34:53.008Z",
    comments: [
      {
        commentText: "She's one month old!",
        commentAuthor: "user1",
        _id: "65df9948f9411a9f2f8a22f3",
        createdAt: "2024-02-28T20:36:24.343Z",
      },
      {
        commentText: "She's so cute!",
        commentAuthor: "Bob",
        _id: "65df99b8f9411a9f2f8a2303",
        createdAt: "2024-02-28T20:38:16.719Z",
      }
    ],
  },
  {
    _id: "65df9915f9411a9f2f8a22ed",
    description: "Wizards are cool. Cat wizards are COOLER.",
    image: "https://assets3.thrillist.com/v1/image/3129374/382x382/flatten;scale;matte=ffffff=center;webp=auto;jpeg_quality=60.jpg",
    postAuthor: "user1",
    createdAt: "2024-02-28T20:35:33.131Z",
    comments: [
      {
        commentText: "WIZARDS ARE AMAZING FR FR",
        commentAuthor: "user1",
        _id: "65df9965f9411a9f2f8a22f9",
        createdAt: "2024-02-28T20:36:53.354Z",
      },
    ],
  },
  {
    _id: "65df9dbcd0aa013839975d0d",
    description: "This isn't actually my pet. I just like turtles.",
    image: "http://res.cloudinary.com/dcjz6vl08/image/upload/v1709153601/petstagram/erc5njgczggueg7978nc.jpg",
    postAuthor: "Bob",
    createdAt: "2024-02-28T20:55:24.435Z",
    comments: [],
  },
  {
    _id: "65dfd67b25163687eb91c93c",
    description: "This is my pal, Whiskers!",
    image: "https://www.ecpubliclibrary.info/wp-content/uploads/2023/09/rat-header-scaled.jpg",
    postAuthor: "colormagic",
    createdAt: "2024-02-29T00:57:31.596Z",
    "comments": [
      {
        commentText: "SOOOOOOOO CUTE!!!!!!",
        commentAuthor: "user1",
        _id: "65e11a222b8c9e63df3358bf",
        createdAt: "2024-02-29T23:58:26.403Z"
      },
      {
        commentText: "Whiskers is such a great name!",
        commentAuthor: "Elizabeth",
        _id: "65e11ad12b8c9e63df3358fc",
        createdAt: "2024-03-01T00:01:21.828Z"
      }
    ],
  },
  {
    _id: "65e111042b8c9e63df335817",
    description: "This is Benjamin. He's a very healthy 15 year-old chinchilla.",
    image: "https://www.alexandriapetcare.com/wp-content/uploads/2018/07/perfectly-round-chinchilla-camerons-chinchillas-15-58ad5374a8afb__700.jpg",
    postAuthor: "ChinchillBen",
    createdAt: "2024-02-29T23:19:32.162Z",
    comments: [],
  },
  {
    _id: "65e1114a2b8c9e63df33581c",
    description: "This is my other chinchilla, Patrick. He's a little rude, but very cute.",
    image: "https://uploads-ssl.webflow.com/5eae38112aed416159affd28/5f340515ff51ecbe2529a988_Blog%20Images(4).jpg",
    postAuthor: "ChinchillBen",
    createdAt: "2024-02-29T23:20:42.047Z",
    comments: [
      {
        commentText: "That's one cool chinchilla! I dig it.",
        commentAuthor: "TheRealJOE",
        _id: "65e11aaf2b8c9e63df3358e2",
        createdAt: "2024-03-01T00:00:47.793Z"
      }
    ],
  },
  {
    _id: "65e111d72b8c9e63df335821",
    description: "This one isn't my chinchilla, but it's very cute nonetheless.",
    image: "https://letslovechinchillas.weebly.com/uploads/5/4/2/0/54205129/6050123_orig.jpg",
    postAuthor: "ChinchillBen",
    createdAt: "2024-02-29T23:23:03.134Z",
    comments: [],
  },
  {
    _id: "65e112892b8c9e63df335833",
    description: "These are my two cats, Mizuki and Tomo. Tomo is the big one on the right.",
    image: "http://res.cloudinary.com/dcjz6vl08/image/upload/v1709249121/petstagram/r2gg94kpskumnrtj7wk3.jpg",
    postAuthor: "Jacob",
    createdAt: "2024-02-29T23:26:01.503Z",
    comments: [
      {
        commentText: "Very cute cats! Are they related?",
        commentAuthor: "user1",
        _id: "65e11a002b8c9e63df3358b2",
        createdAt: "2024-02-29T23:57:52.582Z"
      }
    ],
  },
  {
    _id: "65e112c42b8c9e63df335839",
    description: "Mizuki was very scrawny as a kitten. Here she is going on her first walk.",
    image: "http://res.cloudinary.com/dcjz6vl08/image/upload/v1709249191/petstagram/tftteoqaodfpndqxawc2.jpg",
    postAuthor: "Jacob",
    createdAt: "2024-02-29T23:27:00.454Z",
    comments: [],
  },
  {
    _id: "65e113212b8c9e63df33583f",
    description: "This Tomo when he was a kitten. His fosters harness-trained him from a young age.",
    image: "http://res.cloudinary.com/dcjz6vl08/image/upload/v1709249262/petstagram/mfsgog73amkbkgnerzvl.jpg",
    postAuthor: "Jacob",
    createdAt: "2024-02-29T23:28:33.268Z",
    comments: [],
  },
  {
    _id: "65e113652b8c9e63df335845",
    description: "Tomo is being nice to Mizuki in this picture... It doesn't happen often.",
    image: "http://res.cloudinary.com/dcjz6vl08/image/upload/v1709249376/petstagram/wtzimapq2vkrmvocu6oe.jpg",
    postAuthor: "Jacob",
    createdAt: "2024-02-29T23:29:41.743Z",
    comments: [],
  },
  {
    _id: "65e113af2b8c9e63df33584c",
    description: "They dressed up this past Halloween.",
    image: "http://res.cloudinary.com/dcjz6vl08/image/upload/v1709249449/petstagram/jl310s3lfevvjzvf6rs2.jpg",
    postAuthor: "Jacob",
    createdAt: "2024-02-29T23:30:55.819Z",
    comments: [],
  },
  {
    _id: "65e1148d2b8c9e63df33585c",
    description: "This is Chip! He's fluffy and loves stopping to sniff the flowers.",
    image: "https://www.mediastorehouse.com/p/172/domestic-rabbit-sniffing-flowers-1314487.jpg.webp",
    postAuthor: "Flowerchild",
    createdAt: "2024-02-29T23:34:37.140Z",
    comments: [
      {
        commentText: "I love the floof on his back!",
        commentAuthor: "Elizabeth",
        _id: "65e11ae72b8c9e63df335904",
        createdAt: "2024-03-01T00:01:43.379Z"
      }
    ],
  },
  {
    _id: "65e114be2b8c9e63df335861",
    description: "These are Chip's buddies, Otis and Milo. They come over sometimes to play.",
    image: "https://www.canberratimes.com.au/images/transform/v1/crop/frm/dEtJVeiv3hvihxzWfeZvyz/3715089a-8ea7-44b7-b7f9-55f40bb2ecd2.jpg/r0_312_2992_1994_w1200_h678_fmax.jpg",
    postAuthor: "Flowerchild",
    createdAt: "2024-02-29T23:35:26.455Z",
    comments: [
      {
        commentText: "They are too cute together! I love that they come over for playdates.",
        commentAuthor: "Elizabeth",
        _id: "65e11b022b8c9e63df33590b",
        createdAt: "2024-03-01T00:02:10.419Z"
      }
    ],
  },
  {
    _id: "65e1155e2b8c9e63df335871",
    description: "This is my Corgi, Lord Dunkirk. He's cooler than your dog.",
    image: "https://t4.ftcdn.net/jpg/05/62/99/33/360_F_562993350_Tp4Kg8jeDeNzaotpM81HpsiR8NmLfvzf.jpg",
    postAuthor: "TheRealJOE",
    createdAt: "2024-02-29T23:38:06.262Z",
    comments: [
      {
        commentText: "How many awards has your dog won?",
        commentAuthor: "DogShowPerson",
        _id: "65e119852b8c9e63df3358a1",
        createdAt: "2024-02-29T23:55:49.792Z"
      },
      {
        commentText: "My dog doesn't need awards to be cooler than YOUR dog.",
        commentAuthor: "TheRealJOE",
        _id: "65e11a7a2b8c9e63df3358d5",
        createdAt: "2024-02-29T23:59:54.985Z"
      }
    ],
  },
  {
    _id: "65e118eb2b8c9e63df335891",
    description: "This is Rigby. He's an award-winning agility dog.",
    image: "https://cdn.britannica.com/26/234626-050-7289C87B/Border-collie-dog-jumping-hurdle-agility.jpg",
    postAuthor: "DogShowPerson",
    createdAt: "2024-02-29T23:53:15.248Z",
    comments: [],
  },
  {
    _id: "65e119082b8c9e63df335896",
    description: "Zooooom!! This guy is a star!",
    image: "https://www.akc.org/wp-content/uploads/2018/03/border-collie-agility-pole-jump-500x486.jpg",
    postAuthor: "DogShowPerson",
    createdAt: "2024-02-29T23:53:44.579Z",
    comments: [],
  },
  {
    _id: "65e1195c2b8c9e63df33589b",
    description: "Look at this dude leap through that hoop like a dolphin!",
    image: "https://images.seattletimes.com/wp-content/uploads/2016/02/64683d319baf42a19c1a3ec46d1d7552.jpg?d=780x520",
    postAuthor: "DogShowPerson",
    createdAt: "2024-02-29T23:55:08.018Z",
    comments: [
      {
        commentText: "This boy is a scholar.",
        commentAuthor: "DogShowPerson",
        _id: "65e11c0f2b8c9e63df335939",
        createdAt: "2024-03-01T00:06:39.324Z"
      }
    ],
  },
  {
    _id: "65e11b7a2b8c9e63df335910",
    description: "This is Sticky and Toffee. They are the best of friends. They are both princesses, clearly.",
    image: "https://d.newsweek.com/en/full/2299867/british-shorthair-cat-golden-retriever.jpg",
    postAuthor: "Elizabeth",
    createdAt: "2024-03-01T00:04:10.683Z",
    comments: [
      {
        commentText: "You should enter your dog in a dog show. It looks like it has great confirmation.",
        commentAuthor: "DogShowPerson",
        _id: "65e11c362b8c9e63df33593f",
        createdAt: "2024-03-01T00:07:18.845Z"
      }
    ],
  },
  {
    _id: "65e11bb92b8c9e63df335915",
    description: "They do everything together. Even beg for treats.",
    image: "https://www.mygoldenretrieverpuppies.com/wp-content/uploads/2023/01/Untitled-design-2.png",
    postAuthor: "Elizabeth",
    createdAt: "2024-03-01T00:05:13.829Z",
    comments: [],
  }
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
  {
    username: "colormagic",
    password: "$2b$10$HxfX9HV/RCG6GdqEMpovmORtKhQCPcaVJ5AG5xoWN.1v/2r9sltQS",
    email: "colormagic@yahoo.com",
    posts: [
      {
        _id: "65dfd67b25163687eb91c93c"
      }
    ],
  },
  {
    username: "ChinchillBen",
    password: "$2b$10$bpoK7sNOey/NX6iDwKY2yeRJrrztapGk1BsH3W7T3c1qQADviBZ6K",
    email: "chinchillin@gmail.com",
    posts: [
      {
        _id: "65e111042b8c9e63df335817"
      },
      {
        _id: "65e1114a2b8c9e63df33581c"
      },
      {
        _id: "65e111d72b8c9e63df335821"
      }
    ],
  },
  {
    username: "Jacob",
    password: "$2b$10$KxjRwRZIksnoklktyTRxFuQmGj9KTZVNQEHANj6c7SIF4Qj2rVWVa",
    email: "test@test.com",
    posts: [
      {
        _id: "65e112892b8c9e63df335833"
      },
      {
        _id: "65e112c42b8c9e63df335839"
      },
      {
        _id: "65e113212b8c9e63df33583f"
      },
      {
        _id: "65e113652b8c9e63df335845"
      },
      {
        _id: "65e113af2b8c9e63df33584c"
      }
    ],
  },
  {
    username: "Flowerchild",
    password: "$2b$10$qTZDdQPxsKHMLRG8r9.n4ejVlVO48ySU32MtDUhtO.8ZSLHnxYUyG",
    email: "flowers@gmail.com",
    posts: [
      {
        _id: "65e1148d2b8c9e63df33585c"
      },
      {
        _id: "65e114be2b8c9e63df335861"
      },
    ],
  },
  {
    username: "TheRealJOE",
    password: "$2b$10$vScSvczu0bNMRZZ/dlOKDe9zTuplh1PXifVjKE81CWlKk2c0eqE36",
    email: "realjoe@gmail.com",
    posts: [
      {
        _id: "65e1155e2b8c9e63df335871"
      },
      {
        _id: "65e115d92b8c9e63df335876"
      },
    ],
  },
  {
    username: "Elizabeth",
    password: "$2b$10$ORFUdlHNS4WBFWNT5mg9keiiilhTticc67k7eotx2M6B7nzKCx0De",
    email: "elizabeth@gmail.com",
    posts: [
      {
        _id: "65e11b7a2b8c9e63df335910"
      },
      {
        _id: "65e11bb92b8c9e63df335915"
      },
    ],
  },
  {
    username: "DogShowPerson",
    password: "$2b$10$cVR1S8EF2RLpdqwq/XBEjOnjWBHA/bVxalz/gUDZyGuQRTIeRnti2",
    email: "dogshow89@gmail.com",
    posts: [
      {
        _id: "65e118eb2b8c9e63df335891"
      },
      {
        _id: "65e119082b8c9e63df335896"
      },
      {
        _id: "65e1195c2b8c9e63df33589b"
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