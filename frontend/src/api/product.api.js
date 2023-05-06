import api from './api'
import {generateUrl} from "../utils/generateUrl";

export default {

    /**
     * Get All Products
     */
    getAllProducts: (queryParams) => {
        // generate params
        const stringParams = generateUrl({
            "page": queryParams.page,
            "categoryId[eq]": queryParams.categoryId
        });

        return api.get(`products?${stringParams}`);
    }
}