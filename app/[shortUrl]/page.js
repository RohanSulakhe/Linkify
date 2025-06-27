import { redirect } from 'next/navigation';
import clientPromise from '@/lib/mongodb';

export default async function Page({ params }) {
    const shortUrl = params.shortUrl;
    const client = await clientPromise;
    const db = client.db('Linkify');
    const collection = db.collection('url');

    const doc = await collection.findOne({ shortUrl });

    if (doc) {
        const targetUrl = doc.url.startsWith('http') ? doc.url : `https://${doc.url}`;
        console.log("Redirecting to:", targetUrl);
        redirect(targetUrl);
    } else {
        redirect(`${process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'}`);
    }

    return <div>Redirecting...</div>;
}
