import React from 'react';
import { Tooltip } from '@mantine/core';

interface BaseTooltipProps {
  children: React.ReactNode;
  label: string;
}

export default function BaseTooltip({ children, label }: BaseTooltipProps) {
  const styles = {
    tooltip: {
      background: 'var(--color-primary)',
      fontSize: '0.75rem',
    },
    arrow: {
      borderColor: 'var(--color-primary)',
    },
  };

  return (
    <Tooltip
      label={label}
      position="bottom"
      withArrow
      arrowPosition="center"
      styles={styles}
    >
      {children}
    </Tooltip>
  );
}
