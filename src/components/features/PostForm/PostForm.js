import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import PageTitle from '../../views/PageTitle/PageTitle';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const handleSubmit = () => {
    action({ title, author, publishedDate, shortDescription, content });
  };
  return (
    <Col className='col-md-8 col-12 offset-md-2 text-md-start text-center p-2'>
      <PageTitle>{actionText}</PageTitle>
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
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
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
          <ReactQuill theme='snow' value={content} onChange={setContent} placeholder='Leave a comment here' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          {actionText}
        </Button>
      </Form>
    </Col>
  );
};

export default PostForm;
