import React from 'react';

import header from '../../sass/header.scss';

export class Header extends React.Component {
    render() {
        return(
            <div className="headerTop">
                <div className="row container center-block">
                    <div className="col-md-6">
                        <div>
                            <h1 className="headerTop__headline">My name is Jay Harris</h1>
                            <p>I am a frontend developer and a designer.</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="col-md-6">.col-md-6</div>
                </div>
            </div>
        )
    }
}
