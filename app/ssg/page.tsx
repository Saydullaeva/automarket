import React from 'react'

export default async function SSG() {
   const courses = await fetch(
    "https://6950e18370e1605a1088bb80.mockapi.io/courses",
   ).then((res) => res.json());

  return (
    <div>
    <ul>
      {courses.map((item) =>
        <li key={item.id} className='bg-white shadow my-1 p-2.5 rounded'>
          {item.teacher_name}
          </li>
          )}
    </ul>
    </div>
  );
}
