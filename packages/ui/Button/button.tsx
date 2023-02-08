import { FC } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

const HeadlessButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default HeadlessButton
