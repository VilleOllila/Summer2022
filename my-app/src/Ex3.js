import React from 'react'

const Button = (props) => {

    function onClick() {
        alert("clicked " + props.name)
    }

    return (
        <button onClick={onClick}>{props.name}</button>
    )
}

const Ex3 = () => {
    return (
        <div>
            <Button name="Button 1"/>
            <Button name="Button 2"/>
            <Button name="Button 3"/>
        </div>
    )
}
export default Ex3