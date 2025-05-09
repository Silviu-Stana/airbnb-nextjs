'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRentModal from '@/app/hooks/useRentModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);
    const rentModal = useRentModal();
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const onRent = useCallback(() => {
        if (!currentUser) return loginModal.onOpen();

        //Open Rent Modal
        rentModal.onOpen();
    }, [currentUser, loginModal, rentModal]);

    useEffect(() => {
        router.prefetch('/trips'); // manually prefetch the route
        router.prefetch('/reservations');
        router.prefetch('/properties');
        router.prefetch('/favorites');
    }, [router]);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={onRent}
                    className="hidden md:block text-sm font-semibold
                py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                >
                    Rent your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px]
                border-neutral-200 flex flex-row items-center gap-3 rounded-full
                cursor-pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="absolute rounded-xl shadow-md bg-white overflow-hidden
             w-[40vw] md:w-3/4 right-0 top-12 text-sm"
                >
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem
                                    onClick={() => router.push('/trips')}
                                    label="My trips"
                                />
                                <MenuItem
                                    onClick={() => router.push('/favorites')}
                                    label="My favorites"
                                />
                                <MenuItem
                                    onClick={() => router.push('/reservations')}
                                    label="My reservations"
                                />
                                <MenuItem
                                    onClick={() => router.push('/properties')}
                                    label="My properties"
                                />
                                <MenuItem
                                    bold
                                    onClick={rentModal.onOpen}
                                    label="Rent my home"
                                />
                                <hr />
                                <MenuItem
                                    onClick={() => signOut()}
                                    label="Log out"
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label="Login"
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label="Signup"
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
