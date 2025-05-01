import getCurrentUser from './actions/getCurrentUser';
import getListings from './actions/getListings';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import ListingCard from './components/listings/ListingCard';

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

interface HomeProps {
    searchParameters: IListingsParams;
}

const Home = async ({ searchParameters }: HomeProps) => {
    const listings = await getListings(searchParameters);
    const currentUser = await getCurrentUser();

    if (listings.length === 0)
        return (
            <ClientOnly>
                <EmptyState showReset />
            </ClientOnly>
        );

    return (
        <ClientOnly>
            <Container>
                <div className="pt-24 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {listings.map((listing: any) => {
                        return (
                            <ListingCard
                                currentUser={currentUser}
                                key={listing.id}
                                data={listing}
                            />
                        );
                    })}
                </div>
            </Container>
        </ClientOnly>
    );
};

export default Home;
