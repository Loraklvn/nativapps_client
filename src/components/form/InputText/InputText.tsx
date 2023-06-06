import React, { InputHTMLAttributes } from 'react';

import { classNames } from '../../../utils';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'sm' | 'normal' | 'lg';
}

const sizes = {
  sm: 'py-1',
  normal: 'py-2',
  lg: 'py-3',
};

const InputText = ({
  inputSize = 'normal',
  className = '',
  ...props
}: InputTextProps): React.ReactElement => {
  const classes = classNames(
    'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm',
    sizes[inputSize],
    className
  );

  return <input type="text" className={classes} {...props} />;
};
export default InputText;
