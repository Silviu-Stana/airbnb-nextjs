import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import ClientOnly from './components/ClientOnly';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import LoginModal from './components/modals/LoginModal';

const font = Nunito({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Airbnb',
    description: 'Airbnb app made with next.js',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const currentUser = await getCurrentUser();

    return (
        <html lang="en">
            <body className={`${font.className} antialiased`}>
                <ClientOnly>
                    <ToasterProvider />
                    <LoginModal />
                    <RegisterModal />
                    <Navbar currentUser={currentUser} />
                </ClientOnly>
                {children}
            </body>
        </html>
    );
}
