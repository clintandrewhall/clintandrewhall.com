declare interface ITheme<T extends string> {
  vars: Record<T, string>;
  decl: Record<T, string>;
  definitions: Record<string, string>;
}
