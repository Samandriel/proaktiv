import { Navbar, rem } from '@mantine/core';

export const AppLeftSidebar = () => {
  return (
    <Navbar width={{ base: rem(300) }}>
      <Navbar.Section>{}</Navbar.Section>
      <Navbar.Section grow>{}</Navbar.Section>
      <Navbar.Section>{}</Navbar.Section>
    </Navbar>
  );
};
