import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 13,
  //     },
  //   });
  const deleteMany = await prisma.post.deleteMany({
    where: {
      published: true,
    },
  });
  console.log(deleteMany);
};
deleteData();
