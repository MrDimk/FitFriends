import {PrismaClient} from '@prisma/client';
import {logger} from 'nx/src/utils/logger';

const prisma = new PrismaClient()

async function fillDB() {
  await prisma.workout.upsert({
    where: {workoutId: 1},
    update: {},
    create: {
      title: "Beginner Yoga",
      backgroundImage: "uploads/image1.jpg",
      level: 'beginner',
      type: 'yoga',
      duration: 'short',
      price: 200,
      calories: 2000,
      description: "A beginner level yoga workout designed to improve flexibility.",
      targetGender: 'unimportant',
      video: "uploads/video1.mp4",
      trainerId: "trainer1id",
      specialOffer: false,
      createdAt: new Date(),
      publishAt: new Date(),
    }
  });

  await prisma.workout.upsert({
    where: {workoutId: 2},
    update: {},
    create: {
      title: "Pro Boxing",
      backgroundImage: "uploads/image2.jpg",
      level: 'professional',
      type: 'boxing',
      duration: 'extra',
      price: 1000,
      calories: 4500,
      description: "An intense boxing workout for professional athletes. Get ready to sweat!",
      targetGender: 'male',
      video: "uploads/video2.mp4",
      trainerId: "trainer2id",
      specialOffer: true,
      createdAt: new Date(),
      publishAt: new Date(),
    }
  });

  logger.log('Filled some data 💩');
}

fillDB()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
