import { gql }  from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      username
      posts {
        _id
        description
        image
      }
    }
  }
`;