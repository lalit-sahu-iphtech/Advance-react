
export default function Modal({isOpen, onClose, children}){
    if(!isOpen) return null;
    return(
        <div>
            {children}
            <button onClick={onClose}>Close</button>
        </div>
    )
}