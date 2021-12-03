import AxiosService from "@common/utils/axios";

const url = {
  getDashboard: () => `dashboard`,
};

const fetchDashboard = {
  async getDashboard() {
    const response = await AxiosService.get(url.getDashboard());
    return response;
  },
};

export default fetchDashboard;
