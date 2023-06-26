import { User } from '../types/user';

const usersURL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  try {
    const response = await fetch(usersURL);
    const data = await response.json();

    const users = data.map(({ id, name, username, email }: User) => ({
      id,
      name,
      username,
      email,
    }));

    return users;
  } catch (error) {
    console.log(error);
  }
};
