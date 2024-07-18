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
mutation addGame($name: String!, $description: String!, $price: Float!, $image: String!) {
  addGame(name: $name, description: $description, price: $price, image: $image) {
    _id
    name
    description
    price
    image
  }
}
`;

export const ADD_WISHLIST = gql`
mutation addWishlist($userId: ID!, $gameIds: [ID!]!) {
  addWishlist(userId: $userId, gameIds: $gameIds) {
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
    description
    price
    image
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



