import styles from './Home.module.scss';
import PageTitle from '../../views/PageTitle/PageTitle';
const Home = () => {
  return (
    <div className={styles.about}>
      <PageTitle>HOME</PageTitle>
      <p>Lorem Ipsum</p>
    </div>
  );
};

export default Home;
