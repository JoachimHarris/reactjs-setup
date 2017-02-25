import React from 'react';

import header from '../../sass/header.scss';

import hairImg from '../../images/hair.png';

export class Header extends React.Component {
    render() {
        return(
            <div className="headerTop">
                <div className="row container center-block">
                    <div className="col-md-6">
                        <div>
                            <h1 className="headerTop__headline">SmartMirror for Hairdressers</h1>
                            <h2 className="headerTop__subline">
                                Create with your customers
                            </h2>
                            <p>
                                I am a frontend developer and a designer. Lorem
                                ipsum dolor sit amet, consectetur adipisicing
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={hairImg} className="hair__image img-responsive"/>
                    </div>
                </div>
            </div>
        )
    }
}
