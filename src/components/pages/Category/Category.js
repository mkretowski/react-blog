import PageTitle from '../../views/PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import Posts from '../../features/Posts/Posts';
import { Row } from 'react-bootstrap';
import { getPostsByCategory } from '../../../redux/categoriesRedux';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();
  const posts = useSelector((state) => getPostsByCategory(state, category));
  return (
    <>
      <Row className='m-0 p-2'>
        <PageTitle>Category: {category}</PageTitle>
      </Row>
      <Posts posts={posts} />
    </>
  );
};

export default Category;
