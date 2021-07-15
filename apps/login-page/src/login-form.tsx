import './login-form.module.scss';
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  return (
    <Form layout="vertical" name="login-form" requiredMark="optional">
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
      <Input prefix={<MailOutlined className="text-primary" />} />
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
          message: "Please input your password",
        },
      ]}
    >
      <Input.Password prefix={<LockOutlined className="text-primary" />} />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" block>
        Se connecter
      </Button>
    </Form.Item>
  </Form>
  );
}

export default LoginForm;
