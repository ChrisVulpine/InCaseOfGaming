import {gql} from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    wishlist {
      _id
      games {
        _id
        name
        description
        price
        image
      }
    }
    likedGames {
      _id
      games {
        _id
        name
        description
        price
        image
      }
    }
  }
}
`;

export const QUERY_WISHLIST = gql`
query wishlist($userId: ID!) {
  wishlist(userId: $userId) {
    _id
    games {
      _id
      name
      description
      price
      image
    }
  }
}
`;

export const QUERY_LIKED_GAMES = gql`
query likedGames($userId: ID!) {
  likedGames(userId: $userId) {
    _id
    games {
      _id
      name
      description
      price
      image
    }
  }
}
`;

export const QUERY_GAME = gql`
query game($name: String!) {
  game(name: $name) {
    _id
    name
    description
    price
    image
  }
}
`;

export const QUERY_GAMES = gql`
query games {
  games {
    _id
    name
    description
    price
    image
  }
}
`;

// export const QUERY_USERS = gql`
// query users {
//   users {
//     _id
//     username
//     email
//   }
// }
// `;

// export const QUERY_ME = gql`
// query me {
//   me {
//     _id
//     username
//     email
//     wishlist {
//       _id
//       games {
//         _id
//         name
//         description
//         price
//         image
//       }
//     }
//     likedGames {
//       _id
//       games {
//         _id
//         name
//         description
//         price
//         image
//       }
//     }
//   }
// }
// `;


