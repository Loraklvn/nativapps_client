import React, { useEffect, useState } from 'react';

import { FlightsUrlParams, getFlights } from '../../adapters/flights';
import { bookReservation } from '../../adapters/reservation';
import Container from '../../components/common/Container';
import Modal from '../../components/common/Modal';
import Pagination from '../../components/common/Pagination';
import FlightCard from '../../components/home/FlightCard';
import ProductCardSkeleton from '../../components/home/FlightCardSkeleton';
import FlightsForms from '../../components/home/FlightsForm';
import { FlightData } from '../../types/flight';
import { ReservationDetails } from '../../types/reservation';

import { getModalReservationContent } from './utils';

const defaultState = {
  total: 0,
  pageSize: 0,
  currentPage: 0,
  totalPages: 0,
  flights: [],
};

const Home = (): React.ReactElement => {
  const [flightData, setFlightData] = useState<FlightData>(defaultState);
  const [urlParams, setUrlParams] = useState<FlightsUrlParams>({});
  const [bookedRservation, setBookedReservation] = useState<
    ReservationDetails | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const flights = flightData?.flights || [];

  const handleGetFlights = async (page = 1): Promise<void> => {
    setIsLoading(true);
    setActivePage(page);
    try {
      const {
        data: { data },
      } = await getFlights({ ...urlParams, page });

      // eslint-disable-next-line no-console
      console.log(data);
      setFlightData(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetFlights();
  }, []);

  const handleBookFlight = async (flightId: number): Promise<void> => {
    try {
      setIsBooking(true);
      const {
        data: { data },
      } = await bookReservation(flightId);
      setBookedReservation(data);
      setIsModalOpen(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error });
    } finally {
      setIsBooking(false);
    }
  };

  const handlePagination = ({ page }: { page: number }): void => {
    handleGetFlights(page);
    window.scroll({ behavior: 'smooth', top: 0 });
  };

  const placeholderProducts = Array.from(Array(4).keys());

  const handleOnClose = (): void => {
    setIsModalOpen(false);
    setBookedReservation(undefined);
  };

  return (
    <Container>
      <div className="mx-auto pt-14">
        <Modal
          show={isModalOpen}
          onClose={handleOnClose}
          title="Flight booked successfully"
          content={getModalReservationContent(bookedRservation)}
        />
        <FlightsForms
          onSubmit={handleGetFlights}
          setUrlParams={setUrlParams}
          urlParams={urlParams}
          isLoading={isLoading}
        />
      </div>
      <div className="mt-10 flex flex-col gap-10 max-w-2xl mx-auto">
        {!isLoading
          ? flights.map((flight) => (
              <FlightCard
                key={flight.id}
                isLoading={isBooking}
                onBook={(): Promise<void> => handleBookFlight(flight.id)}
                {...flight}
              />
            ))
          : placeholderProducts.map((key) => <ProductCardSkeleton key={key} />)}
      </div>
      <div className="mt-10 text-center">
        {flightData.flights.length ? (
          <Pagination
            defaultPage={activePage}
            itemsPerPage={flightData.pageSize}
            totalItems={flightData.total}
            loading={isLoading}
            paginate={handlePagination}
          />
        ) : null}
      </div>
    </Container>
  );
};
export default Home;
