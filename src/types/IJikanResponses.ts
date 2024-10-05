export interface IAnimeResponse {
    mal_id: number;
    url: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
        webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
    };
    approved: boolean;
    titles: Array<{
        type: string;
        title: string;
    }>;
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    premiered: string;
    broadcast: string;
    producers: Array<{ name: string; url: string }>;
    licensors: Array<{ name: string; url: string }>;
    studios: Array<{ name: string; url: string }>;
    genres: Array<{ mal_id: number; name: string; url: string }>;
    themes: Array<{ mal_id: number; name: string; url: string }>;
    demographics: Array<{ mal_id: number; name: string; url: string }>;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    related: {
        adaptation: Array<{ mal_id: number; name: string; type: string; url: string }>;
        sequel: Array<{ mal_id: number; name: string; type: string; url: string }>;
        prequel: Array<{ mal_id: number; name: string; type: string; url: string }>;
        side_story: Array<{ mal_id: number; name: string; type: string; url: string }>;
        spin_off: Array<{ mal_id: number; name: string; type: string; url: string }>;
        other: Array<{ mal_id: number; name: string; type: string; url: string }>;
    };
    season: {
        year: number;
        season: string;
    };
    external: Array<{ name: string; url: string }>;
    streaming: Array<{ name: string; url: string }>;
}
