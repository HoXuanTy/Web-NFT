import React ,{ FC }  from 'react'

interface ButtonProps {
  onClick?: () => void;
  children: string;
  className?: string;
}

const ButtonProps:FC<ButtonProps> =({onClick, children,className }) => {
  return (
    <div onClick={onClick} className={className}>{children}</div>
  )
}

export default ButtonProps