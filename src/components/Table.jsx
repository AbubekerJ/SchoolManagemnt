

const Table = ({columns ,rowItems , data }) => {
  return (
    <table className=' mt-4 w-full   '>
      <thead >
        <tr>
        {columns.map((column)=>(
           <th key={column.accessor} className={column.className}>{column.header}</th>
        ))}
        </tr>
         
      </thead>
       <tbody className="text-center" >
       {data.map((i)=>(
        rowItems(i)
          ))}
       </tbody>
    </table>
  )
}

export default Table
