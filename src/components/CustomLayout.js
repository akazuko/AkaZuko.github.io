import NextHead from 'next/head'
import { Layout, Row, Col } from 'antd';
import NavBar from './NavBar';

const { Content } = Layout;

const CustomLayout = props => (
  <div>
    <NextHead>
      <title>Ayush Sharma</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jura:500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Slab" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abril+Fatface" />
    </NextHead>
  <Layout>
    <Content style={{ background: '#fff', padding: '0 10px', marginTop: 10, height: '100vh' }}>
        <Row>
            <Col xs={0} sm={0} md={0} lg={1} xl={1}/>
            <NavBar />
            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                <div style={{ background: '#fff', margin: '0px 0px', padding: '20px'}}>
                    {props.children}
                </div>
            </Col>
            <Col xs={0} sm={0} md={0} lg={1} xl={1}/>
        </Row>
    </Content>
  </Layout>
  </div>
);

export default CustomLayout;