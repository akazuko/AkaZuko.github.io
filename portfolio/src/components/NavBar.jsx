import React from 'react';
import { Menu, Row, Col, Typography, Affix } from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    MailOutlined,
    HomeOutlined,
    BookOutlined,
    LaptopOutlined,
    CodeOutlined,
    ReadOutlined
} from '@ant-design/icons';

const { Title } = Typography;

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Col xs={24} sm={24} md={24} lg={4} xl={4} style={{margin: '0px 10px 10px 0px'}}>
                <Row style={{background: '#fff', padding: '10px'}}>
                    <Col xs={6} sm={6} md={24} lg={24} xl={24}>
                        <img
                            src="https://avatars2.githubusercontent.com/u/7397405?s=460&v=4"
                            style={{width: '100%'}}
                        />
                    </Col>
                    <Col xs={18} sm={18} md={24} lg={24} xl={24}>
                        <Row>
                            <Col>
                                <Title level={3} style={{marginTop: '10px', textAlign: 'center'}}>
                                    AYUSH SHARMA
                                </Title>
                            </Col>
                            <Col>
                                <Row type="flex" justify="center">
                                    <Col span={4} style={{padding: 10}}>
                                        <a href="https://github.com/AkaZuko" target="blank">
                                            <GithubOutlined style={{fontSize: 'x-large'}}/>
                                        </a>
                                    </Col>
                                    <Col span={4} style={{padding: 10}}>
                                        <a href="https://www.linkedin.com/in/akazuko" target="blank">
                                            <LinkedinOutlined style={{fontSize: 'x-large'}}/>
                                        </a>
                                    </Col>
                                    <Col span={4} style={{padding: 10}}>
                                        <a href="https://twitter.com/localmrbean" target="blank">
                                            <TwitterOutlined style={{fontSize: 'x-large'}}/>
                                        </a>
                                    </Col>
                                    <Col span={4} style={{padding: 10}}>
                                        <a href="mailto:localbean.public@gmail.com" target="blank">
                                            <MailOutlined style={{fontSize: 'x-large'}}/>
                                        </a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Affix>
                <Row style={{marginTop: 10}}>
                    <Col xs={0} sm={0} md={0} lg={24} xl={24}>
                        <Menu style={{borderRight: 'white'}}>
                            <Menu.Item key="1">
                                <a onClick={(e) => {this.props.updateCurrentContent("home")}}>
                                    <div>
                                        <HomeOutlined />
                                        <span>Home</span>
                                    </div>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a onClick={(e) => {this.props.updateCurrentContent("education")}}>
                                    <div>
                                        <BookOutlined/>
                                        <span>Education</span>
                                    </div>
                                </a>
                            </Menu.Item>
                            
                            <Menu.Item key="3">
                                <a onClick={(e) => {this.props.updateCurrentContent("work")}}>
                                    <div>
                                        <LaptopOutlined/>
                                        <span>Work</span>
                                    </div>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <a onClick={(e) => {this.props.updateCurrentContent("projects")}}>
                                    <div>
                                        <CodeOutlined/>
                                        <span>Projects</span>
                                    </div>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <a onClick={(e) => {this.props.updateCurrentContent("blog")}}>
                                    <div>
                                        <ReadOutlined/>
                                        <span>Blog</span>
                                    </div>
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={0} xl={0} style={{background: '#fff', padding: '10px'}}>
                        <Row type="flex" justify="center" style={{borderBottom: 'solid'}}>
                            <Col span={4} style={{padding: 10}}>
                                <a onClick={(e) => {this.props.updateCurrentContent("home")}}>
                                    <HomeOutlined style={{fontSize: 'x-large'}}/>
                                </a>
                            </Col>
                            <Col span={4} style={{padding: 10}}>
                                <a onClick={(e) => {this.props.updateCurrentContent("education")}}>
                                    <BookOutlined style={{fontSize: 'x-large'}}/>
                                </a>
                            </Col>
                            <Col span={4} style={{padding: 10}}>
                                <a onClick={(e) => {this.props.updateCurrentContent("work")}}>
                                    <LaptopOutlined style={{fontSize: 'x-large'}}/>
                                </a>
                            </Col>
                            <Col span={4} style={{padding: 10}}>
                                <a onClick={(e) => {this.props.updateCurrentContent("projects")}}>
                                    <CodeOutlined style={{fontSize: 'x-large'}}/>
                                </a>
                            </Col>
                            <Col span={4} style={{padding: 10}}>
                                <a onClick={(e) => {this.props.updateCurrentContent("blog")}}>
                                    <ReadOutlined style={{fontSize: 'x-large'}}/>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Affix>
            </Col>
        )
    }
};

export default NavBar;