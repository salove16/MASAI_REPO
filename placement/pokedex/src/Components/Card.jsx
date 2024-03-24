import React from "react";
import { Link } from 'react-router-dom';
const Card = ({ pokemon, loading,infoPokemon}) => {
   console.log(pokemon,"============card");
//    let handleonclick=(item)=>{
//     console.log(item)
//     infoPokemon(item)
//    }
   return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon?.map((item,i) => {
                    return (
                        // <Link to={`/pokeinfo/${item.id}`} key={i} >
                    
                            <div className="card" >
                                {/* <h2>{item.id}</h2> */}
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                                <h4 onClick={()=>infoPokemon(item)}>more details</h4>
                            </div>
                            
                            
                    // </Link>
                            )
                        })
                    }

        </>
    )
}
export default Card;