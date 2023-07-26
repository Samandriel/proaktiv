import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Card({ children, header, footer }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>{header}</div>
      <div className={styles.cardBody}>{children}</div>
      <div className={styles.cardFooter}>{footer}</div>
    </div>
  );
}
