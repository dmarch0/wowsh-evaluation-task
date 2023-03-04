import { parseBoolean } from '../utils/parsers/parseBoolean';
import { parseNumber } from '../utils/parsers/parseNumber';
import { parseString } from '../utils/parsers/parseString';

export const vars = Object.freeze({
    env: parseString(process.env.NODE_ENV, 'develop'),
    port: parseNumber(process.env.PORT, 3001),
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    isLocal: parseBoolean(process.env.IS_LOCAL, false),
    webClientUrl: parseString(process.env.WEB_CLIENT_URL, 'http://localhost'),
});
