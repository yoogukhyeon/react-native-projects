import axios, { AxiosInstance } from 'axios';

//axios instance 생성해서 api 구축
const instance: AxiosInstance = axios.create({
	baseURL: 'https://quiz.fnfsoccer.com/api',
	auth: {
		username: 'yoo',
		password: 'qwe123',
	},
});

export default instance;
