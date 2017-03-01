import React from 'react';

import header from '../../sass/header.scss';

import hairImg from '../../images/hair.png';

export class Header extends React.Component {
    render() {
        return(
            <div className="headerTop">
                <div className="container center-block">
                    <div className="row">
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
                                    et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={hairImg} className="hair__image img-responsive"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
