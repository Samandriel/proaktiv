import { parseArgs } from 'node:util';
import { todoList } from './seeds/mock/todos';
import { trackers } from './seeds/mock/trackers';
import { noteList } from './seeds/mock/notes';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const options = {
  environment: { type: 'string' as const },
};

const seedDevelopmentData = async () => {
  console.log('Start seeding ...');
  for (const todo of todoList) {
    const todoListData = await prisma.todos.create({
      data: {
        ...todo,
      },
    });
    console.log(`Created todoList with id: ${todoListData.id}`);
  }
  for (const tracker of trackers) {
    const trackerListData = await prisma.trackers.create({
      data: {
        ...tracker,
      },
    });
    console.log(`Created tracker with id: ${trackerListData.id}`);
  }
  for (const note of noteList) {
    const noteListData = await prisma.notes.create({
      data: {
        ...note,
      },
    });
    console.log(`Created note with id: ${noteListData.id}`);
  }
  console.log('Seeding finished.');
};

async function main() {
  const {
    values: { environment },
  } = parseArgs({ options });

  if (environment === 'development') {
    seedDevelopmentData();
  } else {
    console.log('No data to seed');
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
