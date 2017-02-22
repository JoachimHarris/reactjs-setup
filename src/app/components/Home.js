import React from 'react';

export class Home extends React.Component {
    render() {
        return(
            <div>
                <p>In a new Component!</p>
                <p>Hi my name is {this.props.name} and my age is {this.props.age}</p>
            </div>
        )
    }
}
