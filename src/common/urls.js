const API_BASE_URL = 'http://localhost:8080';
export const React_Base_URL = process.env.NODE_ENV === 'production' ? '' : "";
const urls = {
  auth: {
    register: () => `${API_BASE_URL}/register`,
    login: () => `${API_BASE_URL}/login`,
    profile: ()=> `${API_BASE_URL}/api/profile`
  },
  common: {
  },
  servic:{
    servicRequest: () => `${API_BASE_URL}/api/serviceRequest`,

  },
};

export default urls;
