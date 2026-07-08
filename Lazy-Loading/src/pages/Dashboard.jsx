import {lazy, Suspense} from "react";
import Loader from "../components/Loader";

const Chart = lazy(()=>import("./Chart"));

export default function Dashboard(){
    return(
        <>
        <h2>Dashboard page</h2>
        <p>Dashboard loaded successfully</p>

        <Suspense fallback={<Loader/>}>
            <Chart/>
        </Suspense>
        </>
    )
}