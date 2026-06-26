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
    <div className='text-center m-2 sm:m-4 bg-gray-600 text-white p-3 sm:p-4 text-xl sm:text-2xl md:text-3xl rounded-lg' >
      Github followers : {data.following}
    </div>
  )
}

export default Github