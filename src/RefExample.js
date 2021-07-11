import React from 'react';

class RefExample extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.div = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //document.getElementById, querySelector('')
        this.input.current.style.backgroundColor = "blue";
        this.div.current.innerHTML = "Changed thorugh ref";
    }

    render() {
        return(
            <>
            <input onClick={this.handleClick} type="text" ref={this.input} />
            <div ref={this.div}>this is the additional one</div>
            </>
        )
    }
}

export default RefExample;