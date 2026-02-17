import { error } from 'console';
import React, { useEffect, useState } from 'react'

export default function CSR() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://6950e18370e1605a1088bb80.mockapi.io/courses")
    .then((res) => res.json())
    .then((data) => setPost(data))
    .catch((error) => console.log(error));
  }, []);

  return (
    <div className='bg-gray-300'>
ytre
    </div>
  )
}
