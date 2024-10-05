import { Request, Response } from 'express';
import { getAnimeData } from '../src/controllers/AnimeController';
import { fetchAnimeData } from '../src/services/AnimeService';

jest.mock('../src/services/AnimeService');

describe('getAnimeData', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        req = {
            params: { id: '1' },
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it('should return anime data successfully', async () => {
        const mockAnimeData = {
            episodes: 25,
            images: {
                jpg: {
                    large_image_url: 'https://example.com/image.jpg',
                },
            },
            titles: [{ title: 'Attack on Titan' }],
            score: 9.0,
            trailer: {
                url: 'https://example.com/trailer',
            },
        };

        (fetchAnimeData as jest.Mock).mockResolvedValue(mockAnimeData);

        await getAnimeData(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            episodes: 25,
            imagePath: 'https://example.com/image.jpg',
            name: 'Attack on Titan',
            score: 9.0,
            trailerUrl: 'https://example.com/trailer',
        });
    });

    it('should return 500 when fetchAnimeData throws an error', async () => {
        (fetchAnimeData as jest.Mock).mockRejectedValue(new Error('Error fetching data'));

        await getAnimeData(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Error fetching anime data',
            error: expect.any(Error),
        });
    });
});
