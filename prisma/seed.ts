import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create companies
  for (let i = 0; i < 10; i++) {
    const cnpj = faker.random.numeric(14);

    await prisma.company.upsert({
      where: { cnpj },
      update: {},
      create: {
        name: faker.company.name(),
        cnpj,
      },
    });
  }

  // create products
  for (let i = 0; i < 10; i++) {
    const title = faker.commerce.productName();
    const companyId = parseInt(faker.random.numeric());

    await prisma.product.upsert({
      where: { title },
      update: {
        companyId,
      },
      create: {
        title,
        description: faker.commerce.productDescription(),
        value: parseFloat(faker.commerce.price()),
        currency: faker.finance.currencyCode(),
        companyId,
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
