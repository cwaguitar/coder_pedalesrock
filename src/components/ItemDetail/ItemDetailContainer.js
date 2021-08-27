import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Loader from "./../Loader/Loader"
import ItemDetail from "./ItemDetail";  
import {database} from "../../firebase/firebase";


const DetailContainer = () => {
    const [itemToDisplay, setItemToDisplay] = useState([]);

    const {id} = useParams();
    
    useEffect(() => {
        setItemToDisplay([]);
        
        const getItem = async (id) => {
            const doc = await database.collection('instrumentos').doc(id).get();
            setItemToDisplay({...doc.data()})
        }
        if(id === '') {
            setItemToDisplay(itemToDisplay)
        } else {
            getItem(id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },   [id]);
    
    return (
        <ItemDetail {...itemToDisplay} id={id} />
    //     <> { 
    //     itemToDisplay.length ?  
    //     ( 
    //     ) : (
    //         <Loader/>    
    //     )
    // }
    //  </>
    );
};

export default DetailContainer;