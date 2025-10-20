export interface Laureate {
  id: string;
  firstname: string;
  surname?: string;
  motivation: string;
  share: string;
  image?: string;
}

export interface Prize {
  year: string;
  category: string;
  laureates?: Laureate[];
  overallMotivation?: string;
}

export type Category = 'physics' | 'chemistry' | 'medicine' | 'literature' | 'peace' | 'economics';