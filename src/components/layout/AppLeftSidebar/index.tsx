import { Icon } from '@iconify/react';
import { Navbar, rem } from '@mantine/core';
import Link from 'next/link';
import styles from './styles.module.css';

const menuItems = [
  { label: 'Home', icon: 'bx:bx-home', link: '/' },
  { label: 'Trackers', icon: 'bx:bx-bar-chart-alt-2', link: '/trackers' },
  { label: 'Todo', icon: 'bx:bx-list-check', link: '/todos' },
  { label: 'Notes', icon: 'bx:bx-notepad', link: '/notes' },
  { label: 'Toolbox', icon: 'bx:bx-wrench', link: '/toolbox' },
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

  return (
    <Navbar width={{ base: rem(300) }} className={styles.appLeftSidebar}>
      <Navbar.Section>{}</Navbar.Section>
      <Navbar.Section grow>{menuList}</Navbar.Section>
      <Navbar.Section>{}</Navbar.Section>
    </Navbar>
  );
};
