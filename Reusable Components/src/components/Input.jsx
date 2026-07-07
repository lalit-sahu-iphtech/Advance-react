export default function Input({type, value, onChange, placeholder}){
    return(
        <div>
        <input type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        />
        </div>
    )
}