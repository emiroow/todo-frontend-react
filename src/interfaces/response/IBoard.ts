export interface IBoardResponse {
  boardList?: BoardList[];
}

export interface BoardList {
  _id?: string;
  backgroundImageUrl?: string;
  emoji?: string;
  name?: string;
  date?: string;
  user?: string;
  createdAt?: Date;
  updatedAt?: Date;
  totalTargets?: number;
  __v?: number;
}
