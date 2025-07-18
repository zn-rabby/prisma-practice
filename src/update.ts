import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  const singleUpdate = await prisma.post.update({
    where: {
      id: 13,
    },
    data: {
      title: "Title 13",
      content: "Author 13",
      authorName: "Author 13",
    },
  });
  console.log(singleUpdate);
};
updates();
