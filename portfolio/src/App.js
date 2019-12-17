import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Layout, Row, Col } from 'antd';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import Blog from './components/Blog';

const { Content } = Layout;

const contentMap = {
  'home': <Home/>,
  "education": <Education/>,
  "work": <Work/>,
  "projects": <Projects/>,
  "blog": <Blog/>
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContent: 'home'
    }
  }

  updateCurrentContent = (content) => {
    this.setState({currentContent: content});
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Content style={{ background: '#fff', padding: '0 10px', marginTop: 10, height: '100vh' }}>
              <Row>
                  <Col xs={0} sm={0} md={0} lg={1} xl={1}/>
                  <NavBar updateCurrentContent={this.updateCurrentContent} />
                  <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                      <div style={{ background: '#fff', margin: '0px 0px', padding: '20px'}}>
                          {contentMap[this.state.currentContent]}
                      </div>
                  </Col>
                  <Col xs={0} sm={0} md={0} lg={1} xl={1}/>
              </Row>
          </Content>
      </Layout>
      </div>
    );
  }
}

export default App;
