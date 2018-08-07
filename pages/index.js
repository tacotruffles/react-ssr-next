import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Hello from SSR.</h1>
        <Link href="/about">
            <button>About</button>
        </Link>
        <Link href="/robots">
            <button>Robots</button>
        </Link>
    </div>
);

export default Index;