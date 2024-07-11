import { create } from "zustand";

interface IUseSelectAttacker {
  attackerId: string | null;
  setAttackerId: (cardId: string | null) => void;
}

export const useSelectAttacker = create<IUseSelectAttacker>((set) => ({
  attackerId: null,
  setAttackerId: (cardId) => set({ attackerId: cardId }),
}));
