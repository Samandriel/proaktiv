import { v4 as uuid } from 'uuid';
import { Icon } from '@iconify/react';
import styles from './AppBar.module.scss';
import './AppBar.scss';
import {
  ActionIcon,
  Avatar,
  Group,
  Header,
  Indicator,
  Menu,
  TextInput,
  UnstyledButton,
  rem,
} from '@mantine/core';

const userMenuItems: {
  id: string;
  type: 'menu' | 'divider';
  [key: string]: string;
}[] = [
  {
    id: uuid(),
    type: 'menu',
    label: 'preferences',
    icon: 'tabler:settings',
    link: '',
  },
  { id: uuid(), type: 'divider' },
  {
    id: uuid(),
    type: 'menu',
    label: 'logout',
    icon: 'tabler:logout',
    link: '',
  },
];

export const AppBar = () => {
  const userMenuItemsElements = userMenuItems.map((item) => {
    if (item.type === 'divider') {
      return <Menu.Divider key={item.id} />;
    }
    return (
      <Menu.Item key={item.id}>
        <Icon icon={item.icon} />
        {item.label}
      </Menu.Item>
    );
  });

  return (
    <Header height={rem(64)} className={styles.appBar} unstyled>
      <div className="w-full h-full flex items-center">
        <div className={styles.appBarItems}>
          <h1>ProAktiv</h1>
        </div>
        <div className={styles.appBarItemsEnd}>
          <TextInput
            icon={<Icon icon="tabler:search" />}
            radius="xl"
            size="md"
            rightSection={
              <ActionIcon size={32} radius="xl" variant="filled">
                <Icon icon="tabler:arrow-right" />
              </ActionIcon>
            }
            placeholder="Search"
            rightSectionWidth={42}
          />
          <Indicator
            inline
            size={16}
            offset={7}
            position="top-end"
            color="red"
            withBorder
          >
            <Avatar radius="xl" className="app-bar__icon-button">
              <Icon icon="tabler:bell" className={styles.appBarIconButton} />
            </Avatar>
          </Indicator>
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton>
                <Group spacing={7}>
                  <Avatar radius="xl" className="app-bar__icon-button">
                    <Icon icon="tabler:user" />
                  </Avatar>
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{userMenuItemsElements}</Menu.Dropdown>
          </Menu>
          <Avatar radius="xl" className="app-bar__icon-button">
            <Icon icon="tabler:moon" />
          </Avatar>
        </div>
      </div>
    </Header>
  );
};
