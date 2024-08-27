"use client";

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentForm";


const FormModal = ({ type, table, data, id }) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-abukiYellow"
      : type === "edit"
      ? "bg-purple-400"
      : "bg-white";
  const [state, setState] = useState(false);

  const getFormComponent = () => {
    switch (table) {
      case "teacher":
        return <TeacherForm type={type} data={data} />;
      case "student":
        return <StudentForm type={type} data={data} />;
      
        
      
    }
  };

  const DeleteForm = ()=>{
    return type==='delete'?(
      <form action="" className="flex flex-col gap-4">
        <h1>Are you sure you want to delete the {table} table</h1>
        <button className="bg-red-600 p-3 rounded-md text-white">Delete</button>
      </form>
    ):type==='create'||'update'?getFormComponent():'form not found'
  }
  return (
   <>
   
   <button
        className={`${size}  flex items-center justify-center rounded-full ${bgColor}`}
        onClick={()=>setState(true)}
      >
        <Image src={`/${type}.png`} width={14} height={14} />
      </button>
         {state && (
          <div className="h-screen w-screen absolute left-0 top-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white relative w-[95%] md:w-[75%] lg:w-[60%] xl:w-[48%]  p-4 opacity-100 rounded-xl">
            <DeleteForm/>
          
            <div className=" absolute top-4 right-4 " onClick={()=>setState(false)}>
              <Image src={'/close.png'} width={14} height={14} />
            </div>
            </div>
          </div>
        )}
   </>
    
  );
};

export default FormModal;
