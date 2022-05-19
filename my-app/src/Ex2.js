import React from 'react'
import "./Ex2.css"
const Ex2 = () => {

    function clickEvent(e) {
        e.preventDefault();
        alert("clicked!")
    }

    return (
        <div>
            <button className="button" onClick={clickEvent}>Click Me!</button>
        </div>
    )
}
export default Ex2