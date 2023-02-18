import styles from './SinglePost.module.scss';
import PageTitle from '../../views/PageTitle/PageTitle';
const SinglePost = () => {
  return (
    <div className={styles.about}>
      <PageTitle>POST</PageTitle>
      <p>Lorem Ipsum</p>
    </div>
  );
};

export default SinglePost;
