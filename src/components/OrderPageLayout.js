import React from 'react';
import NavComponent from './NavComponent';

// export default function OrderPageLayoutComponent(props) {
//   return (
//     <div>
//       <NavComponent />
//       <div className="row">
//         <div className="col s12 m12 l7">
//           <MenuComponent items={props.menuItems} />
//         </div>
//         <div className="col s12 m12 l5">
//           <OrderTableComponent items={props.orderItems} />
//           <OrderFormComponent defaultCustomerInfo={props.customerInfo} />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function OrderPageLayout(prop) {
  return (
    <div>
      <NavComponent />
      <div className="row">
        <div className="col s12 m7 l7">
          {prop.children[0]}
        </div>
        <div className=" col s12 m5 l5">
          {prop.children[1]}
          {prop.children[2]}
        </div>
      </div>
    </div>
  );
}

// if (!props.children || props.children[0] || props.children[1] || props[2]) return null;
// return
// divs with
//
// }
