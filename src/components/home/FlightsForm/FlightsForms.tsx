import { LocationMarkerIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

import { FlightsUrlParams } from '../../../adapters/flights';
import ErrorAlert from '../../../components/common/ErrorAlert/ErrorAlert';
import Button from '../../../components/form/Button';
import InputText from '../../../components/form/InputText';

const locationInputs = [
  { name: 'origin', placeholder: 'Leaving from' },
  { name: 'destination', placeholder: 'Going to' },
];

type FlightsFormsProps = {
  onSubmit: () => void;
  setUrlParams: (params: FlightsUrlParams) => void;
  urlParams: FlightsUrlParams;
  isLoading: boolean;
};

const FlightsForms = ({
  onSubmit,
  setUrlParams,
  urlParams,
  isLoading,
}: FlightsFormsProps): React.ReactElement => {
  const [shouldErrorDisplay, setShouldErrorDisplay] = useState(false);

  const onChangeHandler = (field: string, value: string): void => {
    setUrlParams({
      ...urlParams,
      [field]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!urlParams?.origin?.trim() && !urlParams?.destination?.trim()) {
      setShouldErrorDisplay(true);
    } else {
      setShouldErrorDisplay(false);
      onSubmit();
    }
  };
  return (
    <div className="overflow-hidden bg-white border border-gray-300 sm:rounded-lg px-4 py-6 sm:px-6">
      <h3 className="text-3xl font-semibold leading-7 text-gray-900 text-center mb-2">
        Search for flights
      </h3>

      <div className="border-t border-gray-400 w-[90%] mx-auto mb-4" />

      {shouldErrorDisplay && (
        <ErrorAlert
          onClose={(): void => setShouldErrorDisplay(false)}
          title="One of the fields must be fulfilled"
        />
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          {locationInputs.map(({ name, placeholder }) => (
            <div key={name} className="relative w-1/2">
              <InputText
                name={name}
                inputSize="normal"
                placeholder={placeholder}
                className="pl-10 text-lg sm:text-lg placeholder:text-lg placeholder:text-gray-600"
                onChange={(e): void => onChangeHandler(name, e.target.value)}
              />
              <LocationMarkerIcon className="h-6 w-5 absolute left-4 top-2.5" />
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Button btnSize="lg" className="px-16" disabled={isLoading}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};
export default FlightsForms;
