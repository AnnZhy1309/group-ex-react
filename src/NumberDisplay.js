import { useEffect, useState } from "react";
const API_URL = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';

export function NumberDisplay(){
    const[number, setNumber] = useState(0);
    
    useEffect(()=>{
        fetch(API_URL)
        .then(response => response.json())
        .then((result) => {setNumber(result)})
    }, [])

    const saveToStorage = ()=>{
        localStorage.setItem("theNumber", number)
    }

    const loadFromStorage =()=>{
        const storedItem = JSON.parse(localStorage.getItem("theNumber"))
        setNumber(storedItem);
    }


    return(
        <div>
        <p>{number}</p>
        <button onClick={()=>{
          setNumber(number+1)
        }}>Increment</button>
        <button onClick={()=> {saveToStorage()}}>Save to storage</button>
        <button onClick={()=>{loadFromStorage()}}>Load from storage</button>
        </div>
    )
}