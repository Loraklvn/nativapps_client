import Button from '../../..//components/form/Button';
import airplanePhoto from '../../../assets/airplane.png';
import { Flight } from '../../../types/flight';
import { getDateTimeHHMM } from '../../../utils';

type FlightCardProps = Flight & { onBook: () => void };

export default function FlightCard({
  origin,
  destination,
  price,
  departure_time: departureTime,
  arrival_time: arrivalTime,
  onBook,
}: FlightCardProps): React.ReactElement {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="flex items-center justify-between border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="flex items-center gap-x-4">
          <img
            src={airplanePhoto}
            alt="{client.name}"
            className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
          />
          <div>
            <h3 className="text- font-bold leading-6 text-gray-900">
              {getDateTimeHHMM(departureTime)} - {getDateTimeHHMM(arrivalTime)}
            </h3>
            <h3 className="text-sm font-medium leading-6 text-gray-900">
              {origin} - {destination}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">${price}</h3>
          <Button onClick={onBook} variant="outline" color="white">
            Book
          </Button>
        </div>
      </div>
    </div>
  );
}
