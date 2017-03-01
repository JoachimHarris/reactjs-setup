import React from 'react';

import signup from '../../sass/themirror.scss';

import themirror from '../../images/smartmirror.jpg';

export class Themirror extends React.Component {
    render() {
        return (
            <div className="theMirror">
                <div className="container-fluid block-center">
                    <div className="row">
                        <h2 className="theMirror__headline-top text-center">
                            The actual SmartMirror
                        </h2>
                        <img src={themirror} className="theMirror__image img-responsive"/>
                    </div>
                </div>
            </div>
        )
    }
}
