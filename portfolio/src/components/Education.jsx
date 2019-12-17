import React from 'react';
import { Timeline, Card, List } from 'antd';

class Education extends React.Component {
    render() {
        return (
            <Timeline mode="left">
                <Timeline.Item key="1" color="green">
                    <Card title={<span><a href="#">2017</a> - BITS Pilani</span>}>
                    <p>
                        I completed my undergraduate from BITS Pilani where I strengthened computer science fundamentals, developed a temprament towards logical thinking, built strong friendships and explored many avenues.
                    </p>
                    <List header={<h1>Achievements</h1>}>
                        <List.Item>CGPA : 9.67</List.Item>
                        <List.Item>Silver Medalist</List.Item>
                        <List.Item>300/300 scorer for Microprocessors course in BITS last 25+ years history</List.Item>
                        <List.Item>Merit Scholarship awardee for all 8 semesters</List.Item>
                    </List>
                    </Card>
                </Timeline.Item>
                <Timeline.Item key="2" color="green">
                    <Card title={<span><a href="#">2013</a> - Bal Mandir Sr. Sec. School</span>}>
                    <p>
                    I did my pre-nursery to intermediate here. Efficient teaching and firm support by my teachers helped me develop both academically and personally.
                    </p>
                    <List header={<h1>Achievements</h1>}>
                        <List.Item>X | CBSE | 10 CGPA</List.Item>
                        <List.Item>XII | CBSE | 93.2%</List.Item>
                    </List>
                    </Card>
                </Timeline.Item>
            </Timeline>
        );
    }
}

export default Education;