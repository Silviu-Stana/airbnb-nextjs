import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
    GiBarn,
    GiBoatFishing,
    GiCactus,
    GiCastle,
    GiCryptEntrance,
    GiForestCamp,
    GiIsland,
    GiWindmill,
} from 'react-icons/gi';

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
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is in the arctic.',
    },
    {
        label: 'Cave',
        icon: GiCryptEntrance,
        description: 'This property is in a cave.',
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in the desert.',
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in the barn.',
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is luxurious.',
    },
];
