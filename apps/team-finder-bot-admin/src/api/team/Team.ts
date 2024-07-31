import { Game } from "../game/Game";

export type Team = {
  createdAt: Date;
  game?: Game | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
