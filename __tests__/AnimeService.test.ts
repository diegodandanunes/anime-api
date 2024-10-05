import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchAnimeData } from '../src/services/AnimeService';

const mock = new MockAdapter(axios);

describe('Anime Service', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should fetch anime data successfully', async () => {
        const animeId = '1';
        const mockAnimeData = {
            data: {
                name: 'Attack on Titan',
                imagePath: 'https://example.com/image.jpg',
                trailerUrl: 'https://example.com/trailer',
                episodes: 25,
                score: 9.0,
            }
        };

        mock.onGet(`${process.env.JIKAN_API_URL}/anime/${animeId}`).reply(200, mockAnimeData);

        const result = await fetchAnimeData(animeId);
        expect(result).toEqual(mockAnimeData.data);
    });

    it('should throw an error when fetching anime data fails', async () => {
        const animeId = '123abc';
        mock.onGet(`${process.env.JIKAN_API_URL}/anime/${animeId}`).reply(404);

        await expect(fetchAnimeData(animeId)).rejects.toThrow('Failed to fetch anime data');
    });
});
