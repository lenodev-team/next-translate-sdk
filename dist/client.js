"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTranslateClient = createTranslateClient;
const axios_1 = __importDefault(require("axios"));
function createTranslateClient(options) {
    const { token, baseUrl = 'https://api.next-translate.com' } = options;
    return {
        async getTranslations({ locale, namespace }) {
            const res = await axios_1.default.get(`${baseUrl}/v1/translations/${locale}/${namespace}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return res.data;
        }
    };
}
