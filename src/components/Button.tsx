import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from '../lib/utils'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    bgColor: string;
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({children, bgColor, className, ...props}:
  ButtonProps, ref) {
  return (
    <button
      ref={ref}
      className={
        cn(
        'px-4 py-2 mt-10  bg-transparent border-2 border-gray-200 shadow-xl rounded bg-opacity-15',
        'focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
        className
        )
      }
      {...props}
      >
      <span className="brightness-50 font-bold" style={{color: bgColor}}>{children}</span>
    </button>
  )
})

export default Button;