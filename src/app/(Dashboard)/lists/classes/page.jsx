import Image from "next/image"

import ListsSearchInput from '@/components/ListsSearchInput'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { classesData, role } from '@/lib/data'
import FormModal from "@/components/FormModal"



const page = () => {
  const columns = [
    
    {header:'Class Name' ,accessor:'classname'},

    {header:'Capacity' ,accessor:'capacity',className:"hidden lg:table-cell" },
    {header:'Grade' ,accessor:'grade' ,className:"hidden lg:table-cell"},
    {header:'Supervisor' ,accessor:'Supervisor'},
    {header:'Actions' ,accessor:'action'},
  
  ]


  //use this table row design for difrrent data input 
  const rowItems = (item)=>{
    return(
      <tr  className="border-b-2 border-gray-300 odd:bg-abukiPurpleLight even:bg-abukiSkyLight text-sm hover:bg-opacity-40" >
         
            <td className=" flex items-center p-4 gap-4">
               
               
                  <h1 className="text-sm">{item.name}</h1>
            </td>
            <td className="hidden md:table-cell">{item.capacity}</td>
      
            
           <td className="hidden lg:table-cell">{item.grade}</td>
           <td >{item. supervisor}</td>
          
           <td className=" flex gap-2  justify-center">
          
              
             {role==='admin'&&(
             <>
             <FormModal type={'edit'} table={'class'} data={item.data}/>
             <FormModal type={'delete'} table={'class'} id={item.id}/>
             </>
             )} 
             
           
           </td>

        </tr>
    )
  }
 
  return (

   
    
    <div className='bg-white p-4 m-4 mt-0  flex-1  '>
      {/* TOP */}
     <div className='flex justify-between items-center'>
      <h1 className='text-lg font-semibold hidden md:block'>All Classes</h1>
      <div className=' flex flex-col md:flex-row gap-4 items-center w-full md:w-auto  '>

       
        <ListsSearchInput/>
      

      <div className=' flex gap-4 items-center   '>
        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-abukiYellow'>
          <Image src={'/filter.png'} width={14}height={14}/>
        </button>
        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-abukiPurple'>
        <Image src={'/sort.png'} width={14}height={14}/>
        </button>
        {role==='admin'&&(
           
           <FormModal type={'create'} table={'class'}/>
           
        )}
      </div>
      </div>
       
     </div>

     {/* LISTS */}
       
        <Table  columns={columns} rowItems={rowItems} data={classesData}/>
        
       

        {/* PAGINATION */}
        <Pagination/>
      
    
    </div>
  )
}

export default page
