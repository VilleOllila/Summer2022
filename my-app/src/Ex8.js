import React from 'react'
import "./Ex8.css"
const Ex8 = () => {

    const jsonData= [
        {
            id: 1,
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: 2,
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#"
        }
    ]
    console.log(jsonData)

    
    return (
        <div className='container'>
            {jsonData.map((data) => 
            <p key={data.id}> <b>{data.setup} </b> <br /> {data.punchline}</p>) }
        </div>
    )
}
export default Ex8