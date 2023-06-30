import { Icon } from '@iconify/react';
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
    <Header height={rem(60)} className="px-6">
      <Group>
        <div>Logo</div>
      </Group>
      <Group position="right">
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
      </Group>
    </Header>
  );
};
