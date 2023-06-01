import {Button, Form} from 'react-bootstrap';
import { useState, useEffect } from "react";
import ListaColores from './ListaColores';


const FormularioColores = () => {
    const coloresLocalStorage = JSON.parse(localStorage.getItem('listaDeColores')) || [];
    const[color, setColor] = useState("");
    const[listaColores, setListaColores] = useState(coloresLocalStorage);

    useEffect(()=>{
        localStorage.setItem('listaDeColores', JSON.stringify(listaColores))
    }, [listaColores]);


    const handleSubmit = (e)=>{
        e.preventDefault();
        setListaColores([...listaColores, color]);
        setColor('');
    };

    const borrarColor = (nombreColor) =>{
        let copiaColor = listaColores.filter((itemColor)=> itemColor !== nombreColor);
        setListaColores(copiaColor);
    }

    return (
        <>
        <section className='sombra'>
        <h5 className='text-start p-3'>Administrar colores</h5>
        <Form onSubmit={handleSubmit} className='text-end'>
            <span className='d-flex my-4 bg-secondary p-4'>
            <div className='card-img' style={{backgroundColor: color}}>
            </div>
            <Form.Group className="mt-1 mx-3 col-6" controlId="FormularioColores">
                <Form.Control type="text" placeholder="Ingrese un color ej. Red" onChange={(e)=> setColor(e.target.value)} value={color} />    
            </Form.Group>
            </span>
            <Button className='mx-3 mt-1 mb-4 sombra' variant="primary" type="submit">Guardar</Button>            
        </Form>
        </section>
        <ListaColores listaColores={listaColores} borrarColor={borrarColor}></ListaColores>
    </>
    );
};

export default FormularioColores;