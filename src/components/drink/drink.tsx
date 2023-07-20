import { useState } from "react";
import style from "./drink.module.css"

const Drink =()=>{
    const [drink,setDrink]=useState({
        name:"",
        price:0,
    })

    const handleClick1=()=>{
        const newDrink={
            name: "americano",
            price:drink.price
        }
        setDrink(newDrink)
    }

    const handleClick2=()=>{
        const newPrice={
            name:drink.name,
            price:10
        }
        setDrink(newPrice)
    }

    return (
        <>
            <button style={style} onClick={handleClick1}>changed {drink.name} </button>
            <br/>
            {drink.name}
            <br/>
            <button onClick={handleClick2}>changed {drink.price}</button>
            <br/>
            {drink.price}
        </>
    )
}

export default Drink