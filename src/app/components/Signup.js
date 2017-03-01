import React from 'react';

import signup from '../../sass/signup.scss';

import keyboard from '../../images/keyboard.png';

export class Signup extends React.Component {
    render() {
        return(
            <div className="signup">
                <div className="container-fluid block-center">
                    <div className="row">
                        <h2 className="signup__headline-top text-center">
                            Show your interess
                        </h2>
                        <div className="col-md-6">
                            <div className="signup__left-content">
                                <h3 className="signup__input-headline">Get news & updates</h3>
                                <p
                                    className="signup__input-subtext">
                                    Get updates on the new SmartMirror for hairdresser
                                </p>
                                <form>
                                    <div>
                                        <input
                                            type="email"
                                            className="signup__input--field"
                                            placeholder="Email"
                                            />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="signup__input--field"
                                            placeholder="Your occupation - ex hairdresser"
                                            />
                                    </div>
                                    <button
                                        type="submit"
                                        className="signup__btn-submit">
                                        Sign up
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={keyboard} className="signup__image img-responsive"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
