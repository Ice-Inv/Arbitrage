export type CardProps = {
  title: string;
  description: CardState[];
  cost: number;
}

type CardState = {
  text: string;
  isAvailability: boolean;
}
