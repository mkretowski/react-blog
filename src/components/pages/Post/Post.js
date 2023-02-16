import styles from './Post.module.scss';
import PageTitle from '../../views/PageTitle/PageTitle';
const Post = () => {
  return (
    <div className={styles.about}>
      <PageTitle>POST</PageTitle>
      <p>Lorem Ipsum</p>
    </div>
  );
};

export default Post;
