import prisma from '@/app/libs/prismadb';
import { Prisma } from '@prisma/client';

export interface IListingsParams {
    userId?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
}

export default async function getListings(params: IListingsParams) {
    try {
        const {
            userId,
            guestCount,
            roomCount,
            bathroomCount,
            startDate,
            endDate,
            locationValue,
            category,
        } = await params;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const query: any = {};
        if (userId) query.userId = userId;
        if (category) query.category = category;
        if (roomCount) {
            query.roomCount = {
                gte: +roomCount,
            };
        }

        if (guestCount) {
            query.guestCount = {
                gte: +guestCount,
            };
        }

        if (bathroomCount) {
            query.bathroomCount = {
                gte: +bathroomCount,
            };
        }

        if (locationValue) {
            query.locationValue = locationValue;
        }

        if (startDate && endDate) {
            query.NOT = {
                reservations: {
                    some: {
                        // If a single day is reserved/occupied in the date range, we will filter it out.
                        OR: [
                            {
                                endDate: { gte: startDate },
                                startDate: { lte: startDate },
                            },
                            {
                                startDate: { lte: endDate },
                                endDate: { gte: endDate },
                            },
                        ],
                    },
                },
            };
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc',
            },
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const safeListings = listings.map((listing: any) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));

        return safeListings;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }
}
