import React, { useState } from 'react'

const Admin = () => {
  const [lineClamp, setLineClamp] = useState("line-clamp-6")
  const [lineClampTwo, setLineClampTwo] = useState("line-clamp-6")

  const lineClampHandler = () => {
    setLineClamp('line-clamp-none')
  }

  const lineClampTwoHandler = () => {
    setLineClampTwo('line-clamp-none')
  }
  return (
    <div className='p-4'>
      <h2 className='border-b'>Admin</h2>
      <div className='flex items-start gap-4 my-2'>
        <div className='w-[300px] rounded-md bg-zinc-200 p-3'>
          <h2 className='text-lg font-bold'>Line Clamp with tailwind css</h2>
          <p className={lineClamp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque molestiae, quo numquam minus error ratione delectus quibusdam deserunt corporis molestias illo tenetur sit autem laboriosam! Qui, tempora doloremque, odio vero, neque quae molestias quas esse adipisci maxime ex corporis deleniti. Blanditiis porro nostrum commodi corrupti, eum, fugiat expedita vero quis saepe voluptates, cum ea laborum maxime. Praesentium aliquam ut, quas tempore velit vitae enim quaerat delectus, nihil expedita eius sed consequuntur impedit eveniet reprehenderit esse totam? Ipsa soluta explicabo voluptas! Officiis minima error excepturi nesciunt nulla maxime, reprehenderit tempore laudantium molestias unde ad totam accusamus ex quia molestiae sed. </p><span onClick={lineClampHandler} className='text-blue-500 underline underline-offset-6 cursor-pointer'>See More</span>
        </div>
        <div className='w-[300px] rounded-md bg-zinc-200 p-3'>
          <h2 className='text-lg font-bold'>Line Clamp with tailwind css</h2>
          <p className={lineClampTwo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque molestiae, quo numquam minus error ratione delectus quibusdam deserunt corporis molestias illo tenetur sit autem laboriosam! Qui, tempora doloremque, odio vero, neque quae molestias quas esse adipisci maxime ex corporis deleniti. Blanditiis porro nostrum commodi corrupti, eum, fugiat expedita vero quis saepe voluptates, cum ea laborum maxime. Praesentium aliquam ut, quas tempore velit vitae enim quaerat delectus, nihil expedita eius sed consequuntur impedit eveniet reprehenderit esse totam? Ipsa soluta explicabo voluptas! Officiis minima error excepturi nesciunt nulla maxime, reprehenderit tempore laudantium molestias unde ad totam accusamus ex quia molestiae sed. </p><span onClick={lineClampTwoHandler} className='text-blue-500 underline underline-offset-6 cursor-pointer'>See More</span>
        </div>
      </div>
    </div>

  )
}

export default Admin