import React from 'react';

import navigation from '../../sass/navigation.scss';

export class Navigation extends React.Component {
    render() {
        return(
            <div className="navigation container-fluid">
                    <div className="row container center-block">
                        <div className="col-md-12">
                            <p className="navigation__logo">
                                Hairrude
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}
