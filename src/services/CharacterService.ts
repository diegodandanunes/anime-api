import axios from 'axios';
import dotenv from 'dotenv';
import { ICharacterResponse } from '../types';

dotenv.config();

const API_URL = process.env.JIKAN_API_URL;

export const fetchCharactersByAnime = async (id: string): Promise<ICharacterResponse[]> => {
    try {
        const { data } = await axios.get(`${API_URL}/anime/${id}/characters`);
        return data.data;
    } catch (error) {
        throw new Error(`Failed to fetch anime data - ${error}`);
    }
};