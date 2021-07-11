import React, {useRef} from 'react';
import axios from 'axios';

const NumberInfo = (props) => {
    const ref = useRef();
    let url = 'https://jsonplaceholder.typicode.com/todos/5'
    function buttonHandler() {
        axios.get(url)
        .then( response => {
            console.log(response);
            ref.current.innerHTML = response.data.title;
        })
        .catch( error => console.log(error));
    }

    function buttonHandlerFetch() {
        fetch(url).then(response => response.json())
        .then(data => {
            ref.current.innerHTML = data.title;
        });
    }

    return (
        <>
        <div ref={ref}></div>
        <button onClick={buttonHandlerFetch}>Click to see Todo</button>
        </>
    )
};

export default  NumberInfo;