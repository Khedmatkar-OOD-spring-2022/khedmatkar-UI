const API_BASE_URL = "http://localhost:8080";
export const React_Base_URL = process.env.NODE_ENV === "production" ? "" : "";

const urls = {
  auth: {
    register: () => `${API_BASE_URL}/register`,
    login: () => `${API_BASE_URL}/login`,
    logout: () => `${API_BASE_URL}/logout`,
    profile: () => `${API_BASE_URL}/api/profile`,
  },
  common: {
    sendFeedback: () => `${API_BASE_URL}/api/feedback`,
  },
  servic: {
    servicRequest: () => `${API_BASE_URL}/api/serviceRequest`,
  },
  speciality: {
    new: () => `${API_BASE_URL}/api/specialties`,
    getAll: (onlyRoot = false) =>
      `${API_BASE_URL}/api/specialties?onlyRoots=${true}`,
    remove: (value) => `${API_BASE_URL}/api/specialties/${value}`,
    search: (value) => `${API_BASE_URL}/api/specialties/search?name=${value}`,
    getChildren: (id) =>
      `${API_BASE_URL}/api/specialties/${id}/sub-specialties`,
  },
  admin: {
    new: () => `${API_BASE_URL}/api/admin/register`,
    getFeedbacks: () => `${API_BASE_URL}/api/feedback`,
  },
};

export default urls;
