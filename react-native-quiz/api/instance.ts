import axios, { AxiosInstance } from 'axios';

interface AxiosConfig {
	baseURL: string;
	headers?: Record<string, string>;
	auth?: {
		username: string;
		password: string;
	};
	// Add more options as needed
}

const config = {
	quizApi: {
		baseURL: 'https://quiz.fnfsoccer.com/api',
		auth: {
			username: 'yoo',
			password: 'qwe123',
		},
	} as AxiosConfig,
	naverApi: {
		baseURL: 'https://openapi.naver.com/v1',
		headers: {
			'X-Naver-Client-Id': 'Vl1BStC_Pnp4i2bJc3_j',
			'X-Naver-Client-Secret': 'lIkratnBkv',
		},
	} as AxiosConfig,
};

const instance: AxiosInstance = axios.create(config.quizApi);
const naverInstance: AxiosInstance = axios.create(config.naverApi);

export { instance, naverInstance };
