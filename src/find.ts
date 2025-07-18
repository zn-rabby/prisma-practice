import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  //   const getAllFromDB = await prisma.post.findMany();

  // find fast
  //   const findFast = await prisma.post.findFirst({
  //     where: {
  //       id: 10,
  //     },
  //   });
  //   const findFirst = await prisma.post.findFirstOrThrow({
  //     where: {
  //       published: true,
  //     },
  //   });

  //   find unique
  //   const findUnique = await prisma.post.findUnique({
  //     where: {
  //       id: 9,
  //     },
  //   });
  const findUnique = await prisma.post.findUnique({
    where: {
      id: 9,
    },
    select: {
      title: true,
      content: true,
    },
  });

  console.log(findUnique);
};

main();
