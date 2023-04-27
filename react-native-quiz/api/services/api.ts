// src/services/api.ts

import axios, { AxiosInstance } from 'axios';
import CryptoJS from 'react-native-crypto-js';
import { selectorFamily } from 'recoil';
import { NewsData } from '../../screens/community/CommunityScreen';
import { Data } from '../../screens/quiz/QuizScreen';
import { instance, naverInstance } from '../instance';
import moment from 'moment';

export const fetchApiData = async (no: number): Promise<any[]> => {
	const response = await instance.get(`/quiz/type?no=${no}`);
	let bytes = CryptoJS.AES.decrypt(response.data.data, 'MA4kGKIDNCXehu45qp3');
	let originalText = bytes.toString(CryptoJS.enc.Utf8);
	return JSON.parse(originalText);
};

export const getQuizList = selectorFamily<Data[], number>({
	key: 'getQuizLists',
	get:
		(no: number) =>
		async ({ get }) => {
			const response = await fetchApiData(no);
			return response;
		},
});

export const fetchNaverNewsApiData = async (type: string): Promise<any[]> => {
	const response: any = await naverInstance.get(`/search/news?query=${encodeURI(type)}&display=10&start=1&sort=sim`);
	return response.data.items;
};

export const getNewsList = selectorFamily<NewsData[], string>({
	key: 'getNewsLists',
	get:
		(type: string) =>
		async ({ get }) => {
			let response = await fetchNaverNewsApiData(type);

			if (response) {
				response = response.map((val: any) => {
					const title = val.title.replace(/<[^>]*>?/g, '').replace(/&apos;/g, "'");
					const pubDate = moment(val.pubDate).format('YYYY.MM.DD');
					return { ...val, title, pubDate };
				});
			}

			return response;
		},
});
