import { useDispatch, useSelector } from "react-redux"

export default function Home(){

    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const add=()=>{
        dispatch({
            type:"add"
        })
    }
    const sub=()=>{
        dispatch({
            type:"sub"
        })
    }
    return(
        <>
        <h1>HOME PAGE</h1>
        <button onClick={ add }>ADDITION</button>
        <button onClick={ sub }>SUBTRACTION</button>
        <h1>from Redux {counterVal}</h1>
        </>
    )
}