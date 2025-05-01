import React from 'react';
import { SafeListing, SafeUser } from '../types';
import Container from '../components/Container';
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';

interface FavoritesClientProps {
    currentUser?: SafeUser | null;
    listings: SafeListing[];
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    currentUser,
    listings,
}) => {
    return (
        <Container>
            <div className="mx-5">
                <Heading
                    title="Favorites"
                    subtitle="List of places you have favorited"
                />
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {listings.map((listing: any) => {
                        return (
                            <ListingCard
                                key={listing.id}
                                data={listing}
                                currentUser={currentUser}
                            />
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default FavoritesClient;
