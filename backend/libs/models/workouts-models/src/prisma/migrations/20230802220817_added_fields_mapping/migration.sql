-- CreateEnum
CREATE TYPE "UserFitnessLevel" AS ENUM ('beginner', 'intermediate', 'professional');

-- CreateEnum
CREATE TYPE "WorkoutType" AS ENUM ('yoga', 'running', 'boxing', 'stretching', 'crossfit', 'aerobics', 'pilates');

-- CreateEnum
CREATE TYPE "WorkoutTime" AS ENUM ('short', 'medium', 'long', 'extra');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('female', 'male', 'unimportant');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('visa', 'mir', 'umoney');

-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('membership');

-- CreateEnum
CREATE TYPE "JointTrainingStatus" AS ENUM ('underReview', 'rejected', 'accepted');

-- CreateTable
CREATE TABLE "workouts" (
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

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("workout_id")
);

-- CreateTable
CREATE TABLE "orders" (
    "order_id" SERIAL NOT NULL,
    "trainer_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "orderType" "OrderType",
    "trainingPrice" DOUBLE PRECISION NOT NULL,
    "trainingsAmount" INTEGER NOT NULL,
    "totalCost" INTEGER DEFAULT 0,
    "paymentMethod" "PaymentMethod" NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "review_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "joint_trainings" (
    "joint_training_id" SERIAL NOT NULL,
    "initiator_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status_changed_at" TIMESTAMP(3) NOT NULL,
    "status" "JointTrainingStatus" NOT NULL,

    CONSTRAINT "joint_trainings_pkey" PRIMARY KEY ("joint_training_id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workouts"("workout_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workouts"("workout_id") ON DELETE RESTRICT ON UPDATE CASCADE;
