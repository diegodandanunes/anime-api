import axios from 'axios';
import dotenv from 'dotenv';
import { IAnime, ICharacter } from '../types';

dotenv.config();

const API_URL = process.env.JIKAN_API_URL;

export const fetchAnimeData = async (id: string): Promise<IAnime> => {
    try {
        const response = await axios.get<IAnime>(`${API_URL}/anime/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch anime data');
    }
};

export const fetchCharactersByAnime = async (id: string): Promise<ICharacter[]> => {
    try {
        const response = await axios.get<ICharacter[]>(`${API_URL}/anime/${id}/characters`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch anime data');
    }
};