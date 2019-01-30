import React from 'react';

class Delayed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => { this.show() }, this.props.waitBeforeShow);
    }

    show() {
        this.setState({hidden:false});
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

export default Delayed;