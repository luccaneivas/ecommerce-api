import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 10; i++) {
    const title = faker.commerce.productName();

    await prisma.product.upsert({
      where: { title },
      update: {},
      create: {
        title,
        description: faker.commerce.productDescription(),
        value: parseFloat(faker.commerce.price()),
        currency: faker.finance.currencyCode(),
        company: parseInt(faker.random.numeric(1)),
        quantity: parseInt(faker.random.numeric(1)),
        available: true,
      },
    });
  }
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
