import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import { IAnime, IAnimeResponse } from '../types';

dotenv.config();

const API_URL = process.env.JIKAN_API_URL;

export const fetchAnimeData = async (id: string): Promise<IAnimeResponse> => {
    try {
        const { data } = await axios.get(`${API_URL}/anime/${id}`);
        return data.data;
    } catch (error) {
        throw new Error('Failed to fetch anime data');
    }
};