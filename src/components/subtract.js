import React from 'react';
import { jsonRpc } from '../libs/socket';

class Subtract extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            id: ''
        };
    }

    componentDidMount() {
        jsonRpc(window.socket, {
            method: 'subtract',
            params: [this.props.arg1, this.props.arg2],
            id: this.props.id
        }, (e, d) => {
            let res = JSON.parse(d);
            if (this.props.id === res.id) {
                console.log(res);
                this.setState({
                    result: res.result,
                    id: res.id
                });
            }
        });
    }

    render() {
        return (
            <div>Subtraction of {this.props.arg1} and {this.props.arg2} is {this.state.result}, id: {this.state.id}</div>
        );
    }
}

export default Subtract;