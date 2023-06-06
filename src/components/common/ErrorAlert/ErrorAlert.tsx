import { XCircleIcon } from '@heroicons/react/solid';
import React from 'react';

type ErrorAlertProps = {
  title: string;
  onClose: () => void;
};

const ErrorAlert = ({
  title,
  onClose,
}: ErrorAlertProps): React.ReactElement => {
  return (
    <div className="rounded-md bg-red-50 p-4 my-3">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon
            onClick={onClose}
            className="h-5 w-5 cursor-pointer text-red-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
        </div>
      </div>
    </div>
  );
};
export default ErrorAlert;
