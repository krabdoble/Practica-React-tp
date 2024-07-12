import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Ejercicio1() {
    const [products, setProduct] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(response => {
            setProduct(response.data.slice(0,4));
            console.log(response.data);
        })
    }, [])

    return (
        <div>
            <div>
                <h2>Listado de Productos</h2>
                <ul>
                    {products.map(product => 
                    <li key={product.id}><h2>{product.title}</h2>
                    <img src={product.url} alt={'Imagen'+ ' '+product.id} />
                    </li>
                    )}
                </ul>
            </div>
        </div>
        
    )
}

export default Ejercicio1;