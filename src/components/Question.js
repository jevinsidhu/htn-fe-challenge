import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    display: block;
    background-color: ${props => props.set === "generalInfo" ? '#FCF8F0' : '#FFECEE'};
    padding: 10px 15px;
    border: 2px solid;
    border-color: ${props => props.set === "generalInfo" ? '#FEF4E0' : '#FDD4D9'};
    border-radius: 6px;
    margin-bottom: 20px;
`;

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    componentDidMount() {
        const { formData, set, id } = this.props;
        if (formData && set && id) {
            if (formData[`${set}`]) {
                this.setState({
                    value: formData[`${set}`][`${id}`],
                });
            }
        }
    }

    render() {
        const { id, type, set } = this.props;
        const { value } = this.state;
        return (
            <div>
                <label>{this.props.label}</label>
                <Input
                    required
                    set={set}
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Question;
