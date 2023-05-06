import api from './api'

export default {

    /**
     * Get All Products
     * @param page
     */
    getAllProducts: (page = 1) => {
        return api.get(`products?page=${page}`);
    }
}