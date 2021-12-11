import AxiosService from "@common/utils/axios";

const url = {
  getAll: "user",
  updateRole: (payload: any) => `user/${payload.id}`,
};

const fetchUser = {
  async getAll(payload: any) {
    const response = await AxiosService.get(url.getAll, payload);
    return response;
  },
  async updateRole(payload: any) {
    const response = await AxiosService.put(
      url.updateRole(payload),
      payload.data
    );
    return response;
  },
};

export default fetchUser;
