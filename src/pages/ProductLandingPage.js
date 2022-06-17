import React from "react";


class ProductLandingPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    handleEvent() {
        console.log(this);
    }

    render() {
        return (
            <>
                <h1>Hello App</h1>
            </>
        )
    }
}

export default ProductLandingPage