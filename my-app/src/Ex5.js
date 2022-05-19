import React from 'react'
const Ex5 = () => {

    const array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    const listItems = array.map((animal) => 
    <li key={animal}>{animal}</li>)

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}
export default Ex5