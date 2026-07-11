export default function InputBox({setName}){
  return(
    <div>
      <input type="text"
      placeholder="enter name" 
      onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}