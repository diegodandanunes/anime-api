import { Request, Response } from 'express';
import { getCharactersByAnime } from '../src/controllers/CharactersController';
import { fetchCharactersByAnime } from '../src/services/CharacterService';

// Mocks
jest.mock('../src/services/CharacterService');

describe('getCharactersByAnime', () => {
  const mockAnimeId = '1'; // ID de exemplo
  const mockRequest = (params: any): Request => ({
    params: {
      id: mockAnimeId,
      ...params,
    },
  } as unknown as Request);

  const mockResponse = (): Response => {
    const res = {} as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn();
    return res;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of characters for a given anime ID', async () => {
    const mockData = [
      {
        character: {
          images: {
            jpg: {
              image_url: 'https://example.com/simon.jpg',
            },
          },
          name: 'Simon',
        },
        role: 'Main',
      },
      {
        character: {
          images: {
            jpg: {
              image_url: 'https://example.com/kamina.jpg',
            },
          },
          name: 'Kamina',
        },
        role: 'Supporting',
      },
      {
        character: {
          images: {
            jpg: {
              image_url: 'https://example.com/yoko.jpg',
            },
          },
          name: 'Yoko Littner',
        },
        role: 'Supporting',
      },
    ];

    (fetchCharactersByAnime as jest.Mock).mockResolvedValue(mockData);

    const req = mockRequest({});
    const res = mockResponse();

    await getCharactersByAnime(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      {
        imagePath: 'https://example.com/simon.jpg',
        name: 'Simon',
        role: 'Main',
      },
      {
        imagePath: 'https://example.com/kamina.jpg',
        name: 'Kamina',
        role: 'Supporting',
      },
      {
        imagePath: 'https://example.com/yoko.jpg',
        name: 'Yoko Littner',
        role: 'Supporting',
      },
    ]);
    expect(fetchCharactersByAnime).toHaveBeenCalledWith(mockAnimeId);
  });

  it('should return a 500 error if fetching characters fails', async () => {
    (fetchCharactersByAnime as jest.Mock).mockRejectedValue(new Error('Error fetching data'));

    const req = mockRequest({});
    const res = mockResponse();

    await getCharactersByAnime(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching character data', error: expect.any(Error) });
  });
});
