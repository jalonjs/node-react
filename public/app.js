import React, {Component} from 'react';
import {Link} from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/hello" activeStyle={{color: 'red'}}><i styleName="fa fa-star-o"></i>Demo</Link>|
                    <Link to="/about" activeStyle={{color: 'red'}}><i styleName="fa fa-rocket"></i>关于</Link>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default App