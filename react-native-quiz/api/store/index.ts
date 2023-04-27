import { atom } from 'recoil';
import { NewsData } from '../../screens/community/CommunityScreen';
import { Data } from '../../screens/quiz/QuizScreen';

//recoil 별도의 저장소를 만든다.
export const apiDataState = atom<Data[]>({
	key: 'getQuizList',
	default: [],
});

//recoil 별도의 저장소를 만든다.
export const apiNewsDataState = atom<NewsData[]>({
	key: 'getNewsList',
	default: [],
});
