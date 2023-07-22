import React from 'react'
const takeFn = async() =>{
await new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('hai')
  },2000)

})
}
const dataFetch = async() => {
  await takeFn()
  throw new Error('This is a manual Error')
  return (
    <div>dataFetch</div>
  )
}

export default dataFetch