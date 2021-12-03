import AxiosService from "@common/utils/axios";

const url = {
  getBill: () => `bill`,
};

const fetchBill = {
  async getBill() {
    const response = await AxiosService.get(url.getBill());
    return response;
  },
};

export default fetchBill;
