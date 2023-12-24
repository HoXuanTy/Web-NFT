import React, { useState } from 'react'
import styles from "../../scss/Login.module.scss"
import ButtonProps from '../../component/Button/Buttons';

import { MdAlternateEmail, MdCheckCircleOutline } from "react-icons/md";
import { PiKeyhole } from "react-icons/pi";


type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("signup");


  const isEmailValid = email !== '';
  const isPasswordValid = password !== '';

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.Wapper_form}>
        <div className={styles.form}>
          <h1>Welcome back</h1>
          <p>Please Enter your email and password</p>
          <div className={styles.form_redirect}>
            <div className={styles.btn_login}><a href="#">Login</a></div>
            <div className={styles.btn_sigup}><a href="signup">SignUp</a></div>
          </div>
          <div className={styles.form_input}>
            <div>
              <MdAlternateEmail size={24} className={styles.icons} />
            </div>
            <div className={styles.input_box}>
              <input type="text" placeholder='Email Address' value={email} onChange={handleEmailChange} />
            </div>
            <div>
              {isEmailValid && <MdCheckCircleOutline size={16} color='#0CAF60' />}
            </div>
          </div>
          <div className={styles.form_input}>
            <div>
              <PiKeyhole size={24} className={styles.icons} />
            </div>
            <div className={styles.input_box}>
              <input type="text" placeholder='Password' value={password} onChange={handlePasswordChange} />
            </div>
            <div>
              {isPasswordValid && <MdCheckCircleOutline size={16} color='#0CAF60' />}
            </div>
          </div>

          <ButtonProps children='Continue' className={styles.Button} />

        </div>
      </div>
      <div className={styles.imageLogin}>
        <img src={require('../../asset/image/login.png')} alt="image" />
      </div>
    </div>
  )
}

export default Login