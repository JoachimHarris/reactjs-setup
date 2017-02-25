import React from 'react';

import mirror from '../../sass/mirror.scss';

export class Mirror extends React.Component {
    render() {
        return(
            <div className="mirror">
                <div className="row container center-block text-center">
                    <div className="col-md-4">.col-md-4</div>
                    <div className="col-md-4">.col-md-4</div>
                    <div className="col-md-4">.col-md-4</div>
                </div>
            </div>
        )
    }
}
