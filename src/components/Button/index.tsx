import React from "react";
import { Button as BButton } from "react-bootstrap";

type Props = {
  children: React.ReactNode | string;
  variant?: "dark" | "light";
  className?: any;
  size?: "sm" | "lg" | "md" | any;
  active?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { children, className, size, active, variant, onClick } = props;

  return (
    <BButton
      size={size}
      active={active}
      className={className}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </BButton>
  );
};

export default Button;
