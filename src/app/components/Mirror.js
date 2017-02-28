import React from 'react';

import mirror from '../../sass/mirror.scss';

export class Mirror extends React.Component {
    render() {
        return(
            <div className="mirror">
                <div className="container-fluid text-center">
                    <div className="row">
                        <h2 className="mirror__headline--top">3 simple cuts</h2>
                    </div>
                </div>
                <div className="container center-block text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="mirror__headline">
                                1. Browse haircuts
                            </h3>
                            <span
                                className="ion-ios-book-outline mirror__icon"
                                aria-hidden="true">
                            </span>
                            <p className="mirror__sub-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="mirror__headline">
                                2. Choose haircut
                            </h3>
                            <span
                                className="ion-ios-checkmark-outline mirror__icon"
                                aria-hidden="true">
                            </span>
                            <p className="mirror__sub-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="mirror__headline">
                                3. Get haircut
                            </h3>
                            <span
                                className="ion-ios-personadd-outline mirror__icon"
                                aria-hidden="true">
                            </span>
                            <p className="mirror__sub-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
