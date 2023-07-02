'use client';

import {
  Button,
  Checkbox,
  Divider,
  Paper,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FormData {
  values: {
    name: string;
    email: string;
    password: string;
    terms: boolean;
  };
  errors: {
    name?: string;
    email?: string;
    password?: string;
    terms?: string;
  };
}

export default function AuthenticationPage() {
  const router = useRouter();
  const type = 'register';
  const form: FormData = {
    values: {
      name: '',
      email: '',
      password: '',
      terms: false,
    },
    errors: {},
  };

  const handleFormSubmit = () => {
    router.push('/app');
  };

  return (
    <main>
      <Paper radius="md" p="xl" withBorder>
        <h1>Welcome to ProAktiv</h1>

        <div>
          <Button radius="xl">Google</Button>
          <Button radius="xl">Twitter</Button>
        </div>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form>
          <div>
            {type === 'register' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              error={
                form.errors.password &&
                'Password should include at least 6 characters'
              }
              radius="md"
            />

            {type === 'register' && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
              />
            )}
          </div>

          <div>
            <Link href="#">
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Link>
            <Button radius="xl" onClick={handleFormSubmit}>
              {type}
            </Button>
          </div>
        </form>
      </Paper>
    </main>
  );
}
