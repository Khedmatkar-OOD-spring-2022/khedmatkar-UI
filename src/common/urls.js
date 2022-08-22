// const API_BASE_URL = "http://185.105.239.241";
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
    getAnnouncments: () => `${API_BASE_URL}/api/announcements/`,
    updatePassword: () => `${API_BASE_URL}/api/profile/changePassword`,
    updateUserInfo: () => `${API_BASE_URL}/api/profile`,
    search: () => `${API_BASE_URL}/api/specialists/search`,
  },
  technicalIssue: {
    send: () => `${API_BASE_URL}/api/technical_issues/`,
    get: () => `${API_BASE_URL}/api/technical_issues/`,
    answer: (id) => `${API_BASE_URL}/api/technical_issues/${id}/answer`,
    close: (id) => `${API_BASE_URL}/api/technical_issues/${id}/close`,
  },
  servic: {
    servicRequest: () => `${API_BASE_URL}/api/serviceRequests/`,
    servicRequestById: (id) => `${API_BASE_URL}/api/serviceRequests/${id}`,
    cancel: (id) => `${API_BASE_URL}/api/serviceRequests/${id}/customer/cancel`,
    getQuestionnaire: (id) =>
      `${API_BASE_URL}/api/serviceRequests/${id}/questionnaire`,
    evaluate: (id) => `${API_BASE_URL}/api/serviceRequests/${id}/evaluate`,
    specialistAccept: (id) =>
      `${API_BASE_URL}/api/serviceRequests/${id}/specialist/accept`,
    specialistReject: (id) =>
      `${API_BASE_URL}/api/serviceRequests/${id}/specialist/reject`,
    specialistFinish: (id) =>
      `${API_BASE_URL}/api/serviceRequests/${id}/finish`,
    customerAccept: (id) =>
      `${API_BASE_URL}/api/serviceRequests/${id}/customer/accept`,
    customerReject: (id) =>
      `${API_BASE_URL}/api/serviceRequests/${id}/customer/reject`,
  },
  evaluation: {
    createQuestion: () => `${API_BASE_URL}/api/evaluation/questions/`,
    deleteQuestion: (id) => `${API_BASE_URL}/api/evaluation/questions/${id}/`,
    getQuestions: () => `${API_BASE_URL}/api/evaluation/questions/`,
  },
  chat: {
    getByServicRequest: (id) =>
      `${API_BASE_URL}/api/chats/serviceRequest/${id}`,
    sendMessage: () => `${API_BASE_URL}/api/chats/`,
    getById: (id) => `${API_BASE_URL}/api/chats/${id}`,
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
    changeConfig: () => `${API_BASE_URL}/api/config/`,
    new: () => `${API_BASE_URL}/api/admins/register`,
    update: () => `${API_BASE_URL}/api/admins/permission`,
    getPermissions: () => `${API_BASE_URL}/api/admins/permission`,
    get: () => `${API_BASE_URL}/api/admins/`,
    getFeedbacks: () => `${API_BASE_URL}/api/feedbacks/`,
    getCertificate: () => `${API_BASE_URL}/api/certificates/all`,
    validateCertificate: (id) =>
      `${API_BASE_URL}/api/certificates/${id}/validate`,
    invalidateCertificate: (id) =>
      `${API_BASE_URL}/api/certificates/${id}/invalidate`,
    cancelServiceRequest: (id) =>
      `${API_BASE_URL}/api/serviceRequests/${id}/admin/cancel`,
  },
  storage: {
    downloadFile: (name) => `${API_BASE_URL}/files/${name}`,
  },
};

export default urls;
