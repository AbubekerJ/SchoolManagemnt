import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
 <div className=" flex items-center  justify-between  p-4 pt-5  ">
    {/* search */}
    <div className="hidden md:flex  rounded-full ring-[1.5px] ring-gray-200 items-center gap-2 p-3  " >
        <Image
        className="hover:cursor-pointer"
        src={'/search.png'}
        width={14}
        height={14}/>
        <input  className='bg-transparent outline-none'  type="text" placeholder="search"/>
        
    </div >
    {/* icons and user */}
     
    <div className=" flex gap-6  w-full justify-end ">
        <div   className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
        <Image 
     
       src={'/message.png'}
       width={20}
       height={20}/>
       
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center relative">
            <div className="rounded-full w-5 h-5 p-3 flex items-center justify-center bg-purple-600 text-white text-xs absolute bottom-5 left-5 ">
                2
            </div>
        <Image
       src={'/announcement.png'}
       width={20}
       height={20}/>
        </div>
      
       <div className="flex flex-col gap-1">
        <span className=" text-xs leading-3 font-medium">Abuki jemal</span>
        <span className="text-[10px] text-gray-500 text-right">student</span>
       </div>

       
        <Image 
        className=" rounded-full "
       src={'/avatar.png'}
       width={30}
       height={30}/>
       
      
       
      
    </div>
 </div>
  );
};

export default Navbar;
