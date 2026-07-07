
export default function Avatar({src,name, size}){

    return(
        <div>
            <img src={src} alt={name} width={size} height={size}/>
        </div>
    )

}