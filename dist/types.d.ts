export interface TranslateClientOptions {
    token: string;
    baseUrl?: string;
}
export interface GetTranslationsParams {
    locale: string;
    namespace: string;
}
export interface TranslationResponse {
    [key: string]: string;
}
export interface TranslateClient {
    getTranslations(params: GetTranslationsParams): Promise<TranslationResponse>;
}
