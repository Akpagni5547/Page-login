import './login.module.scss';
import 'antd/dist/antd.css';
import logoBio from '../../img/logo.png'
import { Card, Row, Col } from "antd";
import LoginForm from '../login-form/login-form';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login() {
  const BACKGROUNDSTYLE : object = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
  return (
    <div className="h-100" style={BACKGROUNDSTYLE}>
    <div className="container d-flex flex-column justify-content-center h-100">
        <Row justify="center">
          <Col xs={15} sm={15} md={12} lg={10} xl={7} xxl={7}>
            <Card >
              <div className="my-4">
                <div className='img-center'>
                  <img
                    className="img-fluid"
                    src={logoBio}
                    alt="L'image de Bio Médiacle"
                  />
                </div>
                <Row justify="center">
                  <Col xs={24} sm={24} md={20} lg={20}>
                    <LoginForm />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      </div>
  );
}

export default Login;
