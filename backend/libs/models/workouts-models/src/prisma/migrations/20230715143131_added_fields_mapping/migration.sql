-- CreateEnum
CREATE TYPE "UserFitnessLevel" AS ENUM ('beginner', 'intermediate', 'professional');

-- CreateEnum
CREATE TYPE "WorkoutType" AS ENUM ('yoga', 'running', 'boxing', 'stretching', 'crossfit', 'aerobics', 'pilates');

-- CreateEnum
CREATE TYPE "WorkoutTime" AS ENUM ('short', 'medium', 'long', 'extra');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('female', 'male', 'unimportant');

-- CreateTable
CREATE TABLE "Workout" (
    "workout_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "background_image" TEXT NOT NULL,
    "level" "UserFitnessLevel" NOT NULL,
    "type" "WorkoutType" NOT NULL,
    "duration" "WorkoutTime" NOT NULL,
    "price" INTEGER NOT NULL,
    "calories" INTEGER NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "target_gender" "Gender" NOT NULL,
    "video" TEXT NOT NULL DEFAULT '',
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "trainer_id" TEXT NOT NULL,
    "special_offer" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publish_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("workout_id")
);
