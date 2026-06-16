declare interface LinesOfCode {
  languageName: string;
  totalLines: number;
  byProject: { [key: string]: number | undefined };
}

declare interface RepoInformation {
  name: string;
  fullName: string;
  url: string;
  size: number;
  stargazers: number;
  watchers: number;
  language: string;
}
