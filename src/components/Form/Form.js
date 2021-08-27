import React, {useContext} from 'react';
import DetailForm from './DetailForm';
import {database} from './../../firebase/firebase';
import { CartContext } from '../Context/CartContext';


const Form = (cart) => {

    const {totalCart, deleteCart} = useContext(CartContext);     

    const addCart =  (inputs) => {
            const handleOrder = {
                buyer: inputs,
                items: cart,
                fecha: new Date().toString(),
                total: totalCart(),
            }
            
            const orders = database.collection('compra');
                        
                orders.add(handleOrder).then((resp) => {alert('Orden: ' + resp.id)}).catch((error) => {alert('error', error)});

                deleteCart()
        }
    return(
        <>
        <DetailForm  addCart={addCart} cart={cart}/>
        </>
    )
}

export default Form;