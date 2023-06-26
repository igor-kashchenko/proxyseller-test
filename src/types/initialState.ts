import { Album } from './Album';
import { Post } from './Post';
import { Status } from './Status';
import { User } from './user';

export type InitialState = {
  users: User[],
  userStatus: Status,
  errorMessage: string,
  userPosts: Post[],
  userPostsStatus: Status,
  userAlbums: Album[],
  userAlbumsStatus: Status,
}
