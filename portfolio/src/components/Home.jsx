import React from 'react';
import { Row, Col, Divider, Tag} from 'antd';

var areasOfInterests = [
  "Machine Learning",
  "Artificial Intelligence",
  "Distributed Systems",
  "Microservices",
  "Web Development",
  "Competetive Coding"
]

class Home extends React.Component {
    render() {
        return (
        <Row>
            <Row>
                <Col style={{fontFamily: 'Josefin Slab', fontSize: '130%'}}>
                    <br/>
                    I am currently working at <a style={{fontFamily: 'Jura'}}>Microsoft</a> (SDE2). I completed my under-graduate from <a style={{fontFamily: 'Jura'}}>BITS Pilani University</a>.
                    <br/><br/>
                    I'm a keen learner, explorer, Computer Science enthusiast and an aspiring machine learning researcher with a passion for developing smart solutions to assist humans. I am familiar with Object Oriented Design & Programming Concepts, Test Driven Development and Paper Prototyping.
                    <br/><br/>
                    I think the best way to gain knowledge is by experimenting and the best way to strengthen concepts is by teaching.
                </Col>
                <Divider />
            </Row>
            <Row type="flex" justify="center" gutter={10}>
                <Col style={{fontFamily: 'Josefin Slab', fontSize: '130%'}}>
                        <b>Areas of interest:</b>
                </Col>
                    {areasOfInterests.map((x) => <Tag>{x}</Tag>)}
            </Row>
            <Divider/>
            
            <Row type="flex" justify="center" gutter={10}>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <h1 style={{fontFamily: 'Jura'}}>Languages</h1>
                    <Row><b>Familarity : Advanced</b></Row>
                    <Row>C++, Python, Java, C, Shell, SQL, HTML</Row>
                    <br/>
                    <Row><b>Familarity : Intermediate</b></Row>
                    <Row>JavaScript, Go, Rust</Row>
                    <br/>
                    <Row><b>Familarity : Basic</b></Row>
                    <Row>CSS, Verilog, Assembly</Row>
                </Col>

                <Col xs={24} sm={24} md={24} lg={0} xl={0}><Divider/></Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <h1 style={{fontFamily: 'Jura'}}>Framework/Libraries</h1>
                    <Row><b>Experienced</b></Row>
                    <Row>OpenCV, scikit-learn, scikit-image, numpy, tensorflow, pandas, ExpressJS, Mongoose, Django, materializecss</Row>
                    <br/>
                    <Row><b>Familiar</b></Row>
                    <Row>EasyMock, Theano, jQuery</Row>
                </Col>

                <Col xs={24} sm={24} md={24} lg={0} xl={0}><Divider/></Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <h1 style={{fontFamily: 'Jura'}}>Tools</h1>
                    <Row><b>Experienced</b></Row>
                    <Row>Docker, Docker-compose, Kubernetes, Ansible, MongoDB, Shinken, Elasticsearch, Logstash, Kibana, GCP, Azure</Row>
                    <br/>
                    <Row><b>Familiar</b></Row>
                    <Row>Prometheus, Grafana, Kafka, rabbitMQ, Ansible Tower</Row>
                </Col>
            </Row>
        </Row>
        )
    }
};

export default Home;