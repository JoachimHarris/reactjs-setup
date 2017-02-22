import React from 'react';
import {render} from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        var user = {
            name: "Joachim",
            hobbies: ["Sports", "Reading"]
        };
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Joachim"} initialAge={33} user={user}>
                            <p>This is the children in the Home component</p>
                        </Home>
                    </div>
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
}

render(<App/>, window.document.getElementById('app'));
