import React from 'react';
import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
    GiBoatFishing,
    GiCastle,
    GiForestCamp,
    GiIsland,
    GiWindmill,
} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { FaSkiing } from 'react-icons/fa';

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach',
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern',
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!',
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool.',
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island.',
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake.',
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!',
    },
    {
        label: 'Castle',
        icon: GiCastle,
        description: 'This property is in a castle.',
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities.',
    },
];

const Categories = () => {
    const params = useSearchParams();
    const category = params.get('category');

    const pathname = usePathname();

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
