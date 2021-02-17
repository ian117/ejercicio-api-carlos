import React, {useState, useEffect} from 'react'; 

const Quote = ({quotes}) => {
    const [component, setComponent] = useState([])

    const makeList = quotes.map((element) => (
        <div key={element._id}>
            <p>{element.quote}</p>
        </div>
    ))
    
    return (
        <div>{makeList}</div>
    )
}

export default Quote;