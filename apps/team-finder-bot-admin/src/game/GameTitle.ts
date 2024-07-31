import { Game as TGame } from "../api/game/Game";

export const GAME_TITLE_FIELD = "title";

export const GameTitle = (record: TGame): string => {
  return record.title?.toString() || String(record.id);
};
