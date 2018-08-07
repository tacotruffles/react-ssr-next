import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
    return (
        <div style={{ fontSize: '20px', color: 'blue' }}>
            <h1>About</h1>
            <Link href="/">
                <button style={{ display: "block", margin: "10px 0" }}>Back</button>
            </Link>
            <Image />
            <p>I was a pile of clay once</p>
        </div>
    );
}

export default About;