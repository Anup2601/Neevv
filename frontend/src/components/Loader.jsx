import {  LoaderIcon } from 'lucide-react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoaderIcon className="size-20 animate-spin "/>
    </div>
  )
}

export default Loader