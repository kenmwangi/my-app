import { MAIN_URL } from './constants';

export default function getAssetUrl(path: string) {
  return process.env.NODE_ENV === 'production'
    ? `${MAIN_URL}${path}`
    : `/${path}`;
}
