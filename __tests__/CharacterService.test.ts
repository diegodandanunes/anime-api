import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchCharactersByAnime } from '../src/services/CharacterService';

const mock = new MockAdapter(axios);

describe('Anime Service', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should fetch characters by anime successfully', async () => {
        const animeId = '1';
        const mockCharactersData = {
            data: [
                { name: 'Eren Yeager', imagePath: 'https://example.com/eren.jpg', role: 'Main' },
                { name: 'Mikasa Ackerman', imagePath: 'https://example.com/mikasa.jpg', role: 'Main' },
            ]
        };

        mock.onGet(`${process.env.JIKAN_API_URL}/anime/${animeId}/characters`).reply(200, mockCharactersData);

        const result = await fetchCharactersByAnime(animeId);
        expect(result).toEqual(mockCharactersData.data);
    });

    it('should throw an error when fetching characters fails', async () => {
        const animeId = '999';
        mock.onGet(`${process.env.JIKAN_API_URL}/anime/${animeId}/characters`).reply(404);

        await expect(fetchCharactersByAnime(animeId)).rejects.toThrow('Failed to fetch anime data');
    });
});
