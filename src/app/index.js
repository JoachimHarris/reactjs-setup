import React from 'react';
import {render} from 'react-dom';

import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        return(
            <div>
                <Navigation />
                <Header />
                <Home />
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'));
