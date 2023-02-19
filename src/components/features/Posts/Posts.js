import PageTitle from '../../views/PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Posts = () => {
  const posts = useSelector(getAllPosts);
  return (
    <>
      <Row className='m-0 p-2'>
        <Col className='col-md-3 text-start p-0'>
          <PageTitle>All posts</PageTitle>
        </Col>
        <Col className='col-md-2 offset-md-7 text-end p-0'>
          <Link to='/post/add'>
            <Button variant='outline-info'>Add Post</Button>
          </Link>
        </Col>
      </Row>
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
                <Card.Text>
                  <strong>Published: </strong>
                  {post.publishedDate}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Link key={post.id} to={'/post/' + post.id}>
                  <Button variant='primary'>Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Posts;
