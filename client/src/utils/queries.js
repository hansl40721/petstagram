
import { gql }  from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        description
        image
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts{
    posts {
        _id
        description
        image
        postAuthor
        createdAt
      }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSingleThought($thoughtId: ID!) {
    post(postId: $postId) {
      _id
        description
        image
        postAuthor
        createdAt
      # comments {
      #   _id
      #   commentText
      #   commentAuthor
      #   createdAt
      # }
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        description
        image
        postAuthor
        createdAt
      }
    }
  }
`;
