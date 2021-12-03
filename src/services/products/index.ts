import AxiosService from "@common/utils/axios";

const url = {
  getProductByType: ({ params, id }: any) =>
    `categories/${id}/products/${params !== undefined ? "?" + params : ""}`,
  getAllProduct: () => `products`,
  getProductDetail: ({ id }: any) => `products/${id}`,
  getFacet: (payload: any) => `categories/${payload.id}/products/facets`,
  getVariant: (payload: any) => `products/${payload.id}/variations`,
  addProduct: (payload: any) => `products/${payload.id}`,
};

const fetchProduct = {
  async getProductByType(payload: any) {
    if (payload.id === "999999") {
      const response = await AxiosService.get(url.getAllProduct());
      return response;
    }
    const response = await AxiosService.get(url.getProductByType(payload));
    return response;
  },
  async getAllProduct(payload: any) {
    const response = await AxiosService.get(url.getAllProduct());
    return response;
  },
  async getProductDetail(payload: any) {
    const response = await AxiosService.get(url.getProductDetail(payload));
    return response;
  },
  async getFacts(payload: any) {
    const response = await AxiosService.get(url.getFacet(payload));
    return response;
  },
  async getVariant(payload: any) {
    const response = await AxiosService.get(url.getVariant(payload));
    return response;
  },
  async addProduct(payload: any) {
    const response = await AxiosService.patch(
      url.addProduct(payload),
      payload.data
    );
    return response;
  },
};

export default fetchProduct;
