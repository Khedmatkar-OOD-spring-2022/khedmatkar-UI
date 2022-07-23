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
    sendFeedback: () => `${API_BASE_URL}/api/feedbacks/`,
    updatePassword: () => `${API_BASE_URL}/api/profile/changePassword`,
    updateUserInfo: () => `${API_BASE_URL}/api/profile`,
  },
  servic: {
    servicRequest: () => `${API_BASE_URL}/api/serviceRequests/`,
    servicRequestById: (id) => `${API_BASE_URL}/api/serviceRequests/${id}`,
    cancel: (id) => `${API_BASE_URL}/api/serviceRequests/${id}/customer/cancel`,
    specialistAccept: (id) => `${API_BASE_URL}/api/serviceRequests/${id}/specialist/accept`,
    specialistReject: (id) => `${API_BASE_URL}/api/serviceRequests/${id}/specialist/reject`,
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
  certificate: {
    add: () => `${API_BASE_URL}/api/certificates/`,
    get: () => `${API_BASE_URL}/api/certificates/`,
    remove: (value) => `${API_BASE_URL}/api/certificates/${value}`,
  },
  admin: {
    new: () => `${API_BASE_URL}/api/admins/register`,
    get: () => `${API_BASE_URL}/api/admins/`,
    getFeedbacks: () => `${API_BASE_URL}/api/feedbacks/`,
    getCertificate: () => `${API_BASE_URL}/api/certificates/all`,
    validateCertificate: (id) =>
      `${API_BASE_URL}/api/certificates/${id}/validate`,
    invalidateCertificate: (id) =>
      `${API_BASE_URL}/api/certificates/${id}/invalidate`,
  },
};

export default urls;
