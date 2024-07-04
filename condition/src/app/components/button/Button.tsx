import React from 'react'
type buttontype = {
    liner: string
    isliner: boolean
}

function Button(props: buttontype) {
  return (
    <div className='flex text-center justify-center text-5xl font-bold'>
    {props.isliner ? <button>{props.liner}</button> : ""}
    <br/>
    {props.isliner && <button>{props.liner}</button>}
    </div>
  )
}

export default Button