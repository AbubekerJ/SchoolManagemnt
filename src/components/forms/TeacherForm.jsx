"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import InputFields from '../InputFields';


const schema = z.object({
    Username: z.string()
    .min(3, { message: 'User name must be atleast 3 character' })
    .max(20 , {message:'User name must be atmost 3 character'}),
    name:z.string().min(1 ,{message:'minimum is 1'}),
    email:z.string().email({message:'Invalid email!'}),
    password:z.string().min(8 ,{ message: 'password be atleast 8 character' }),
    firstName:z. z.string().min(1, { message: ' first name must be atleast 1 character' }).max(20 , {message:'first name must be atmost 3 character'}),
    lastName:z. z.string().min(10, { message: ' last name must be atleast 1 character' }).max(20 , {message:'last name must be atmost 3 character'}),
    phone:z. z.number().min(1, { message: ' phone number should be 10 character' }).max(10,{message:'phone number should be 10 character'}),
    address:z. z.string().min(1, { message: ' Address is required!' }),
    birthDay:z. z.date({message:'date is required'}),
    sex:z.enum(['Male', 'Femal'],{message:'sex is required'}),
    photo:z.instanceof(File ,{message:'file is required'})
  });

const TeacherForm = ({type , data}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });
    // const submit=handleSubmit((data)=>{
    //   console.log(data)
    // })   
  
  return (
   <form onSubmit={handleSubmit((d) => console.log(d))} className='flex flex-col '>
      
       <div className='flex flex-col  gap-8'>
          <h1 className='text-xl font-medium'>Create a new teacher</h1>
          <h1 className='text-gray-400 text-sm'>Authentinication Information</h1>
           {/* TOP */}
           <div className='flex  gap-4 flex-col'>
            
            <div className='flex flex-wrap gap-6'>
            {/* <InputFields
             name={'Username'}
             label={'username'}
             register={register}
             error={errors.Username}
             defaultValue={data?.username}
             type='text'
           
             /> */}
                <div className='flex flex-col gap-2 w-full md:w-[30%] '>
                 <label  className='text-sm text-gray-400 flex flex-col gap-2 cursor-pointer'htmlFor="photo">
                  username
                  
                 </label>
                  <input type='text'   defaultValue={data?.photo} className='p-2 ring-1  w-full    rounded-md' {...register('Username')} />
                 <h1 className='text-red-500 text-xs'>{errors.Username?.message && <p>{errors.Username?.message.toString()}</p>}</h1> 
             </div>
             <InputFields
             name={'email'}
             label={'email'}
             register={register}
             error={errors.email}
             defaultValue={data?.email}
             type='email'
           
             />
             <InputFields
             name={'password'}
             label={'password'}
             register={register}
             error={errors.password}
             defaultValue={data?.password}
             type='password'
           
             />
            </div>
            
           </div>
           {/* BUTTOM */}
           <h1 className='text-gray-400 text-sm'>User Information</h1>
           < div className='flex flex-wrap gap-6'>
           <InputFields
             name={'firstName'}
             label={'firsname'}
             register={register}
             error={errors.firstName}
             defaultValue={data?.firstname}
             type='text'
           
             />
             <InputFields
             name={'lastName'}
             label={'lastName'}
             register={register}
             error={errors.lastName}
             defaultValue={data?.lastName}
             type='text'
           
             />
             <InputFields
             name={'phone'}
             label={'phone'}
             register={register}
             error={errors.phone}
             defaultValue={data?.phone}
             type='number'
           
             />
             <InputFields
             name={'address'}
             label={'address'}
             register={register}
             error={errors.address}
             defaultValue={data?.address}
             type='text'
           
             />
             <InputFields
             name={'birthDay'}
             label={'birthDay'}
             register={register}
             error={errors.birthDay}
             defaultValue={data?.birthDay}
             type='date'
           
             />
            <div className='flex flex-col gap-2 w-full md:w-[30%] '>
                 <label  className='text-sm text-gray-400'>
                   Sex
                 </label>
                 <select name="" id="" defaultValue={data?.sex} className='ring-2 border-blue-500 rounded-md' {...register('sex')}>
                  <option value="">male</option>
                  <option value="">female</option>
                 </select>
                 <h1 className='text-red-500 text-xs'>{errors.sex?.message && <p>{errors.sex?.message.toString()}</p>}</h1> 

             </div>

             <div className='flex flex-col gap-2 w-full md:w-[30%] '>
                 <label  className='text-sm text-gray-400 flex flex-col gap-2 cursor-pointer'htmlFor="photo">
                  <Image src={'/upload.png'} width={30} height={30}/>
                  <span>upload photo</span>
                 </label>
                  <input type='file' id='photo' hidden  defaultValue={data?.photo} className='p-2 ring-1  w-full    rounded-md' {...register('photo')} />
                 <h1 className='text-red-500 text-xs'>{errors.photo?.message && <p>{errors.photo?.message.toString()}</p>}</h1> 
             </div>
           </div>
       </div>
     
      <button>{type==='create'?'Create':'update'}</button>
   </form>
  )
}

export default TeacherForm
