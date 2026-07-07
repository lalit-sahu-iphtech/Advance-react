
export default function Search({value, onChange, placeholder="search.."}){

    return(
        <div>
            <input 
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder} 
            />
        </div>
    )

}