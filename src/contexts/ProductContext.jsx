import React, { createContext, useState } from "react";

export const productDataContext = createContext();

const ProductContext = ({children}) => {
  const [color, setColor] = useState("#2e2c2e");
  const [scale, setScale] = useState(0.08);
  return (
    <productDataContext.Provider value={[color, setColor, scale, setScale]}>
      {children}
    </productDataContext.Provider>
  );
};

export default ProductContext;
