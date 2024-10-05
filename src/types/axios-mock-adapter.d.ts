declare module 'axios-mock-adapter' {
    import { AxiosInstance } from 'axios';

    export default class MockAdapter {
        constructor(axiosInstance: AxiosInstance);
        onGet(url: string): this;
        reply(status: number, data?: any, delay?: number): this;
        reset(): void;
    }
}
