
import Link from 'next/link';
import React from 'react'

export default async function ISR() {
  const courses = await fetch(
     "https://6950e18370e1605a1088bb80.mockapi.io/courses",
     {
      
      next:{revalidate:1}
     },
   ).then((res) => res.json());


  return (
    <div>
      <ul>
        {courses.map((item: { id: string; teacher_name: string }) =>(
          <li key={item.id} className='bg-white shadow my-1 p-2.5 rounded'>
            <Link href={`/ssg/${item.id}`} className='cursor-pointer'>
            {item.teacher_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
