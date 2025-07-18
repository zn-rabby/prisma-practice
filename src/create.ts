import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title  ZNR",
  //       content: "This is content ZNR",
  //       authorName: "Fahim Ahammed Firoz ZNR",
  //     },
  //   });
  //   crete many
    const createMany = await prisma.post.createMany({
      data: [
        {
          title: "This is title  1",
          content: "This is content 1",
          authorName: "Fahim Ahammed Firoz 1",
        },
        {
          title: "This is title  2",
          content: "This is content 2",
          authorName: "Fahim Ahammed Firoz 2",
        },
        {
          title: "This is title  3",
          content: "This is content 3",
          authorName: "Fahim Ahammed Firoz 3",
        },
      ],
    });
    console.log(createMany);
};

main();
