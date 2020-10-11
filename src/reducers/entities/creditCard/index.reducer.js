import {
    ENTITIES_CREDITCARD_UPDATE_CREDITCARD,
} from "../../../constants/actionTypes.constant";

const initialState = {};

export default function CREDITCARDReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ENTITIES_CREDITCARD_UPDATE_CREDITCARD:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
