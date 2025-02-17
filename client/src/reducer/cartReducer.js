const cartReducer = (state, action) => {
  const cart = state.cart || []; // Fallback if cart is undefined

  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;
      const existingProduct = cart.find((curItem) => curItem.id === id + color);

      if (existingProduct) {
        const updatedCart = cart.map((curElem) =>
          curElem.id === id + color
            ? {
                ...curElem,
                amount: Math.min(curElem.amount + amount, curElem.max),
              }
            : curElem
        );
        return { ...state, cart: updatedCart };
      } else {
        const newProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...cart, newProduct] };
      }

    case "SET_DECREMENT":
      return {
        ...state,
        cart: cart.map((curElem) =>
          curElem.id === action.payload
            ? { ...curElem, amount: Math.max(curElem.amount - 1, 1) }
            : curElem
        ),
      };

    case "SET_INCREMENT":
      return {
        ...state,
        cart: cart.map((curElem) =>
          curElem.id === action.payload
            ? { ...curElem, amount: Math.min(curElem.amount + 1, curElem.max) }
            : curElem
        ),
      };

    case "REMOVE_ITEM":
      return { ...state, cart: cart.filter((curItem) => curItem.id !== action.payload) };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "CART_ITEM_PRICE_TOTAL":
      const { total_item, total_price } = cart.reduce(
        (accum, curElem) => {
          accum.total_item += curElem.amount;
          accum.total_price += curElem.price * curElem.amount;
          return accum;
        },
        { total_item: 0, total_price: 0 }
      );
      return { ...state, total_item, total_price };

    default:
      return state;
  }
};

export default cartReducer;
