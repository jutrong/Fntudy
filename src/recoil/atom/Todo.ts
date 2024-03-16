import { atom } from 'recoil';

export const toDoState = atom({
  key: 'toDo',
  default: [' React', ' Recoil', ' React Query', ' Styled Components', ' React Router', ' React Testing Library'],
});
