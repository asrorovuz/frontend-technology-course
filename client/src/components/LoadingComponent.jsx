import React from 'react'
import { ReactComponent as Loading } from "../assistant/loading.svg";

const LoadingComponent = () => {
  return (
    <div className='loading d-flex'>
        <Loading />
    </div>
  )
}

export default LoadingComponent;