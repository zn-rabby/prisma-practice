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
  const getAllFromDB = await prisma.post.findMany();

  console.log(getAllFromDB);
};

main();
