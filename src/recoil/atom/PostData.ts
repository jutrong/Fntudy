import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { TPostResponse } from '../../types/posts';

const { persistAtom } = recoilPersist();
export const postDataState = atom<TPostResponse>({
  key: 'postDataState',
  default: {
    posts: [],
  },
  effects_UNSTABLE: [persistAtom],
});
