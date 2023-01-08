import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            fontStyle: "italic",
            fontSize: '16px',
        };
    }

    render() {
        return (
            <div className={"Alert"}>
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}
class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = "red";
    }
}
export { InfoAlert, ErrorAlert };

