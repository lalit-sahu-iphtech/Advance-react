function Table({ columns, data }) {
    return (
      <table className="table">
        <thead>
          <tr>
            {columns.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
  
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col}>{row[col.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;