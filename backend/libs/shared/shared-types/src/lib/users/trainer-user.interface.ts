import {UserInterface} from './user.interface';

export interface TrainerUserInterface extends UserInterface {
  certificates: string[];  // path to the pdf-file
  achievements: string;
  readyForPersonalTraining: boolean;
}
