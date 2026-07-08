
export default function Products(){
    const products = [
       "Mobile","Laptop","Tablet"
    ];

    return(
        <div>
            <h2>Product Module</h2>
            {
                products.map((product, idx)=>(
                    <p key={idx}>{product}</p>
                ))
            }
        </div>
    )
}