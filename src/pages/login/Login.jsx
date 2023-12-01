import React, { useState } from 'react';
// import axios from "axios";
import { Form, Button } from 'antd';
// import { Helmet } from "react-helmet";
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { END_POINTS } from '../../api/domain';
// import { useNavigate } from 'react-router-dom';
// import { HiOutlineUserCircle } from 'react-icons/hi2';
// import * as Notifications from "../../assets/messages.js";
// import { addUsers } from '../../store/actions/reducerActions';
import CommonInput from '../../constants/CommonInput.jsx';
import { loginFormField } from '../../constants/commonData.js';
import './login.scss';

const Login = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  // Login form submit function
  // const onFinish = async (values) => {
  //   // try {
  //   //   setIsBtnLoading(true);
  //   //   // API call for login
  //   //   let res = await axios.post(END_POINTS.login, values)
  //   //   if (res) {
  //   //     // Set token into localstorage
  //   //     localStorage.setItem("token", res?.data.result.token)
  //   //     // API call for get user information
  //   //     let userInfo = await axios.get(END_POINTS.userInfo, { headers: { authorization: res?.data.result.token } })
  //   //     dispatch(addUsers(userInfo.data.result))
  //   //     Notifications.loginSuccessMessage();
  //   //     setIsBtnLoading(false);
  //   //     // Navigate user after logging
  //   //     navigate('/')
  //   //   }
  //   // } catch (error) {
  //   //   if (error?.response?.data.msg) {
  //   //     Notifications.passwordNotMatch();
  //   //     setIsBtnLoading(false);
  //   //   }
  //   //   else {
  //   //     Notifications.emailNotRegisterd();
  //   //     setIsBtnLoading(false);
  //   //   }
  //   // }
  // };

  return (
    <div className="login-container">
      <div className="login-container__box">
        <div className="login-container__box-user-icon">
          {/* <HiOutlineUserCircle /> */}
        </div>
        <h3>Login</h3>
        <Form name="login-form"
          // onFinish={onFinish}
          className='login-container__box__form-wrapper'
        >
          {/* {loginFormField.map((data, index) => {
            return (
              <CommonInput props={data} index={index} />
            )
          })} */}

          <div className="login-container__box__form-wrapper-btn">
            {/* <Button htmlType="submit" loading={isBtnLoading}>
              Login
            </Button> */}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
