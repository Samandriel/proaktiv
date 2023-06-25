// Create CRUD operation for nextjs API route of todos
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { tr } from 'date-fns/locale';

const prisma = new PrismaClient();

export async function GET(res: NextApiResponse) {
  try {
    const todos = await prisma.todos.findMany();
    res.json(todos);
  } catch (error) {
    res.json(error);
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const todo = await prisma.todos.create({
      data: {
        ...req.body,
      },
    });
    res.json(todo);
  } catch (error) {
    res.json(error);
  }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id, ...data } = req.body;
    const todo = await prisma.todos.update({
      where: { id },
      data: {
        ...data,
      },
    });
    res.json(todo);
  } catch (error) {
    res.json(error);
  }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.body;
    const todo = await prisma.todos.delete({
      where: { id },
    });
    res.json(todo);
  } catch (error) {
    res.json(error);
  }
}
