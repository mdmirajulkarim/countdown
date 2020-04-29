import React from 'react'

import Digit from './digit/digit'

const countdown = (props) =>

{
return(
    <div className="d-flex my-4" >
        <Digit color="palegreen" value= { props.time.min } />
        <Digit color="skyblue" value= { props.time.sec } />
        <Digit color="salmon" value={ props.time.mili } />


    </div>

)

}

export default countdown