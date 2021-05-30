// import React from 'react';

// // class CartItem extends React.Component
// const CartItem = (props) =>{
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         price: 999,
//     //         title: 'Mobile Phone',
//     //         qty: 1,
//     //         img: '',
//     //     }
//     //     // this.increaseQuantity = this.increaseQuantity.bind(this);
//     //     // this.testing();
//     // }

//     // testing () {
//     //     const promise = new Promise( (resolve, reject)=>{
//     //         setTimeout(() => {
//     //             resolve('done');
//     //         }, 5000);
//     //     } )
//     //     promise.then(()=> {
//     //         this.setState({ qty: this.state.qty + 10});
//     //     });
//     // }
//     // increaseQuantity = () => {
//     //     // this.state.qty +=1;
//     //     // this.setState({
//     //     //     qty: this.state.qty + 1
//     //     // });

//     //     this.setState( (prevState)=> {
//     //         return {
//     //             qty: prevState.qty + 1
//     //         }
//     //     }, () =>{
//     //         console.log('this happens after this async func is done', this.state);
//     //     });
//     // };
//     // decreaseQuantity = () => {
//     //     const { qty } = this.state;

//     //     if(qty === 0)
//     //     return;

//     //     this.setState ( (prevState) =>{
//     //         return {
//     //             qty: prevState.qty - 1
//     //         }
//     //     });
//     // };
//     render(){
//         console.log("this.props: ", this.props);
//         const {price, title, qty} = this.props.product;
//         const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = this.props;
//         return (
//             <div className="cart-item">
//                 <div className="left-block">
//                     <img style={styles.image} alt="some" />
//                 </div>
//                 <div className="right-block">
//                     <div style = {{fontSize: 25}}> {title} </div>
//                     <div style = {{color: 'Grey'}}> {price} </div>
//                     <div style = {{color: 'Grey'}}> Qty: {qty} </div>
//                     <div className="cart-item-actions">

//                         <img alt="increase" className="action-icons" 
//                         src="https://as1.ftcdn.net/jpg/02/01/58/70/500_F_201587024_jEB8rsvrFtd0jwBF2A7oUnZ2KGYYddmC.jpg"
//                         onClick= {() => onIncreaseQuantity(product)}
//                         />

//                         <img alt="decrease" className="action-icons" 
//                         src="https://as2.ftcdn.net/jpg/02/78/84/57/500_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg"
//                         onClick= {() => onDecreaseQuantity(product)}
//                         />

//                         <img alt="delete" className="action-icons" 
//                         src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
//                         onClick=  {()=> onDeleteProduct(product.id)}
//                         />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// const styles = {
//     image: {
//         height: 110,
//         width: 110,
//         borderRadius: 4,
//         background: '#ccc'
//     }
// }

// export default CartItem;
import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} alt="passed images"/>
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/992/992651.svg"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;