import React from 'react';
import { Timeline, Card, List } from 'antd';

class Work extends React.Component {
    render() {
        return (
            <Timeline mode="left">
            <Timeline.Item key="1" color="green">
                <Card title={<span><a href="#">2020 - Present</a> - Microsoft</span>}>
                <p>
                I have been working on Azure Storage solutions.
                </p>
                </Card>
            </Timeline.Item>
            <Timeline.Item key="1" color="green">
                <Card title={<span><a href="#">2017 - 2020</a> - Nutanix</span>}>
                <p>
                In January 2017 I started my journey here as an intern for 6 months. I joined back as MTS in Aug'17. I worked on Xi Developer Cloud Services.
                </p>
                <List header={<h1>Achievements</h1>}>
                    <List.Item>Hackathon project to product with display in .NEXT conference 2018</List.Item>
                    <List.Item>MTS3 title assignment in the span of only 1 year</List.Item>
                </List>
                </Card>
            </Timeline.Item>
            <Timeline.Item key="2" color="blue">
                <Card title={<span><a href="#">2016</a> - DRDO</span>}>
                <p>I worked under Dr. Pinaki Roy Chowdhary, Scientist-F on defining a regular grammar to represent images as a feature transformation technique.</p>
                </Card>
            </Timeline.Item>

            <Timeline.Item key="3" color="blue">
                <Card title={<span><a href="#">2015</a> - TIFR Mumbai, HBCSE</span>}>
                <p>I worked here as summer intern and developed a mailclient application that also keeps the school server synchronized across India.</p>
                </Card>
            </Timeline.Item>

            <Timeline.Item key="4" color="blue">
                <Card title={<span><a href="#">2015</a> - Quark | Tech. Fest</span>}>
                <p>I mentored juniors in developing a Computer Vision project: A free hand drawing tool.</p>
                </Card>
            </Timeline.Item>
            
            <Timeline.Item key="4" color="blue">
                <Card title={<span><a href="#">2013 - 2017</a> - BITS, Pilani</span>}>
                <p>I was Teaching Assistant for the courses : Computer Programming, Operating Systems, Microprocessors, Information Retreival</p>
                </Card>
            </Timeline.Item>
            </Timeline>
        );
    }
}

export default Work;