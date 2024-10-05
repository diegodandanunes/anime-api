import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchCharactersByAnime } from '../src/services/CharacterService';
import { fetchAnimeData } from '../src/services/AnimeService';
import { IAnime, ICharacter } from '../src/types';

const mock = new MockAdapter(axios);

describe('Anime Service', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should fetch anime data successfully', async () => {
        const animeId = '1';
        const mockAnimeData: IAnime = {
            name: 'Attack on Titan',
            imagePath: 'https://example.com/image.jpg',
            trailerUrl: 'https://example.com/trailer',
            episodes: 25,
            score: 9.0,
        };

        mock.onGet(`${process.env.JIKAN_API_URL}/anime/${animeId}`).reply(200, mockAnimeData);

        const result = await fetchAnimeData(animeId);
        expect(result).toEqual(mockAnimeData);
    });

    it('should throw an error when fetching anime data fails', async () => {
        const animeId = '123abc';
        mock.onGet(`${process.env.JIKAN_API_URL}/anime/${animeId}`).reply(404);

        await expect(fetchAnimeData(animeId)).rejects.toThrow('Failed to fetch anime data');
    });

    it('should fetch characters by anime successfully', async () => {
        const animeId = '1';
        const mockCharactersData: ICharacter[] = [
            { name: 'Eren Yeager', imagePath: 'https://example.com/eren.jpg', role: 'Main' },
            { name: 'Mikasa Ackerman', imagePath: 'https://example.com/mikasa.jpg', role: 'Main' },
        ];

        mock.onGet(`${process.env.JIKAN_API_URL}/anime/${animeId}/characters`).reply(200, mockCharactersData);

        const result = await fetchCharactersByAnime(animeId);
        expect(result).toEqual(mockCharactersData);
    });

    it('should throw an error when fetching characters fails', async () => {
        const animeId = '999';
        mock.onGet(`${process.env.JIKAN_API_URL}/anime/${animeId}/characters`).reply(404);

        await expect(fetchCharactersByAnime(animeId)).rejects.toThrow('Failed to fetch anime data');
    });
});
