import { Menu, Row, Col, Icon, Typography, Affix } from 'antd';
import Link from 'next/link';

const { Title } = Typography;

const NavBar = () => (
    <Col xs={24} sm={24} md={24} lg={4} xl={4} style={{margin: '0px 10px 10px 0px'}}>
        <Row style={{background: '#fff', padding: '10px'}}>
            <Col xs={6} sm={6} md={24} lg={24} xl={24}>
                <img
                    src="https://akazuko.github.io/images/profilepic-180x180.png"
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
                                    <Icon type="github" style={{fontSize: 'x-large'}}/>
                                </a>
                            </Col>
                            <Col span={4} style={{padding: 10}}>
                                <a href="https://www.linkedin.com/in/akazuko" target="blank">
                                    <Icon type="linkedin" style={{fontSize: 'x-large'}}/>
                                </a>
                            </Col>
                            <Col span={4} style={{padding: 10}}>
                                <a href="https://twitter.com/asharma_95" target="blank">
                                    <Icon type="twitter" style={{fontSize: 'x-large'}}/>
                                </a>
                            </Col>
                            <Col span={4} style={{padding: 10}}>
                                <a href="mailto:sharma.ayush1995@gmail.com" target="blank">
                                    <Icon type="mail" style={{fontSize: 'x-large'}}/>
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
                        <Link href="/">
                            <div>
                                <Icon type="home" />
                                <span>Home</span>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link href="/education">
                            <div>
                            <Icon type="book" />
                            <span>Education</span>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link href="/work">
                            <div>
                                <Icon type="laptop" />
                                <span>Work</span>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link href="/projects">
                            <div>
                                <Icon type="code" />
                                <span>Projects</span>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link href="/blog">
                            <div>
                                <Icon type="read" />
                                <span>Blog</span>
                            </div>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Col>
            <Col xs={24} sm={24} md={24} lg={0} xl={0} style={{background: '#fff', padding: '10px'}}>
                <Row type="flex" justify="center" style={{borderBottom: 'solid'}}>
                    <Col span={4} style={{padding: 10}}>
                        <Link href="/"><Icon type="home" style={{fontSize: 'x-large'}}/></Link>
                    </Col>
                    <Col span={4} style={{padding: 10}}>
                        <Link href="/education"><Icon type="book" style={{fontSize: 'x-large'}}/></Link>
                    </Col>
                    <Col span={4} style={{padding: 10}}>
                        <Link href="/work"><Icon type="laptop" style={{fontSize: 'x-large'}}/></Link>
                    </Col>
                    <Col span={4} style={{padding: 10}}>
                        <Link href="/projects"><Icon type="code" style={{fontSize: 'x-large'}}/></Link>
                    </Col>
                    <Col span={4} style={{padding: 10}}>
                        <Link href="/blog"><Icon type="read" style={{fontSize: 'x-large'}}/></Link>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Affix>
    </Col>
);

export default NavBar;