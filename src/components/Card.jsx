import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
//import Carro from '../components/Carro';
import '../css/App.css';
//import Tienda from '../components/Tienda';

const Card  =   (props)  =>  {
    let styleImg={
        height: "50%",
        width: "50%",
        objectFit: "contain",
        backgroundSize:"cover"
    }
    let style={
        width: "20rem",
        height: "50rem",
        maxHeight: "20%",
        background: "#7E6E6B",  
        padding: "-1px",
        backgroundSize:"cover"
    }


            //Con esta funcion, damos formato de numero a los precios en el array
            let formato = props.pProducto
            function formatNumber(formato){
                return new Intl.NumberFormat().format(formato);
            }

            
    let precioMostrar   =   formatNumber(formato);
    let nProducto   =   props.nProducto;
    let pProducto   =   props.pProducto
    let imgProducto =   props.imgProducto;
    let id          =   props.id;
    let arrayItems  =   [];
    let arrayCarro  =   [];
    let cantidad=   0;

    
    
    const [cant, setCant]   =   useState(0);

    const onClickAñadir  =   (event)  =>{
        
        event.preventDefault();        
        setCant(cant + 1);
        cantidad = cant + 1;
        arrayItems  =   [{
            id,
            nProducto,
            pProducto,
            cantidad,
         }          
        ]; 
        props.onClick(event,arrayItems);       
        arrayCarro.push(arrayItems);   
         }
    
    const onClickQuitar  =   (event)  =>{
        if(cant >= 1){
            event.preventDefault();
            setCant(cant - 1);
            cantidad = cant - 1;
            arrayItems  =   {
                id,
                nProducto,
                pProducto,
                cantidad,
            };     
            props.onClickRest(event,arrayItems);             
            arrayCarro.push(arrayItems);
        }else{
            setCant(0);
        }

       
            
            }
    
return(
        <div className="container">
            <div className="card" style={style}>
                <img className="card-img-top d-block w-100" style={styleImg} src={imgProducto} alt={imgProducto}></img>
                <div className="card-body">
                    <h5 className="card-title">
                        {nProducto}
                    </h5>
                    <h3 className="Precios">$ {precioMostrar}</h3>
                    <p className="Parrafos">Añadir al Carrito</p>
                    <a className="btn btn-dark" href='./' onClick={onClickAñadir}>Añadir</a>
                    <a className="btn btn-dark" href='./' onClick={onClickQuitar}>Quitar</a>
                    <div className="container">
                        <p className="cantidad">{cant}</p>
                    </div>
                    <div className="container">
                        <p className="cantidadItems">Unidades Añadidas</p>
                    </div>   
                    <div className="container">
                        <NavLink to="/Carro" className="btn btn-dark">Pagar</NavLink>
                    </div>                   
                </div>
            </div>    
        </div>
    );
}
export default Card;
