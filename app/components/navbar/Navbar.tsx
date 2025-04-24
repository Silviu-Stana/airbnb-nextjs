'use client';
import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import { SafeUser } from '@/app/types';
import UserMenu from './UserMenu';
import Categories from './Categories';

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <div
                    className="max-w-[2520px] mx-auto
                        xl:px-20 md:px-10 sm:px-2 px-4"
                >
                    <Container>
                        <div className=" flex flex-row items-center justify-between gap-3 md:gap-0">
                            <Logo />
                            <Search />
                            <UserMenu currentUser={currentUser} />
                        </div>
                    </Container>
                </div>
                <Categories />
            </div>
        </div>
    );
};

export default Navbar;
