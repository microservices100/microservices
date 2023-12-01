import React from 'react';
import { Form, Input } from 'antd';
import './commonInput.scss';

const CommonInput = ({ props, index }) => {
    return (
        <>

            <Form.Item
                name={props.name}
                className="loginInput"
                rules={props.rules}
            >
                <Input
                    placeholder={props.placeholder}
                    className='loginInput__input'
                    prefix={<props.icon className="loginInput__input-icon" />}
                />
            </Form.Item>
        </>
    );
};

export default CommonInput;