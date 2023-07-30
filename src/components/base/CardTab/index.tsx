'use client';

import { ReactNode, useState } from 'react';
import styles from './CardTab.module.scss';

type BaseCardTabProps = {
  tabFullWidth?: boolean;
  tabData?: {
    id: string;
    label: string;
    content: ReactNode;
    icon?: string;
  }[];
};

export default function BaseCardTab({
  tabFullWidth,
  tabData,
}: BaseCardTabProps) {
  const [selectedTab, setSelectedTab] = useState('stats');

  const cardTab = (
    <ul className={styles.cardTab} id="fullWidthTab" role="tablist">
      {tabData?.map((tab) => (
        <li
          className={`
            ${tabFullWidth && 'w-full'}
            ${styles.cardTabButtonWrapper}
          `}
          key={tab.id}
        >
          <button
            type="button"
            role="tab"
            aria-controls={`${tab.id}-tab`}
            aria-selected={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`
              ${styles.cardTabButton}
              ${selectedTab === tab.id && styles.cardTabButtonActive}  
            `}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );

  const cardTabContent = (
    <div className={styles.cardBody}>
      {tabData?.map((tab) => (
        <div
          id={tab.id}
          key={tab.id}
          role="tabpanel"
          aria-labelledby={`${tab.id}-tab`}
          className={`
            ${styles.cardTabContent}
            ${selectedTab !== tab.id ? 'hidden' : ''}
          `}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.card}>
      {cardTab}
      {cardTabContent}
    </div>
  );
}

BaseCardTab.defaultProps = {
  tabFullWidth: true,
};
