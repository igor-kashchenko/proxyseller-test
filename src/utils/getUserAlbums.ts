export const getUserAlbums = async (userId: number) => {
  const userAlbumsURL = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;

  try {
    const response = await fetch(userAlbumsURL);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
