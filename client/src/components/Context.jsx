import React from 'react';

const ProductContext = React.createContext({
  // NOTE: These key-value pairs are the "defaults" of the context store.
  //
  // You can think of them kinda like the schema for a database.
  // The real values being passed to your components are defined in App.jsx!
  //
  // If these [state, setState] pairs remind you of the result of useState(),
  // then you're spot on. That's exactly what is stored in the context.
  //
  // Usage example:
  // import ProductContext from './path/to/Context'; // with your other imports
  //
  // /* then in your function: */
  // const { productId, setProductId } = useContext(ProductContext);
  //
  // axios.get(`/products/${productId}).then(doStuff);
  //
  // const handleClick = (newProductId) => {
  //   setProductId(newProductId);
  // };

  productId: 38321,
  setProductId: (/* newId */) => { /* sets productId to newId */ },

  productInfo: {
    id: 38321,
    campus: 'hr-rfe',
    name: 'The Garnet Sweatpants',
    slogan: 'Unde minima dolor quae quo nesciunt.',
    description:
      'Vero amet voluptatem perferendis. Voluptatem sit atque aliquid quibusdam doloribus corporis sit. Deserunt sit perspiciatis quam est qui nisi fugiat. Ut in quis qui et nam.',
    category: 'Sweatpants',
    default_price: '137.00',
    created_at: '2021-08-13T14:37:33.285Z',
    updated_at: '2021-08-13T14:37:33.285Z',
    features: [
      {
        feature: 'Buttons',
        value: '"Black Resin"',
      },
    ],
  },
  setProductInfo: () => {},
});

export default ProductContext;
