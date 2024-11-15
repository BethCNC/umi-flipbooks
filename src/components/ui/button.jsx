import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#86BABF] text-[#435D60] hover:bg-[#597C7F] hover:text-[#E7F1F2]',
        secondary: 'bg-[#0F172A] text-[#F8FAFC] hover:bg-[#64748B] hover:text-[#E2E8F0]',
        destructive: 'bg-[#D38D8D] text-[#8A1717] hover:bg-[#C46767] hover:text-[#6F1212]',
        tertiary: 'bg-[#F7F0E8] text-[#030303] hover:bg-[#D7D1CA]',
        outline: 'border border-[#5F5D59] text-[#030303] hover:bg-[#FAFAF9]',
        ghost: 'text-[#030303] hover:bg-[#FAFAF9]/30',
        link: 'text-[#030303] underline-offset-4 hover:underline',
        loading: 'bg-[#E7E5E4] text-[#78716C] cursor-not-allowed'
      },
      size: {
        default: 'h-10 px-16 py-2',
        sm: 'h-8 px-6 py-2 text-sm',
        lg: 'h-11 px-16 py-2 text-lg',
        icon: 'h-8 w-8 p-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    },
    compoundVariants: [
      {
        variant: ['default', 'secondary', 'destructive'],
        className: 'font-neulis-sans'
      },
      {
        variant: ['tertiary', 'outline', 'ghost', 'link'],
        className: 'font-neulis-cursive'
      }
    ]
  }
);

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  asChild = false,
  showLeadIcon = false,
  showTrailIcon = false,
  children,
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, className }),
        'min-w-[16px]',
        {
          'gap-2': size === 'sm',
          'gap-4': size === 'default' || size === 'lg',
        }
      )}
      ref={ref}
      {...props}
    >
      {showLeadIcon && (
        <ChevronRight className={cn(
          'shrink-0',
          size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'
        )} />
      )}
      <span className="text-center leading-[20px] sm:leading-[24px]">{children}</span>
      {showTrailIcon && (
        <ChevronRight className={cn(
          'shrink-0',
          size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'
        )} />
      )}
    </Comp>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants }; 