import { LocationMarkerIcon } from '@heroicons/react/solid';
import React, { useState, useEffect } from 'react';

import { ReservationDetails } from '../..//types/reservation';
import { getReservations } from '../../adapters/reservation';
import Container from '../../components/common/Container';
import { getDateTimeHHMM } from '../../utils';

const Reservations = (): React.ReactElement => {
  const [reservations, setReservations] = useState<ReservationDetails[]>([]);

  useEffect(() => {
    const handleGetReservations = async (): Promise<void> => {
      try {
        const {
          data: {
            data: { reservations },
          },
        } = await getReservations();
        setReservations(reservations);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log({ error });
      }
    };

    handleGetReservations();
  }, []);

  return (
    <Container>
      <ul role="list" className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10">
        {reservations.map(
          ({ flight_id: id, created_at: bookedDate, flight }) => (
            <li
              key={id}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white border border-gray-300"
            >
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex flex-col-reverse md:flex-row md:items-center items-start space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {getDateTimeHHMM(flight.departure_time)} -{' '}
                      {getDateTimeHHMM(flight.arrival_time)}
                    </h3>
                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {flight.origin} - {flight.destination}
                    </span>
                  </div>
                  <p className="mt-1 font-medium  text-sm text-gray-700">
                    Booked: {new Date(bookedDate).toLocaleString()}
                  </p>
                </div>
                <h3 className="text-2xl font-bold">${flight.price}</h3>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      <LocationMarkerIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {flight.origin}
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      <LocationMarkerIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {flight.destination}
                    </a>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </Container>
  );
};
export default Reservations;
