import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../utils/getUsers';
import { InitialState } from '../types/initialState';
import { Status } from '../types/Status';
import { getUserPosts } from '../utils/getUserPosts';
import { getUserAlbums } from '../utils/getUserAlbums';

export const fetchUsers = createAsyncThunk('fetch/users', async () => {
  const usersData = await getUsers();

  return usersData;
});

export const fetchUserPosts = createAsyncThunk(
  'fetch/userPosts',
  async (userId: string) => {
    const userPostsData = await getUserPosts(userId);

    return userPostsData;
  }
);

export const fetchUserAlbums = createAsyncThunk(
  'fetch/userAlbums',
  async (userId: number) => {
    const userAlbumsData = await getUserAlbums(userId);

    return userAlbumsData;
  }
);

const initialState: InitialState = {
  users: [],
  userPosts: [],
  userAlbums: [],
  userStatus: Status.Idle,
  userPostsStatus: Status.Idle,
  userAlbumsStatus: Status.Idle,
  errorMessage: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.userStatus = Status.Loading;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.userStatus = Status.Succeeded;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.userStatus = Status.Failed;
        state.errorMessage = 'error';
      })
      .addCase(fetchUserPosts.pending, (state) => {
        state.userPostsStatus = Status.Loading;
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.userPostsStatus = Status.Succeeded;
        state.userPosts = action.payload;
      })
      .addCase(fetchUserPosts.rejected, (state) => {
        state.userPostsStatus = Status.Failed;
        state.errorMessage = 'error';
      })
      .addCase(fetchUserAlbums.pending, (state) => {
        state.userAlbumsStatus = Status.Loading;
      })
      .addCase(fetchUserAlbums.fulfilled, (state, action) => {
        state.userAlbumsStatus = Status.Succeeded;
        state.userAlbums = action.payload;
      })
      .addCase(fetchUserAlbums.rejected, (state) => {
        state.userAlbumsStatus = Status.Loading;
        state.errorMessage = 'error';
      });
  },
});

export default usersSlice.reducer;
