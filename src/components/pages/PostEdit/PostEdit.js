import PostForm from '../../features/PostForm/PostForm';
import { useParams, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { editPost } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';
const PostEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const postId = id;
  const postData = useSelector((state) => getPostById(state, postId));
  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };
  if (!postData) return <Navigate to='/' />;
  return <PostForm action={handleSubmit} actionText='Edit Post' {...postData} />;
};

export default PostEdit;
