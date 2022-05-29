import './App.css';
import 'antd/dist/antd.css';
import { Row, Col, Button, Form, Input, InputNumber } from 'antd';
import logo from './main-logo.png'
import vodolas from './main.jpg'
import puzir from './diver.png'
function App() {
  return (
    <div>
      <div className='layer'>
    <Row className='head'>
      <Col className='logo-wrap'><img src={logo} className='main-logo'></img></Col>
    </Row>
    <Row ><img className='vodolas' src={vodolas}></img>
    <div className='text'>Дайвинг в Сибири</div>
    </Row>
    </div>
    <div className='unscrolable'>
      <a href='https://vk.com/club213579450'><img src={puzir} className='diver'></img></a>
      </div>
    
    <Row className='img-wrap'>
    <Col span={4}></Col>
      <Col span={16}><div className='circle'>
        <div className='text-wrap'>
        <div className='head-text'>Почувствуй лёд с другой стороны</div>
        <div className='main-text'>Предоставляем уникальную возможность потрогать лёд с другой стороны</div>
         </div></div>
        </Col>
      <Col span={4}></Col>
    </Row>
    <h1 className='zag'>Записаться на обучение.</h1>
      <Row className='forma'>
        <Col className='forma'>
    <Form
      name="basic"
      labelCol={{
        span: 8,
        
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}

      autoComplete="off"
    >
      <Form.Item
        label="Имя"
        name="username"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите имя!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Адрес эл. почты"
        name="email"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите адрес эл. почты!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
          
        }}
      >
        <Button type="primary" htmlType="submit">
          Подать заявку
        </Button>
      </Form.Item>
    </Form></Col>
    </Row>
    
    
    <Row className='footer'></Row>
    </div>
  );
}

export default App;
