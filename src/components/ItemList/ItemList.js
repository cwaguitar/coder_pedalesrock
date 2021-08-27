import React from "react";
import Item from "./item/item";


const ItemList = ({displayItems}) => {
    return (
        <div className="cards">
        {displayItems.map((articulo) => 
            <Item articulo={articulo} key={articulo.id}/>
        )}
        </div>
    );
};      
export default ItemList; 
  