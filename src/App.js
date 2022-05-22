import './App.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import logo from './main-logo.png'
import vodolas from './main.jpg'

function App() {
  return (
    <div>
    <Row className='head'>
      <Col className='logo-wrap'><img src={logo} className='main-logo'></img></Col>
      <Col ><div className='logo-text'>Дайвинг в Сибири</div></Col>
    </Row>
    <Row><img className='vodolas' src={vodolas}></img></Row>
    <Row>
    <Col span={5}></Col>
      <Col span={14}><div className='circle'>
        <div className='text-wrap'>
        <div className='head-text'>Почувствуй лёд с другой стороны</div>
        <div className='main-text'>Предоставляем уникальную возможность потрогать лёд с другой стороны</div>
        </div>
        </div></Col>
      <Col span={5}></Col>
    </Row>
    
    </div>
  );
}

export default App;
