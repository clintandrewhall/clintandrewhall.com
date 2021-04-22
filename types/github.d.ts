declare type LinesOfCode = {
  languageName: string;
  totalLines: number;
  byProject: { [key: string]: number };
};
