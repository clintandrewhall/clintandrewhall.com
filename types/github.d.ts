declare interface LinesOfCode {
  languageName: string;
  totalLines: number;
  byProject: { [key: string]: number };
}
