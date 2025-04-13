import React from 'react';
// type ShopProps  = {
//   children: React.ReactElement
// } & React.PropsWithChildren 
// const Shop: React.FC<ShopProps> = (props) => {
//   return (
//     <section id="shop">
//       <h2>Elegant Clothing For Everyone</h2>
//       <ul id="products">
//        {props.children}
//       </ul>
//     </section>
//   );
// }
type ShopProps = {};
const Shop = (props: React.PropsWithChildren<ShopProps>) => {
  return (
        <section id="shop">
          <h2>Elegant Clothing For Everyone</h2>
          <ul id="products">
           {props.children}
          </ul>
        </section>
      );
}
export default Shop;