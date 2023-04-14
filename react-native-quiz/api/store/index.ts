import { atom } from 'recoil';
import { Data } from '../../screens/Quiz';

//recoil 별도의 저장소를 만든다.
export const apiDataState = atom<Data[]>({
	key: 'getQuizList',
	default: [],
});
