import React, { Component } from 'react';
import '../App.css';

export class ResultComponent extends Component<{result: number}, {}> {

    constructor(props: any) {
        super(props);
        console.log(this.props);
    }
    render() {
        let result = this.props;
        console.log(result);
        return (
            <div>
                {this.props.result}
            </div>
        );
    }
}
