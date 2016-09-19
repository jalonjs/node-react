import React, {Component} from 'react';

class About extends React.Component {

    render() {
        const {className, ...others} = this.props;
        return (
            <div>
                I am Jalon
            </div>
        );
    }
}

export default About