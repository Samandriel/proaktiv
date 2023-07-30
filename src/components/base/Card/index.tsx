import React from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  rootClass?: string;
}

export default function Card({
  children,
  header,
  footer,
  rootClass,
}: CardProps) {
  return (
    <div className={`${styles.card} ${rootClass}`}>
      <div className={styles.cardHeader}>{header}</div>
      <div className={styles.cardBody}>{children}</div>
      <div className={styles.cardFooter}>{footer}</div>
    </div>
  );
}
