export const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  
  export const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  export const addToCart = (product, size = "Default", quantity = 1) => {
    const cart = getCart();
    const existing = cart.find((item) => item.id === product.id && item.size === size);
  
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, size, quantity });
    }
  
    saveCart(cart);
  };
  