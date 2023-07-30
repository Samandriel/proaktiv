import React from 'react';
import { Button } from '@mantine/core';

type BaseButtonProps = React.ComponentPropsWithRef<typeof Button> & {
  children: React.ReactNode;
};

export default function BaseButton(props: BaseButtonProps) {
  const { children, ...inheritedProps } = props;

  return <Button {...inheritedProps}>{children}</Button>;
}
