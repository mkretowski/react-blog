import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../../redux/postsRedux';
import PageTitle from '../../views/PageTitle/PageTitle';
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
    navigate('/');
  };
  return (
    <Col className='col-md-8 col-12 offset-md-2 text-md-start text-center p-2'>
      <PageTitle>Add Post</PageTitle>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3 col-md-6 col-12' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3 col-md-6 col-12' controlId='author'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3 col-md-6 col-12' controlId='date'>
          <Form.Label>Published</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter date'
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='shortDescription'>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Leave a comment here'
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='mainContent'>
          <Form.Label>Main content</Form.Label>
          <Form.Control
            as='textarea'
            rows={10}
            placeholder='Leave a comment here'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default AddPostForm;
