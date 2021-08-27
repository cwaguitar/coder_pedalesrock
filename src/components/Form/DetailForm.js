import React, {useState} from 'react';

const DetailForm = ({addCart}) => {
    const [inputs, setInputs] = useState();

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addCart(inputs);
        e.target.reset();
    }

    return (
        <form className="div-form" onSubmit={handleSubmit}>
            <div className="div-datos-cliente" >
                <input tipe="text" placeholder="Nombre" name="nombre" onChange={handleInput} required/>
                <input tipe="text" placeholder="Apellido" name="apellido" onChange={handleInput} required/>
                <input tipe="text" placeholder="Telefono" name="telefono" onChange={handleInput} required/>
                <input tipe="text" placeholder="Email" name="email" onChange={handleInput} required/>
                <button className="btn-compra">Finalizar Compra</button>
            </div>
        </form>
    )
}

export default DetailForm;