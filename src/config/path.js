import UrlGenerator from '../services/urlGenerator';

const Path = {
  dashboard: '/dashboard',
  root: '/',
  api: {
  }
};

const generatorSpec = {
  api: {
    host: process.env.REACT_APP_ORIGIN_API_HOST,
    prefix: process.env.REACT_APP_ORIGIN_API_PREFIX
  },
  frontend: {
    host: process.env.REACT_APP_ORIGIN_FRONTEND_HOST,
    prefix: process.env.REACT_APP_ORIGIN_FRONTEND_PREFIX
  }
};

export const Url = new UrlGenerator(generatorSpec).bind(Path);
export const ResolvablePath = new UrlGenerator(generatorSpec, true).bind(Path);
export default new UrlGenerator(generatorSpec, true, false).bind(Path);
