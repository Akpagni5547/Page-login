import { Form, Input, Button } from "antd";
import {useState, useEffect} from 'react'
import { WarningOutlined } from '@ant-design/icons';
import './login-form.module.scss'

export interface LoginFormProps {}

export function LoginForm() {
  const [SANSERREUR, SETSANSERREUR] = useState(1)
  const INITIALCREDENTIAL  = {
		email: 'user1@themenate.net',
		password: '2005ipo'
	}
  useEffect (() => {
    if(SANSERREUR == 0 ){
      setTimeout(() => {
        SETSANSERREUR(1)
      }, 3000)
    }
  }

  )
  const VALIDERFORMULAIRE = (e: { email: string; password: string; }) => {
    if(INITIALCREDENTIAL.email == e.email && INITIALCREDENTIAL.password == e.password ){
      SETSANSERREUR(1)
    }else{
      SETSANSERREUR(0)
    }
  }
  return (
    <Form layout="vertical" name="login-form" requiredMark="optional" onFinish={VALIDERFORMULAIRE}>
    <Form.Item
      name="email"
      label="Email"
      rules={[
        {
          required: true,
          message: "Veuillez entrer un email s'il vous plait",
        },
        {
          type: "email",
          message: "Veuillez entrer une email valide!",
        },
      ]}
    >
      <Input  className='text-primary'/>
    </Form.Item>
    <Form.Item
      name="password"
      label={
        <div className="d-flex justify-content-between w-100 align-items-center">
          <span>Mot de passe</span>
        </div>
      }
      rules={[
        {
          required: true,
          message: "Veuillez entrer un mot de passe",
        },
      ]}
    >
      <Input.Password  className="text-primary"/>
    </Form.Item>
    {SANSERREUR == 0 ? <p className='paragraphe-red'> <WarningOutlined /> L'email et/ou le mot de passe incorrects </p> : ""}
    
    <Form.Item>
      <Button type="primary" htmlType="submit" block >
        Se connecter
      </Button>
    </Form.Item>
    <p> <a href="#">Mot de passe oublié ?</a></p>
  </Form>
  );
}

export default LoginForm;
