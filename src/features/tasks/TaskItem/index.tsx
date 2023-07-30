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
      className={`
        ${styles.taskItem__checkbox}
        ${isCompleted && styles.checked}
      `}
      onClick={() => setIsCompleted(!isCompleted)}
    >
      <input
        hidden
        type="checkbox"
        className="w-full h-full"
        checked={isCompleted}
        onChange={() => {}}
      />
      {/* icon="fluent-emoji-high-contrast:check-mark" */}
      <Icon
        icon="fluent:checkmark-16-filled"
        className={styles.taskItem__checkIcon}
      />
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
        ${styles.active}
      `}
      />
    </button>
  );

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
        ${styles.active}
      `}
      />
    </button>
  );

  const REMINDER = (
    <button
      typeof="button"
      className={`
        ${styles.taskItem__actionButton}
    `}
    >
      <span
        className={`
        ${styles.taskItem__reminder}
        ${styles.active}
      `}
      />
    </button>
  );

  const IMPORTANCE = (
    <button
      typeof="button"
      className={`
      ${styles.taskItem__actionButton}
  `}
    >
      <span
        className={`
        ${styles.taskItem__importance}
        ${styles.medium}
      `}
      />
    </button>
  );

  const URGENCY = (
    <button
      typeof="button"
      className={`
      ${styles.taskItem__actionButton}
  `}
    >
      <span
        className={`
        ${styles.taskItem__urgency}
        ${styles.high}
      `}
      />
    </button>
  );

  const PRIORITY_SCORE = (
    <button
      typeof="button"
      className={`
      ${styles.taskItem__actionButton}
  `}
    >
      <span
        className={`
        ${styles.taskItem__priorityScore}
        ${styles.score1}
      `}
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
      <span
        className={`
        ${styles.taskItem__actionMenu}
      `}
      />
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
