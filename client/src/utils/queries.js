import {gql} from '@apollo/client';

export const QUERY_USER = gql`
query user($userId: String!) {
  user(userId: $userId) {
    _id
    username
    email
    wishlist {
      game {
        _id
        name
        type
        price
        img
        small_cap
      }
    }
    likedGames {
      game {
        _id
        name
        type
        price
        img
        small_cap
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
      type
      price
      img
      small_cap
    }
  }
}
`;

export const QUERY_LIKED_GAMES = gql`
query likedGames($userId: ID!) {
  likedGames(userId: $userId) {
    games {
      _id
      name
      type
      price
      img
      small_cap
    }
  }
}
`;

export const QUERY_GAME = gql`
query gameInput($id: String!) {
  gameInput(id: $id) {
    _id
    name
    type
    price
    img
    small_cap
  }
}
`;

export const QUERY_GAMES = gql`
query games {
  games {
    _id
    name
    type
    price
    img
    small_cap
  }
}
`;

export const QUERY_USERS = gql`
query users {
  users {
    _id
    username
    email
  }
}
`;

export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
    wishlist {
      _id
      game {
        _id
        name
        type
        price
        img
        small_cap
      }
    }
    likedGames {
      _id
      game {
        _id
        name
        type
        price
        img
        small_cap
      }
    }
  }
}
`;


