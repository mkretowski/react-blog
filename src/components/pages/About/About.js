import styles from './About.module.scss';
import PageTitle from '../../views/PageTitle/PageTitle';
const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>ABOUT</PageTitle>
      <p>Lorem Ipsum</p>
    </div>
  );
};

export default About;
