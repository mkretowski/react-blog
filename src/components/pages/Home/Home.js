import Posts from '../../features/Posts/Posts';
import { Button, Row, Col } from 'react-bootstrap';
import PageTitle from '../../views/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
const Home = () => {
  const posts = useSelector(getAllPosts);
  return (
    <>
      <Row className='m-0 p-2'>
        <PageTitle>All posts</PageTitle>
        <Col className='col-md-2 offset-md-7 text-end p-0'>
          <Button variant='outline-info' as={Link} to='/post/add'>
            Add Post
          </Button>
        </Col>
      </Row>
      <Posts posts={posts} />
    </>
  );
};

export default Home;
