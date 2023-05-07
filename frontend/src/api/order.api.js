import {generateUrl} from "../utils/generateUrl";
import api from "./api";

export default {

    /**
     * Create Order
     */
    createOrder: (orderInfo) => {
        return api.post("orders", orderInfo);
    },

    getById: (id) => {
        return api.get(`orders/${id}`);
    }
}