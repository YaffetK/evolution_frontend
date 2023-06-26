import React from "react";

export type CartType = {
  name: string;
  image: string;
  price: number;
};

const Cart = ({ items }: { items: CartType[] }) => {
  return (
    <div className="grid grid-cols-4">
      {items.map((item) => {
        return <div className="bg-gray-200 p-10 rounded-md">{item.name}</div>;
      })}
    </div>
  );
};

export default Cart;
