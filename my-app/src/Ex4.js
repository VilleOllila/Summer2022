import React from 'react'
import { useState } from 'react'

const Ex4 = () => {
    const [ counter, setCounter] = useState(0)

    const increaseByOne = () => setCounter(counter +1 )
    
    return (
        <div>
            <p>Button has been clicked: {counter} times</p>
           <button className="button" onClick={increaseByOne}>Click Me!</button>
        </div>
    )
}
export default Ex4