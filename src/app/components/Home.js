import React from 'react';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    render() {
        var text = "Something!";
        return(
            <div>
                <p>In a new Component!</p>
                <p>{ text }</p>
                <p>Hi my name is {this.props.name} and my age is {this.state.age}</p>
                <p>{this.state.status}</p>
                <p>User object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
            </div>
        )
    }
}
