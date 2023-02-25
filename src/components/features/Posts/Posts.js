import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { dateToStr } from '../../../utils/dateToStr';

const Posts = ({ posts, ...props }) => {
  if (posts.length === 0) return <Col className='text-center'>No posts to show...</Col>;
  return (
    <>
      <Row className='p-2'>
        {posts.map((post) => (
          <Col key={post.id} className='col-md-4 col-12 pt-2 pb-2'>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className='m-0'>
                  <strong>Author: </strong>
                  {post.author}
                </Card.Text>
                <Card.Text className='m-0'>
                  <strong>Published: </strong>
                  {dateToStr(post.publishedDate)}
                </Card.Text>
                <Card.Text>
                  <strong>Category: </strong>
                  {post.category}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Button variant='primary' as={Link} to={'/post/' + post.id}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Posts;
