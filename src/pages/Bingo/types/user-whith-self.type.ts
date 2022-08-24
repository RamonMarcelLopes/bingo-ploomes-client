import { GeneratedCard } from './generated-card.type';

export type UserWhithSelf = {
  id: string;
  nickname: string;
  score: number;
  isSelf: boolean;
  cards: [
    {
      id: string;
      numbers: GeneratedCard;
    }
  ];
};
