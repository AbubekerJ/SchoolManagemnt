
import { subjectsData, teachersData } from "@/lib/data"
import Image from "next/image"
import BigCalander from "@/components/BigCalander"
import Announcement from "@/components/Announcement"


const page = ({params}) => {
  
  const teacher =teachersData.find((item)=>item.id===parseInt(params.id))

  
  return (
    <div className="w-full flex flex-col xl:flex-row m-2 gap-4  ">
      {/* LEFT */}
      <div className="  w-full xl:w-2/3 flex flex-col  gap-5 ">
        {/* TOP */}
        <div className="flex flex-col xl:flex-row mr-6 xl:mr-0 ">
          {/* L */}
        <div className="flex flex-col md:flex-row gap-4 w-full xl:w-1/2 p-4 bg-abukiSky rounded-md items-center ">
           <div className="flex gap-6 items-center">  
              <Image 
              className="rounded-full w-20 h-20"
              src={teacher.photo}  width={150} height={150}/>
              <div className="flex flex-wrap gap-3">
                  < h1>{teacher.name}</h1>
                  <h1 className="text-gray-400 text-xs ">leaorm ipsum dscription leaorm ipsum dscription </h1>
                  <div className=" flex gap-7 flex-wrap">
                     <div className="flex flex-col gap-3">
                        <div className="flex gap-1 items-center">
                            <Image src={'/blood.png'} width={10} height={10} className="rounded-full w-4 h-4"/>
                            <h1 className="text-gray-500 text-xs">A+</h1>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Image src={'/mail.png'} width={10} height={10} className="rounded-full w-4 h-4"/>
                            <h1 className="text-gray-500 text-xs">{teacher.email}</h1>
                        </div>
                      </div>  
                     <div className="flex flex-col gap-3">
                        <div className="flex gap-1 items-center">
                            <Image src={'/date.png'} width={10} height={10} className="rounded-full w-4 h-4"/>
                            <h1  className="text-gray-500 text-xs">12/23/2016</h1>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Image src={'/phone.png'} width={10} height={10} className="rounded-full w-4 h-4"/>
                            <h1 className="text-gray-500 text-xs">0911121314</h1>
                        </div>
                      </div>  
                       
                  </div>
              </div>
           </div>
        </div>
        {/* R */}
        <div className="w-full xl:w-1/2  flex  flex-col  2xl:flex-row   mt-5 xl:mt-0 ml-2  ">
           <div className="flex gap-3  ">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
                <div className="flex gap-3 p-4 bg-white rounded-md items-center">
                  <Image src={'/singleAttendance.png'} width={7} height={8} className="w-4 h-4 "/>
                  <div className="flex  flex-col gap-2 text-sm">
                  <h1>90%</h1>
                  <h1 className="text-xs">Attendance</h1>
                  </div>
                  
                </div>
                <div className="flex gap-3 p-4 bg-white rounded-md items-center">
                  <Image src={'/singleLesson.png'} width={7} height={8} className="w-4 h-4 "/>
                  <div className="flex  flex-col gap-2 text-sm">
                  <h1>90%</h1>
                  <h1 className="text-xs">Lessons</h1>
                  </div>
                  
                </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-4">
            <div className="flex gap-3 p-4 bg-white rounded-md items-center">
                  <Image src={'/singleBranch.png'} width={7} height={8} className="w-4 h-4 "/>
                  <div className="flex  flex-col gap-2 text-sm">
                  <h1>90%</h1>
                  <h1 className="text-xs">Branches</h1>
                  </div>
                  
                </div>
                <div className="flex gap-3 p-4 bg-white rounded-md items-center">
                  <Image src={'/singleClass.png'} width={7} height={8} className="w-4 h-4 "/>
                  <div className="flex  flex-col gap-2 text-sm">
                  <h1>90%</h1>
                  <h1 className="text-xs">Classes</h1>
                  </div>
                  
                </div>
            </div>

           </div>
           
          </div>
        </div>
        {/* BOTTEM */}
        <div className="bg-white  rounded-md flex-1 p-4  mb-4  ">
         <h1 className="font-medium text-lg">Teacher Schedule</h1>
         <BigCalander />
        </div>
      </div>
      {/* RIGHT */}
      <div className=" w-full xl:w-1/3 flex flex-col  gap-5  ">
        <div className="bg-white mr-6 p-4">
            <h1 className="text-lg font-medium">School</h1>
            <div className="flex gap-3 flex-wrap">  
                  <h1 className="bg-green-200 text-gray-500 p-2 text-xs">Teacher Class</h1>
                  <h1 className="bg-blue-200 text-gray-500 p-2 text-xs"> Tecaher Student</h1>
                  <h1 className="bg-red-200 text-gray-500 p-2 text-xs">Teacher Lessons</h1>
                  <h1 className="bg-gray-200 text-gray-500 p-2 text-xs">Teacher subjucts</h1>
                  <h1 className="bg-purple-200 text-gray-500 p-2 text-xs">Teacher Assignment</h1>
            </div>
        </div>

        <div className="bg-white mt-4 rounded-md mr-6">
          <div className="flex justify-between p-4 items-center  ">
            <h1 className="font-medium">Performance</h1>
            <Image src={'/moreDark.png'} width={10} height={10}/>
          </div>

        </div>
          <div className=' bg-white mt-3 rounded-md p-4 mr-6'>
       <Announcement/>
        </div>
      </div>
    </div>
  )
}

export default page
