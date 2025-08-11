import '../styles/nav.css';
import Link from 'next/link';

export default function Header() {
    return (
      <div className='main-nav'>
        <div>
            <Link className='nav-item' alt='home' href='/'>HOME</Link>
        </div>
        <div>
            <Link className='nav-item' alt='work' href='/work'>WORK</Link>
        </div>
        {/*
        <div>
            <Link className='nav-item' alt='email' href='mailto:sota.iwaku@gmail.com' target="_blank">EMAIL</Link>
        </div>
        */}
        <div>
            <Link className='nav-item' alt='resume' href='/Sota_Iwaku_Resume.pdf'target="_blank">RESUME</Link>
        </div>
      </div>
    );
  }