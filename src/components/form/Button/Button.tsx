import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

import { classNames } from '../../../utils';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-md text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed',
  outline: 'rounded-md px-3 py-2 text-sm font-semibold',
};

type ButtonColors = {
  slate: string;
  primary: string;
  blue: string;
  white: string;
  yellow: string;
  black: string;
};

export type VariantType = {
  solid: ButtonColors;
  outline: ButtonColors;
};

const variantStyles: VariantType = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    primary:
      'bg-green-600 text-white hover:text-slate-100 hover:bg-green-700 active:bg-green-800 active:text-green-100 focus-visible:outline-green-600',
    yellow:
      'bg-yellow-400 text-black hover:text-gray-700 hover:bg-yellow-500 active:bg-yellow-800 active:text-yellow-100 focus-visible:outline-yellow-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
    black:
      ' border border-transparent bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    primary:
      'ring-green-200 text-green-700 hover:text-green-900 hover:ring-green-300 active:bg-green-100 active:text-green-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
    blue: 'ring-blue-700 text-white hover:ring-blue-500 active:ring-blue-700 active:text-blue-400 focus-visible:outline-white',
    yellow:
      'ring-yellow-700 text-yellow hover:ring-yellow-500 active:ring-yellow-700 active:text-yellow-400 focus-visible:outline-white',
    black:
      'ring-black text-black hover:ring-white active:bg-white  active:text-black',
  },
};

const btnSizes = {
  sm: 'px-3 py-1',
  normal: 'px-3.5 py-1.5 sm:tex-base',
  lg: 'px-5 py-3 sm:text-base',
};

export type ButtonProps = {
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'blue' | 'slate' | 'yellow' | 'white' | 'black';
  btnSize?: 'sm' | 'normal' | 'lg';
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  variant = 'solid',
  color = 'primary',
  btnSize = 'normal',
  className = '',
  ...props
}: ButtonProps): ReactElement => {
  className = classNames(
    baseStyles[variant],
    btnSizes[btnSize],
    variantStyles[variant][color],
    className
  );

  return <button className={className} {...props} />;
};

export default Button;
