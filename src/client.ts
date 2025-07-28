import axios from 'axios';
import {
  TranslateClientOptions,
  GetTranslationsParams,
  TranslationResponse,
  TranslateClient
} from './types';

export function createTranslateClient(options: TranslateClientOptions): TranslateClient {
  const { token, baseUrl = 'https://api.next-translate.com' } = options;

  return {
    async getTranslations({ locale, namespace }: GetTranslationsParams): Promise<TranslationResponse> {
      const res = await axios.get(`${baseUrl}/v1/translations/${locale}/${namespace}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return res.data;
    }
  };
}
