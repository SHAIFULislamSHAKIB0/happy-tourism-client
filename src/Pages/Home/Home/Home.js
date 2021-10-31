import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Contact from '../../Contact/Contact';
import PopularDestination from '../../PopularDestination/PopularDestination';
import RecentTrip from '../../RecentTrips/RecentTrip';
import Banner from '../Banner/Banner'
import Places from '../Places/Places';

const Home = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <RecentTrip></RecentTrip>
            <PopularDestination></PopularDestination>
            <Contact></Contact>
        </div>
    );
};

export default Home;