export const SHOPPING_CAR = "SHOPPING_CAR";

export const addProduct = (product) => {
  return {
    type: "SHOPPING_CAR",
    payload: product,
  };
};
