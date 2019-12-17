import React from 'react';
import { List, Avatar, Button, Skeleton, Row } from 'antd';

const projects = [
    {
      name: 'Sign Language Detector',
      description: 'A machine learning solution that generated subtitles automatically for sign language in the input video.',
      url: 'https://github.com/AkaZuko/sign-language-detector'
    },{
      name: 'Portfolio Templater',
      description: 'This is github.io portfolio template to enable users to quickly add their portfolio.',
      url: 'https://github.com/AkaZuko/portfolio_template'
    },{
      name: 'Time Table Scheduler',
      description: 'Scheduling a time table using Genetic Algorithm.',
      url: 'https://github.com/AkaZuko/timetable_scheduler'
    }
  ];

class Projects extends React.Component {
    render() {
        return (
            <Row>
                <List
                    itemLayout="horizontal"
                    dataSource={projects}
                    bordered={true}
                    header={<h1>Projects</h1>}
                    renderItem={item => (
                    <List.Item actions={[<a key="list-loadmore-edit" href={item.url}>code</a>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                            title={item.name}
                            description={item.description}
                        />
                        </Skeleton>
                    </List.Item>
                    )}
                />
            </Row>
        );
    }
}

export default Projects;