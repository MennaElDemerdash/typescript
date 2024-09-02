type Product = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
  };
  type ProductList = Product[];
  type CartItem = Product & {
    quantity: number;
  };
  type Cart = CartItem[];
  type Store = {
    products: ProductList;
    cart: Cart;
    addToCart: (productId: number, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    checkout: () => void;
  };


  