import { ADD_To_CART } from "../constants";

const initialState = {
  cardData: [],
};

const cardItem = (state = initialState, action) => {
  switch (action.type) {
    case ADD_To_CART:
        console.log('reducers',action)
      return {
        ...state, // Spread the existing state
        cardData: [...state.cardData, action.data], // Add new data to the existing cardData array
      };
     
    default:
      return state;
  }
};

export default cardItem;
