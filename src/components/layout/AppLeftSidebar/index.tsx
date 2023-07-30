import { v4 as uuid } from 'uuid';
import { Icon } from '@iconify/react';
import { Avatar, Menu, Navbar, UnstyledButton, rem } from '@mantine/core';
import Link from 'next/link';
import styles from './AppLeftSidebar.module.scss';

const menuItems = [
  { label: 'Home', icon: 'bx:bx-home', link: '/app' },
  { label: 'Trackers', icon: 'bx:bx-bar-chart-alt-2', link: '/app/trackers' },
  { label: 'Tasks', icon: 'bx:bx-list-check', link: '/app/tasks' },
  { label: 'Notes', icon: 'bx:bx-notepad', link: '/app/notes' },
  { label: 'Toolbox', icon: 'bx:bx-wrench', link: '/app/toolbox' },
];
const userMenuItems: {
  id: string;
  type: 'menu' | 'divider';
  [key: string]: string;
}[] = [
  {
    id: uuid(),
    type: 'menu',
    label: 'Support',
    icon: 'tabler:headphones',
    link: '',
  },
  {
    id: uuid(),
    type: 'menu',
    label: 'Feedback',
    icon: 'tabler:request-quote',
    link: '',
  },
];

export const AppLeftSidebar = () => {
  const menuList = menuItems.map((item) => {
    return (
      <Link
        href={item.link}
        key={item.label}
        className={styles.appLeftSidebarMenuItem}
      >
        <Icon
          className={styles.appLeftSidebarMenuItemIcon}
          icon={item.icon}
          width={rem(24)}
          height={rem(24)}
        />
        <span>{item.label}</span>
      </Link>
    );
  });

  const userMenuList = userMenuItems.map((item) => {
    return (
      <Link
        href={item.link}
        key={item.id}
        className={styles.appLeftSidebarMenuItem}
      >
        <Icon className={styles.appLeftSidebarMenuItemIcon} icon={item.icon} />
        <span>{item.label}</span>
      </Link>
    );
  });

  return (
    <Navbar width={{ base: rem(256) }} className={styles.appLeftSidebar}>
      <Navbar.Section>{}</Navbar.Section>
      <Navbar.Section grow>{menuList}</Navbar.Section>
      <Navbar.Section className={styles.menuFooter}>
        {userMenuList}
      </Navbar.Section>
    </Navbar>
  );
};
