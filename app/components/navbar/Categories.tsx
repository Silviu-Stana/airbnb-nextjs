'use client';
import React, { useEffect } from 'react';
import Container from '../Container';
import CategoryBox from '../CategoryBox';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { categories } from '@/app/constants/categories';

const Categories = () => {
    const params = useSearchParams();
    const category = params.get('category');

    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        router.prefetch('/?category=Beach');
        router.prefetch('/?category=Windmills');
        router.prefetch('/?category=Modern');
        router.prefetch('/?category=Camping');
        router.prefetch('/?category=Arctic');
    }, [router]);

    const isMainPage = pathname === '/';
    if (!isMainPage) return null;

    return (
        <Container>
            <div
                className="pt-4 flex flex-row items-center justify-around
                overflow-x-auto"
            >
                {categories.map((item) => {
                    return (
                        <CategoryBox
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            selected={category === item.label}
                        />
                    );
                })}
            </div>
        </Container>
    );
};

export default Categories;
