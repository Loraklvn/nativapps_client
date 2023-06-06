import { ReservationDetails } from '../../types/reservation';
import { getDateTimeHHMM } from '../../utils';

export const getModalReservationContent = (
  reservation: ReservationDetails | undefined
): React.ReactElement => {
  if (!reservation) {
    return <></>;
  }
  return (
    <>
      <p className="text-sm text-gray-700">
        Your reservation is from{' '}
        <span className="font-bold">{reservation.flight.origin}</span> to{' '}
        <span className="font-bold">{reservation.flight.destination}</span>
      </p>
      <p className="text-sm font-bold text-gray-700">
        {getDateTimeHHMM(reservation.flight.departure_time)} -{' '}
        {getDateTimeHHMM(reservation.flight.arrival_time)}
      </p>
      <p className="text-sm font-bold text-gray-700">
        ${reservation.flight.price}
      </p>
    </>
  );
};
