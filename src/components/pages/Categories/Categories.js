import PageTitle from '../../views/PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { Col, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesRedux';
const Categories = () => {
  const categories = useSelector(getAllCategories);
  return (
    <Col className='p-2 '>
      <PageTitle>All categories</PageTitle>
      <ButtonGroup vertical className='col-md-6 offset-md-3 col-12 my-4'>
        {categories.map((category) => (
          <Button key={category} variant='outline-secondary' as={Link} to={'/category/' + category}>
            {category}
          </Button>
        ))}
      </ButtonGroup>
    </Col>
  );
};

export default Categories;
