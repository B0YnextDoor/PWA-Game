export enum EnumTypeCard {
  "taunt",
}

export interface ICard {
  name: string;
  mana: number;
  health: number;
  power: number;
  type?: EnumTypeCard;
}

export interface IGameCard extends ICard {
  id: string;
  isOnBoard: boolean;
  isCanAttack: boolean;
  isPlayed: boolean;
}
