'use client'
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'jan',
    expence: 4000,
    income: 2400,
    
  },
  {
    name: 'feb',
    expence: 3000,
    income: 1398,
    
  },
  {
    name: 'march',
    expence: 2000,
    income: 9800,
    
  },
  {
    name: 'Apr',
    expence: 2780,
    income: 3908,
    
  },
  {
    name: 'may',
    expence: 1890,
    income: 4800,
    
  },
  {
    name: 'jun',
    expence: 2390,
    income: 3800,
    
  },
  {
    name: 'july',
    expence: 3490,
    income: 4300,
    
  },
  {
    name: 'aug',
    expence: 3490,
    income: 4300,
    
  },
  {
    name: 'sep',
    expence: 3490,
    income: 4300,
    
  },
  {
    name: 'oct',
    expence: 3490,
    income: 4300,
    
  },
  {
    name: 'nvb',
    expence: 3490,
    income: 4300,
    
  },
  {
    name: 'dec',
    expence: 3490,
    income: 4300,
    
  },
];
const FinanceChart = () => {
  return (
    <div className='bg-white w-full h-full rounded-3xl '>
      <div className='flex justify-between items-center p-4'>
       <h1>Finance</h1> 
        <Image
        src={'/moreDark.png'}
        width={20}
        height={20} /> 
        
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={5}/>
          <Line type="monotone" dataKey="expence" stroke="#82ca9d" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer> 
    </div>
  )
}

export default FinanceChart
