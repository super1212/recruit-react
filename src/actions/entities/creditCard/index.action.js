import {
    ENTITIES_CREDITCARD_UPDATE_CREDITCARD
} from "../../../constants/actionTypes.constant";


export const updateCreditCard = (payload) => ({
    type: ENTITIES_CREDITCARD_UPDATE_CREDITCARD,
    payload,
});
