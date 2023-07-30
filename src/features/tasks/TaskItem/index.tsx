'use client';

import React from 'react';
import Card from '@/components/base/Card';
import styles from './TaskItem.module.scss';
import Button from '@/components/base/Button';
import { Icon } from '@iconify/react';

export default function TaskItem() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [isArchived, setIsArchived] = React.useState(false);
  const [dueDate, setDueDate] = React.useState(null);
  const [taskRepeat, setTaskRepeat] = React.useState(null);
  const [reminder, setReminder] = React.useState(null);
  const [importanceLevel, setImportanceLevel] = React.useState(0);
  const [urgencyLevel, setUrgencyLevel] = React.useState(0);
  const [priorityScore, setPriorityScore] = React.useState(0);

  let statusClass = '';
  if (isEditing) {
    statusClass = styles.isEditing;
  } else {
    isCompleted && (statusClass += ` ${styles.isCompleted}`);
    isArchived && (statusClass += ` ${styles.isArchived}`);
  }

  const CHECKBOX = (
    <button
      className={styles.taskItem__checkbox}
      onClick={() => setIsCompleted(!isCompleted)}
    >
      <input
        hidden
        type="checkbox"
        className="w-full h-full"
        checked={isCompleted}
        onChange={() => {}}
      />
      {isCompleted && (
        <Icon
          icon="fluent-emoji-high-contrast:check-mark"
          className={styles.taskItem__checkIcon}
        />
      )}
    </button>
  );

  const TITLE = (
    <span className={styles.taskItem__title}>{`${isCompleted}`}</span>
  );

  const DUE_DATE = (
    <button
      typeof="button"
      className={`
        ${styles.taskItem__actionButton}
      `}
    >
      <span
        className={`
        ${styles.taskItem__dueDate}
        ${styles.default}
      `}
      />
    </button>
  );

  const taskRepeatIcon = 'tabler:refresh';
  const TASK_REPEAT = (
    <button
      typeof="button"
      className={`
        ${styles.taskItem__actionButton}
      `}
    >
      <span
        className={`
        ${styles.taskItem__taskRepeat}
        ${styles.default}
      `}
      />
    </button>
  );
  let reminderIcon = 'fluent:clock-alarm-24-regular';
  const REMINDER = (
    <button
      typeof="button"
      className={`
        ${styles.taskItem__actionButton}
        ${styles.taskItem__reminder}
    `}
    >
      <Icon icon={reminderIcon} className={styles.taskItem__priorityIcon} />
    </button>
  );
  let importanceIcon = 'fluent:bookmark-off-24-regular';
  switch (importanceLevel) {
    case 1:
      importanceIcon = 'fluent:bookmark-24-regular';
      break;
    case 2:
      importanceIcon = 'fluent:bookmark-32-filled';
      break;
    case 3:
      importanceIcon = 'fluent:bookmark-multiple-48-filled';
      break;
  }
  const IMPORTANCE = (
    <button
      typeof="button"
      className={`
      ${styles.taskItem__actionButton}
      ${styles.taskItem__importance}
  `}
    >
      <Icon icon={importanceIcon} className={styles.taskItem__priorityIcon} />
    </button>
  );

  let urgencyIcon = 'fluent:star-off-16-regular';
  switch (urgencyLevel) {
    case 1:
      urgencyIcon = 'fluent:star-20-regular';
      break;
    case 2:
      urgencyIcon = 'fluent:star-28-filled';
      break;
    case 3:
      urgencyIcon = 'fluent:star-emphasis-24-filled';
      break;
  }
  const URGENCY = (
    <button
      typeof="button"
      className={`
      ${styles.taskItem__actionButton}
      ${styles.taskItem__urgency}
  `}
    >
      <Icon icon={urgencyIcon} className={styles.taskItem__urgency} />
    </button>
  );

  const PRIORITY_SCORE = (
    <button
      typeof="button"
      className={`
      ${styles.taskItem__actionButton}
      ${styles.taskItem__priorityScore}
  `}
    >
      <Icon
        icon="tabler:hexagon-number-3"
        className={styles.taskItem__priorityScoreIcon}
        mode="mask"
      />
    </button>
  );

  const ACTION_MENU = (
    <button
      typeof="button"
      className={`
      ${styles.taskItem__actionButton}
      ${styles.taskItem__actionMenu}
  `}
    >
      <Icon icon="fluent:more-vertical-24-filled" />
    </button>
  );
  return (
    <Card
      rootClass={`
        ${styles.taskItem}
        ${statusClass}
      `}
    >
      <div className={styles.taskItem__content}>
        {CHECKBOX}
        {TITLE}
        <div className="flex gap-1">
          {DUE_DATE}
          {TASK_REPEAT}
          {REMINDER}
          {IMPORTANCE}
          {URGENCY}
          {PRIORITY_SCORE}
          {ACTION_MENU}
        </div>
      </div>
    </Card>
  );
}
