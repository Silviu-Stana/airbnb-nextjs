import { Listing, User } from '../generated/prisma';

export type SafeListing = Omit<Listing, 'createdAt'> & { createdAt: string };

export type SafeUser = Omit<
    User,
    'createdAt' | 'updatedAt' | 'emailVerified'
> & { createdAt: string; updatedAt: string; emailVerified: string | null };
