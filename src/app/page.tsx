'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Button, List, ThemeIcon } from '@mantine/core';
import styles from './styles.module.css';

const heroImage = '/hero.svg';

export default function HomePage() {
  const router = useRouter();
  const handleHeroButtonClick = () => router.push('/user/auth');

  return (
    <main>
      <div className="container mx-auto">
        <div className={styles.heroWrapper}>
          <div className={styles.heroTextWrapper}>
            <h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a quibusdam, voluptatum, quod, quia voluptatem voluptates quos
              doloribus quae voluptate quidem. Quisquam a quibusdam, voluptatum,
              quod, quia voluptatem
            </p>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Icon icon="bx:bx-check" width={20} height={20} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Lorem ipsum dolor sit amet.</b> - Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam a quibusdam, voluptatum,
                quod, quia voluptatem voluptates quos doloribus quae voluptate
                quidem. Quisquam a quibusdam, voluptatum, quod, quia voluptatem
              </List.Item>
              <List.Item>
                <b>Lorem, ipsum dolor.</b> - Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam a quibusdam, voluptatum,
                quod, quia voluptatem voluptates quos doloribus quae voluptate
                quidem. Quisquam a quibusdam, voluptatum, quod, quia voluptatem
              </List.Item>
              <List.Item>
                <b>Lorem ipsum dolor sit.</b> - Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam a quibusdam, voluptatum,
                quod, quia voluptatem voluptates quos doloribus quae voluptate
                quidem. Quisquam a quibusdam, voluptatum, quod, quia voluptatem
              </List.Item>
            </List>

            <div>
              <Button radius="xl" size="md" onClick={handleHeroButtonClick}>
                Get started
              </Button>
            </div>
          </div>
          <Image src={heroImage} alt="hero image" width={400} height={400} />
        </div>
      </div>
    </main>
  );
}
