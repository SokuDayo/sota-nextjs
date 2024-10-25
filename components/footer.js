import '../styles/footer.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbMailFilled } from "react-icons/tb";

export default function Footer() {
    return (
        <div className='footer-container'>
            <a href='https://www.linkedin.com/in/sotaiwaku/' target="_blank">
                <FaLinkedin
                    alt='linkedin'
                    className='footer-img'

                />
            </a>
            <Link href='https://github.com/SokuDayo' target="_blank">
                <FaGithub
                    alt='github'
                    className='footer-img'
                />
            </Link>
            <a href='mailto:sota.iwaku@gmail.com' target="_blank">
                <TbMailFilled
                    alt='mail'
                    className='footer-img'
                />
            </a>
        </div>
    )
}