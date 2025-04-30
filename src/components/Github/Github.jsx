import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://github.com/sharmaankit29')
      .then(response => response.json())//response string to jason
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, [])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' >Github followers : {data.following}</div>
  )
}

export default Github