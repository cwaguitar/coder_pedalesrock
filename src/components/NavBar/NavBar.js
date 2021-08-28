import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {Categorias} from "./../../datos/categorias.json";
import { CartContext } from '../Context/CartContext';

// import {ItemCart} from "../Cart/Cart"

const NavBar = () => {
    
    const {quantity} = useContext(CartContext);
    
    return (
        <nav>
            <NavLink to="/" className="titulo-prin" >Pedales Rock</NavLink>

            <ul>
                {Categorias.map((cat) => (
                    <NavLink to={`/categoria/${cat.id}`}
                        key={cat.id}  className="nav-enlace">
                        {cat.nombre}
                    </NavLink>
                ))}
            </ul> 
            <div className="div-cart">
                <NavLink to="/cart"> <i className="fas fa-shopping-cart item-cart"> <span className="cant-items">{quantity()}</span></i></NavLink>
            </div>
        </nav>
    );
};

export default NavBar;

