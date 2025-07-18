import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //  update single
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 12,
  //     },
  //     data: {
  //       title: "Title 13",
  //       content: "Content 12",
  //       authorName: "Author 12",
  //     },
  //   });
  //   console.log(singleUpdate);
  // update many
  const updateManay = await prisma.post.updateMany({
    where: {
      title: "Title 13",
    },
    data: {
      published: true,
    },
  });
  console.log(updateManay);
};
updates();
