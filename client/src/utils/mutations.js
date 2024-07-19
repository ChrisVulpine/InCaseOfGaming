import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_GAME = gql`
mutation addGame($name: String!, $type: String!, $price: String!, $img: String!, $small_cap: String!) {
  addGame(name: $name, type: $type, price: $price, img: $img, small_cap: $small_cap) {
    _id
    name
    type
    price
    img
    small_cap
  }
}
`;

// export const ADD_WISHLIST = gql`
// mutation addWishlist($userId: ID!, $game: GameInput!) {
//   addWishlist(userId: $userId, game: $game) {
//     _id
//     games {
//       _id
//       name
//       description
//       price
//       image
//     }
//   }
// }
// `;

export const ADD_WISHLIST = gql`
mutation addWishlist($userId: ID!, $game: GameInput!) {
  addWishlist(userId: $userId, game: $game) {
    _id
    username
  }
}
`;
// export const ADD_LIKED_GAMES = gql`
// mutation addLikedGames($userId: ID!, $gameIds: [ID!]!) {
//   addLikedGames(userId: $userId, gameIds: $gameIds) {
//     _id
//     games {
//       _id
//       name
//       description
//       price
//       image
//     }
//   }
// }
// `;
export const ADD_LIKED_GAMES = gql`
mutation addLikedGames($userId: ID!, $game: GameInput!) {
  addLikedGames(userId: $userId, game: $game) {
    _id
    username
  }
}
`;

export const DELETE_GAME = gql`
mutation deleteGame($_id: ID!, $name: String!) {
  deleteGame(_id: $_id, name: $name) {
    _id
    name
    type
    price
    img
    small_cap
  }
}
`;

export const LOGOUT_USER = gql`
mutation logout {
  logout {
    token
    user {
      _id
    }
    }
}
`; 



