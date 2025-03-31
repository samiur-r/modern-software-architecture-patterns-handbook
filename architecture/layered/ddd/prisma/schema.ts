generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "DB_URL"
}

model User {
  id    String @id @default(uuid())
  name  String
  email String @unique
}
