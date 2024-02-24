import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { TPostId } from '../../types/basket';

const { persistAtom } = recoilPersist();
export const basketIdState = atom<TPostId>({
  key: 'basketIdState',
  default: {
    postId: [],
  },
  effects_UNSTABLE: [persistAtom],
});
