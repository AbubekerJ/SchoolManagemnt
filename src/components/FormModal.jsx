
"use client"

import Image from "next/image"

const FormModal = ({type , table , data , id }) => {

    const size = type==='create'?'w-8 h-8':'w-7 h-7'
    const bgColor = type==='create'?'bg-abukiYellow':type==='edit'?'bg-purple-400':'bg-white'
  return (
    <button className={`${size}  flex items-center justify-center rounded-full ${bgColor}` }>
        <Image src={`/${type}.png`} width={14} height={14}/>
    </button>
  )
}

export default FormModal
