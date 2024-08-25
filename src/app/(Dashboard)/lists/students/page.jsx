import Image from "next/image"
import Link from "next/link"
import ListsSearchInput from '@/components/ListsSearchInput'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import { role, studentsData, } from '@/lib/data'
import FormModal from "@/components/FormModal"



const page = () => {
  const columns = [
    {header:'info' ,accessor:'info'},
    {header:'Student Id' ,accessor:'studentsid', className:"hidden md:table-cell"},
    {header:'Grade' ,accessor:'grade', className:"hidden md:table-cell"},
    
    {header:'Phone' ,accessor:'phone', className:"hidden lg:table-cell"},
    {header:'Address' ,accessor:'address', className:"hidden lg:table-cell"},
    {header:'Actions' ,accessor:'action'},
  
  ]


  //use this table row design for difrrent data input 
  const rowItems = (item)=>{
    return(
      <tr  className="border-b-2 border-gray-300 odd:bg-abukiPurpleLight even:bg-abukiSkyLight text-sm hover:bg-opacity-40" >
         
            <td className=" flex items-center p-4 gap-4">
                 <div className="flex gap-2">
                 <Image className="rounded-full w-8 h-8" src={item.photo} width={30} height={30}/>
                <div className="flex flex-col ">
                  <h1 className="text-sm">{item.name}</h1>
                  <h1 className="text-xs">{item.class}</h1>
                </div>
                 </div>
               
            </td>
            <td className="hidden md:table-cell">{item.studentId}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            
           <td className="hidden lg:table-cell">{item.phone}</td>
           <td className="hidden lg:table-cell">{item.address}</td>
          
           <td className=" flex gap-2  justify-center">
           
              <Link href={`/lists/students/${item.id}`}>
              <button className="rounded-full  bg-purple-400  w-7 h-7 flex items-center justify-center">
                <Image src={'/view.png'} width={16} height={16}/>
              </button>
              </Link>
             {role==='admin'&&(
            
             <FormModal type={'delete'} table={'student'} id={item.id}/>
            
             )} 
             
           
           </td>

        </tr>
    )
  }
 
  return (

   
    
    <div className='bg-white p-4 m-4 mt-0  flex-1  '>
      {/* TOP */}
     <div className='flex justify-between items-center'>
      <h1 className='text-lg font-semibold hidden md:block'>All Students</h1>
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
           <button className='w-8 h-8 flex items-center justify-center rounded-full bg-abukiYellow'>
           <Image src={'/plus.png'} width={14}height={14}/>
           </button>
        )}
      </div>
      </div>
       
     </div>

     {/* LISTS */}
       
        <Table  columns={columns} rowItems={rowItems} data={studentsData}/>
        
       

        {/* PAGINATION */}
        <Pagination/>
      
    
    </div>
  )
}

export default page
