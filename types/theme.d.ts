declare interface ITheme<T extends string> {
  vars: Record<T, string>;
  css: Record<T, string>;
  definitions: Record<string, string>;
}
