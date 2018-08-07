import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Hello from SSR.</h1>
        <Link href="/about">About</Link>
    </div>
);

export default Index;