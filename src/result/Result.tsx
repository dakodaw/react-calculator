import React, { Component } from 'react';
import '../App.css';
import './Result.css';

export class ResultComponent extends Component<{result: number}, {}> {

    render() {
        return (
            <div className="results">
                <p>
                    {this.props.result}
                </p>
            </div>
        );
    }
}
