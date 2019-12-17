import { List, Skeleton, Row } from 'antd';
import CustomLayout from '../components/CustomLayout';

const blogs = [
  {
    title: 'AuthN and AuthZ with traefik for micro-services',
    description: 'Enable OAuth2.0 AuthZ and AuthN with traefik(API gateway) for microservices',
    url: 'https://medium.com/@akazuko/authn-and-authz-with-traefik-for-micro-services-1746ca6ee4d1?source=friends_link&sk=071e4f81c069650a061f9b0d7637dd82'
  }
];

export default() => (
  <CustomLayout>
    <Row>
      <List
        itemLayout="horizontal"
        dataSource={blogs}
        bordered={true}
        header={<h1>Articles</h1>}
        renderItem={item => (
          <List.Item actions={[<a key="list-loadmore-edit" href={item.url}>view</a>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </Row>
  </CustomLayout>
);