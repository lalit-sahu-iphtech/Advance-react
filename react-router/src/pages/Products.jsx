import { useSearchParams } from "react-router-dom";

export default function Products(){
    const[searchParams] = useSearchParams();

    const category = searchParams.get("category");

    return(
        <>
        <h3>Products pages</h3>
        <p>category : {category}</p>
        </>
    )
}