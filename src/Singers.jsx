
import "./App.css";

export default function Singers({singer}){
    
    const {name, age} = singer;
    return <li className="singer">Name: {name}; Age: {age}</li>
}