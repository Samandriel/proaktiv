import { Icon } from '@iconify/react';
import styles from './styles.module.scss';

import {
  Avatar,
  Group,
  Header,
  Menu,
  UnstyledButton,
  rem,
} from '@mantine/core';

export const AppBar = () => {
  return (
    <Header height={rem(60)} className={styles.appBar}>
      <div className="w-full h-full flex items-center">
        <div className={styles.appBarItems}>
          <h1>ProAktiv</h1>
        </div>
        <div className={styles.appBarItemsEnd}>
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            withinPortal
          >
            {/* onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)} */}
            <Menu.Target>
              <UnstyledButton>
                <Group spacing={7}>
                  <Avatar src={''} alt={''} radius="xl" size={20} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Liked posts</Menu.Item>
              <Menu.Item>Saved posts</Menu.Item>
              <Menu.Item>Your comments</Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item>Account settings</Menu.Item>
              <Menu.Item>Change account</Menu.Item>
              <Menu.Item>Logout</Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item>Pause subscription</Menu.Item>
              <Menu.Item>Delete account</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </Header>
  );
};
