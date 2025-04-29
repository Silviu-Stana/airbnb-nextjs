import getCurrentUser from '@/app/actions/getCurrentUser';
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';

interface IParams {
    reservationId?: string;
}

export async function DELETE(
    request: Request,
    { params }: { params: IParams }
) {
    const currentUser = await getCurrentUser();
    if (!currentUser) return NextResponse.error();

    const { reservationId } = await params;
    if (!reservationId || typeof reservationId !== 'string') {
        throw new Error('Invalid id');
    }

    const reservation = await prisma.reservation.delete({
        where: {
            id: reservationId,
            //Meaning: only the creator of the listing, or the creator of the reservation can delete it
            OR: [
                { userId: currentUser.id },
                { listing: { userId: currentUser.id } },
            ],
        },
    });

    return NextResponse.json(reservation);
}
