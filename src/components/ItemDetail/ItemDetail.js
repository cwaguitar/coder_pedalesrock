import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import Contador from './../Counter/Counter';

const ItemDetail = ({img, nombre, precio, stock, id}) => {
   
    const [count, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const handleState = () => setFinished(!finished); 

    const {addToCart, modifyArticle} = useContext(CartContext);

    const handleAdd = () => {
        addToCart({ img, nombre, precio,  count, id});
    }
    
    // console.log(cart)
    // console.log(totalIt)   
    return (
        <article className="article-detail">
            <div className="div-img">
                <img className="img-detail" src={img} alt={nombre}/>
            </div>
            <div className="div-detail">
                <h3 className="titulo-detail">{nombre}</h3>
                {!finished ? (
                    <>
                    <span className="precio-detail">$ {precio}</span>
                    <span className="titulo-detail">Stock: {stock}</span>
                    <Contador inicial={1} count={count} setCount={setCount} stock={stock}/>
                    <button className="btn-comprar" onClick={() => {handleState(); handleAdd()}}>Agregar al Carrito </button>
                    </>
                ):(
                    <>
                        <span className="precio-detail">Total ${precio * count}</span>
                        <span className="titulo-detail">Articulos: {count}</span>
                    <div className="div-btn">
                        <Link to="/cart" onClick={handleState}>
                            <button className="boton1" onClick={() => {handleState()}}>Continuar al carrito</button>
                        </Link>
                            <button className="boton2" onClick={() => {handleState(); modifyArticle(id)}}>Modificar</button>
                    </div>
                    </>
                )}
            </div>
        </article>
    );
    
};  

export default ItemDetail;
