import React from 'react';

import footer from '../../sass/footer.scss';

export class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <span className="ion-ios-heart-outline footer__icon" aria-hidden="true"></span>
                            <p className="footer__text">
                                Made in Denmark
                            </p>
                        </div>
                        <div className="col-md-4">
                            <span className="ion-ios-telephone-outline footer__icon" aria-hidden="true"></span>
                            <p className="footer__text">
                                +(45)42200190
                            </p>
                        </div>
                        <div className="col-md-4">
                            <span className="ion-ios-email-outline footer__icon" aria-hidden="true"></span>
                            <p className="footer__text">
                                joachimharris@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
