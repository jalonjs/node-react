import React, {Component} from 'react';

class About extends React.Component {

    render() {
        const {className, ...others} = this.props;
        return (
            <div>
                about: I am Jalon
            </div>
        );
    }
}

export default About