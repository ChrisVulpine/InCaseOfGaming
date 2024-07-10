// import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query {
    getAllUsers {
      id
      name
      age
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.getAllUsers.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;