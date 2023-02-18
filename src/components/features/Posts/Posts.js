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
      <Row className='justify-content-between m-0 gap={3}'>
        {posts.map((post) => (
          <Col className='p-2 col-md-4 col-12'>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Card.Text>{post.publishedDate}</Card.Text>
                <Card.Text>{post.author}</Card.Text>
                <Link key={post.id} to={'/post/' + post.id}>
                  <Button variant='primary'>Go somewhere</Button>
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
