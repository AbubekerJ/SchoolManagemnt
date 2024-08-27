import React from 'react'

const InputFields = ({error ,register ,name , label , defaultValue  ,type}) => {
  return (
    <div className='flex flex-col gap-2 w-full md:w-[30%] '>
        <label  className='text-sm text-gray-400'>{label}</label>
       <input type={type} defaultValue={defaultValue} className='p-2 ring-1  w-full    rounded-md' {...register(name)} />
       {error?.message && <p className='text-red-500 text-xs'>{error?.message}</p>}
    </div>
  )
}

export default InputFields
