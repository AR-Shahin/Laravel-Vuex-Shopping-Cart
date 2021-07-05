import Api from "./Api"

const END_POINT = 'products';

export default {
    all() {
        return Api.get(END_POINT);
    },

    single(id) {
        return Api.get(`${END_POINT}/${id}`);
    }
}
