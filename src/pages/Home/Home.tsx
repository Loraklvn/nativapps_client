import React, { useEffect, useState } from 'react';

import { FlightsUrlParams, getFlights } from '../../adapters/flights';
import Container from '../../components/common/Container';
import Pagination from '../../components/common/Pagination';
import FlightCard from '../../components/home/FlightCard';
import ProductCardSkeleton from '../../components/home/FlightCardSkeleton';
import FlightsForms from '../../components/home/FlightsForm';
import { FlightData } from '../../types/flight';

const defaultState = {
  total: 0,
  pageSize: 0,
  currentPage: 0,
  totalPages: 0,
  flights: [],
};

const Home = (): React.ReactElement => {
  const [flightData, setFlightData] = useState<FlightData>(defaultState);
  const [isLoading, setIsLoading] = useState(true);
  const [urlParams, setUrlParams] = useState<FlightsUrlParams>({});
  const flights = flightData?.flights || [];

  const handleGetFlights = async (
    params: FlightsUrlParams = {}
  ): Promise<void> => {
    try {
      setIsLoading(true);
      const {
        data: { data },
      } = await getFlights({ ...urlParams, ...params });

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

  const handlePagination = ({ page }: { page: number }): void => {
    setUrlParams((prev) => ({ ...prev, page }));
    handleGetFlights({ page });
    window.scroll({ behavior: 'smooth', top: 0 });
  };

  const placeholderProducts = Array.from(Array(4).keys());

  return (
    <Container>
      <div className="mx-auto pt-14">
        <FlightsForms
          onSubmit={handleGetFlights}
          setUrlParams={setUrlParams}
          urlParams={urlParams}
          isLoading={isLoading}
        />
      </div>
      <div className="mt-10 flex flex-col gap-10 max-w-2xl mx-auto">
        {!isLoading
          ? flights.map((flight) => <FlightCard key={flight.id} {...flight} />)
          : placeholderProducts.map((key) => <ProductCardSkeleton key={key} />)}
      </div>
      <div className="mt-10 text-center">
        {flightData.flights.length ? (
          <Pagination
            defaultPage={1}
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
