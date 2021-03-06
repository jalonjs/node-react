import React, {Component} from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);

        this.state = {smiling: false};

        this.handleClick = () => {
            console.log('12');
            this.setState({smiling: !this.state.smiling});
        };
    }

    componentWillMount() {
        // add event listeners (Flux Store, WebSocket, document, etc.)
    }

    componentDidMount() {
        // React.getDOMNode()
    }

    componentWillUnmount() {
        // remove event listeners (Flux Store, WebSocket, document, etc.)
    }

    get smilingMessage() {
        return (this.state.smiling) ? "is smiling" : "";
    }

    render() {
        const { style, ...others } = this.props;
        return (
            <div style={ style } onClick={this.handleClick}>
                Hello: {this.props.name} {this.smilingMessage}
            </div>
        );
    }
}

Hello.defaultProps = {
    name: 'Guest'
};

Hello.propTypes = {
    name: React.PropTypes.string
};

export default Hello