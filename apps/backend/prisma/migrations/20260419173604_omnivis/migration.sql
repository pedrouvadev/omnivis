-- CreateTable
CREATE TABLE "Voluntario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Voluntario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disponibilidade" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "ativo" TEXT NOT NULL,
    "voluntarioId" TEXT NOT NULL,

    CONSTRAINT "Disponibilidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abrigo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "ocupacao" INTEGER NOT NULL,
    "necessidades" TEXT[],

    CONSTRAINT "Abrigo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doacao" (
    "id" TEXT NOT NULL,
    "doadorId" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "transporteId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Doacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pack" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "membros" TEXT[],
    "disponivel" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Pack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voluntario_email_key" ON "Voluntario"("email");

-- AddForeignKey
ALTER TABLE "Disponibilidade" ADD CONSTRAINT "Disponibilidade_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "Voluntario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
