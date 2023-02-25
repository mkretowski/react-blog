import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import PageTitle from '../../views/PageTitle/PageTitle';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

const PostForm = ({ action, actionText, ...props }) => {
  const categories = useSelector(getAllCategories);
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [category, setCategory] = useState(props.category || categories[0]);
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, category, publishedDate, shortDescription, content });
    }
  };
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <Col className='col-md-8 col-12 offset-md-2 text-md-start text-center p-2'>
      <PageTitle>{actionText}</PageTitle>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className='mb-3 col-md-6 col-12' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register('title', { required: true, minLength: 3 })}
            type='text'
            placeholder='Enter title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <small className='d-block form-text text-danger mt-2'>Title is too short (min is 3)</small>}
        </Form.Group>
        <Form.Group className='mb-3 col-md-6 col-12' controlId='author'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register('author', { required: true, minLength: 3 })}
            type='text'
            placeholder='Enter author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <small className='d-block form-text text-danger mt-2'>Name of author is too short (min is 3)</small>
          )}
        </Form.Group>
        <Form.Group className='mb-3 col-md-6 col-12' controlId='date'>
          <Form.Label>Published</Form.Label>
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
          {dateError && <small className='d-block form-text text-danger mt-2'>Date can't be empty</small>}
        </Form.Group>
        <Form.Group className='mb-3 col-md-6 col-12' controlId='category'>
          <Form.Label>Category</Form.Label>
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3' controlId='shortDescription'>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            {...register('shortDescription', { required: true, minLength: 20 })}
            as='textarea'
            rows={3}
            placeholder='Leave a comment here'
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
          {errors.shortDescription && (
            <small className='d-block form-text text-danger mt-2'>Short description is too short (min is 20)</small>
          )}
        </Form.Group>
        <Form.Group className='mb-3' controlId='mainContent'>
          <Form.Label>Main content</Form.Label>
          <ReactQuill theme='snow' value={content} onChange={setContent} placeholder='Leave a comment here' />
          {contentError && <small className='d-block form-text text-danger mt-2'>Content can't be empty</small>}
        </Form.Group>
        <Button variant='primary' type='submit'>
          {actionText}
        </Button>
      </Form>
    </Col>
  );
};

export default PostForm;
