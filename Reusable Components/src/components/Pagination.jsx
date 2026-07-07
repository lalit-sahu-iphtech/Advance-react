export default function Pagination({currPage, onPageChange, totalPages }){

    return(
        <div>
            <button 
            onClick={() =>onPageChange(currPage-1)}
            disabled = {currPage === 1}
            >Previous</button>
            {Array.from({length:totalPages}, (_, idx) =>(
                <button 
                key={idx}
                onClick={()=>onPageChange(idx+1)}
                >{idx+1}</button>
            ))}
            <button 
             disabled = {currPage === totalPages}
            onClick={() =>onPageChange(currPage+1)}>Next</button>
        </div>
    )

}