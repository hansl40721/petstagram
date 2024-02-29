import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
mutation addPost($description: String!, $image: String!) {
  addPost(description: $description, image: $image) {
    _id
    description
    image
    createdAt
    postAuthor
    comments {
      _id
      commentText
    }
  }
}
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      description
      image
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($postId: ID!, $commentId: ID!) {
    removeComment(postId: $postId, commentId: $commentId) {
      _id
      comments {
        _id
        commentText
        commentAuthor
      }
    }
  }
`;

// export const REMOVE_COMMENT = gql`
//   mutation removeComment($postId: ID!, $commentId: ID!) {
//     removeComment(commentText: $commentText) {
//       _id
//       comments {
//         _id
//         commentText
//         commentAuthor
//       }
//     }
//   }
// `;