import React from 'react'
import './Ex6.css'

const Ex6 = () => {

    const ListItems = () => {
        const array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

        return (
            array.map((animal) =>
            <p className="listcontainer" key={animal}>{animal}</p>)
        )
    }

  


    return (
        <div>
            <ListItems />
        </div>
    )
}
export default Ex6