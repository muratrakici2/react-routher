import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Shop(props) {
    useEffect(() => {
        fechItems();
    }, [])

    const [items, setItems] = useState([]);

    const fechItems = async () => {
        const data = await fetch('https://api.github.com/users');
        const items = await data.json();
        console.log(items)
        setItems(items)
    }
    return (
        <div className="shop">
            {items.map(item => (
                <div className="itemName">
                    <img src={item.avatar_url}/>
                    <h2 key={item.id}>
                        <Link to={`/shop/${item.id}`}>{item.login}</Link>
                    </h2>
                    
                </div>


            ))}
        </div>
    );
}

export default Shop;