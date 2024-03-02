import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { TPost, TPostResponse } from '../../types/posts';

const { persistAtom } = recoilPersist();

export const postDataState = atom<TPost[]>({
  key: 'postDataState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
