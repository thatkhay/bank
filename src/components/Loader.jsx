import React from 'react'

const Loader = () => {
  return (
     <div className="flex items-center justify-center h-[4rem] mt-4">
      <div className="border-t-8 border-blue-500 border-solid rounded-full animate-spin h-10 w-10"></div>
    </div>
  )
}

export default Loader