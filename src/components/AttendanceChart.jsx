'use client'
import Image from "next/image"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'mon',
    present: 4000,
    absent: 2400,
   
  },
  {
    name: 'tus',
    present: 3000,
    absent: 1398,
    
  },
  {
    name: 'wed',
    present: 2000,
    absent: 9800,
    
  },
  {
    name: 'the',
    present: 2780,
    absent: 3908,
   
  },
  {
    name: 'fri',
    present: 1890,
    absent: 4800,
   
  },
 
];

const AttendanceChart = () => {
  return (
    <div className=' bg-white rounded-3xl w-full h-full'>
      {/* TOP */}
      <div className='flex justify-between items-center p-4'>
        <h1>Attendance</h1> 
        <Image
        src={'/moreDark.png'}
        width={20}
        height={20}/>
      </div>
      {/* PRESENT APSENT */}
      <div className="flex gap-3 justify-start px-4  ">
        <div className="flex gap-2">
        <div className="bg-abukiYellow  rounded-full w-5 h-5"/>
        <h1 className="text-gray-400 text-sm">present</h1>
        </div>
        <div className="flex gap-2">
        <div className="bg-abukiPurple  rounded-full w-5 h-5"/>
        <h1 className="text-gray-400 text-sm">Absent</h1>
        </div>
       
      </div>
      <div className="pt-5" style={{ width: '100%', height: 300 }}>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} barSize={20}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="absent" fill="#8884d8" />
      <Bar dataKey="present" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
</div>

    </div>
  )
}

export default AttendanceChart
