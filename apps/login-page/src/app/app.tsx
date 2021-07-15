import './app.module.scss';
import 'antd/dist/antd.css';
import Login from './Components/login/login';
import './light-theme.css'

export function App() {
  return (
    <div className="app" >
      <Login/>
    </div>
  );
}
export default App;
