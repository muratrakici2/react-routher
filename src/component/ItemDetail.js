import React, {useState ,useEffect} from 'react';
import '../App.css';

function ItemDetail({match}) {
    useEffect(()=>{
        fechItems();
      },[])
  
      const [item,setItem]=useState([]);

    const fechItems = async ()=>{
        const data = await fetch('https://api.github.com/users');
        const items = await data.json();
        setItem(items[match.params.id-1])
    }
      return (
          <div>
            <h2>{item.login}</h2>
            <img src={item.avatar_url}/>
          </div>
      );
}

export default ItemDetail;