import React, { useEffect, useState } from 'react';

import { getFlights } from '../../adapters/flights';
import Container from '../../components/common/Container';
import FlightCard from '../../components/home/FlightCard';
import FlightsForms from '../../components/home/FlightsForm';
import { Flight } from '../../types/flight';

const Home = (): React.ReactElement => {
  const [flights, setFlights] = useState<Flight[]>([]);

  const handleGetFlights = async (): Promise<void> => {
    try {
      const {
        data: { data },
      } = await getFlights({});

      // eslint-disable-next-line no-console
      console.log(data);
      setFlights(data.flights);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error });
    }
  };

  useEffect(() => {
    handleGetFlights();
  }, []);

  return (
    <Container>
      <div className="mx-auto pt-14">
        <FlightsForms />
      </div>
      <div className="mt-10 flex flex-col gap-10 max-w-2xl mx-auto">
        {flights.map((flight) => (
          <FlightCard key={flight.id} {...flight} />
        ))}
      </div>
    </Container>
  );
};
export default Home;
