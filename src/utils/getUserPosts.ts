export const getUserPosts = async (userId: string) => {
  const userPostsURL = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;

  try {
    const response = await fetch(userPostsURL);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
