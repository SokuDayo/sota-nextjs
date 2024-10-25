import '../styles/homepage.css';
import Swiper from '../components/carousel.js'

export default function Home() {
  return (
    <div className='index'>
      <div className='hero-container'>
        <h1>Sota Iwaku</h1>
        <p>Web Developer</p>
      </div>
      <div className='about-container'>
          <h2>Hello! I&apos;m a programmer, (pro)gamer and a pro-cat lover.</h2>
      </div>
      <Swiper />
    </div>
  );
}
