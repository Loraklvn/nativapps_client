import React from 'react';

const FlightCardSkeleton = (): React.ReactElement => {
  return (
    <div role="status" className="animate-pulse">
      <div className="w-full h-32 bg-gray-300 dark:bg-gray-700 overflow-hidden rounded-lg"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default FlightCardSkeleton;
