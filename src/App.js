import './App.css';
import {Button, Row, Col, Container} from 'react-bootstrap';
import RefExample from './RefExample';
import NumberInfo from './NumberInfo';

function App() {
  let style = {
    title: {
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "10px",
      fontWeight: "800",
      fontSize: "20px",
    },
    rightTop: {
      padding: "10px",
      
    }
  }
  return (
    <Container>
      <Row>
        <Col style={style.title}>Using Refs in React JS</Col>
      </Row>
      <Row>
        <Col xs={3}><p className="highlight">Refs are used in React to refer to the DOM object directly specially when we are using those in the native elements like div and input.</p></Col>
        <Col xs={9}>
          <Row>
            <Col style={style.rightTop}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
          </Row>
          <Row>
            <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
            <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col style={style.title}>Footer goes here</Col>
      </Row>
      <Row>
        <Col><RefExample /></Col>
        <Col><NumberInfo></NumberInfo></Col>
      </Row>
    </Container>
  );
}

export default App;
