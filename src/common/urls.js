const API_BASE_URL = 'http://localhost:8080';
export const React_Base_URL = process.env.NODE_ENV === 'production' ? '' : "";
const urls = {
  auth: {
    signup: () => `${API_BASE_URL}/signup`,
  },
  common: {
  },

};

export default urls;
