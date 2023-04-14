// src/services/api.ts

import axios, { AxiosInstance } from 'axios';
import CryptoJS from 'react-native-crypto-js';
import { selectorFamily } from 'recoil';
import { Data } from '../../screens/Quiz';
import instance from '../instance';

export const fetchApiData = async (no: number): Promise<any[]> => {
	const response = await instance.get(`/quiz/type?no=${no}`);
	let bytes = CryptoJS.AES.decrypt(response.data.data, 'MA4kGKIDNCXehu45qp3');
	let originalText = bytes.toString(CryptoJS.enc.Utf8);
	return JSON.parse(originalText);
};

export const getQuizList = selectorFamily<Data[], number>({
	key: 'getQuizList',
	get:
		(no: number) =>
		async ({ get }) => {
			const response = await fetchApiData(no);
			return response;
		},
});
