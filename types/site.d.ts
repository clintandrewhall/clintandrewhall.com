declare type DisambiguateSet<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never;
};

declare type ExclusiveUnion<T, U> = T | U extends object // if there are any shared keys between T and U
  ? (DisambiguateSet<T, U> & U) | (DisambiguateSet<U, T> & T) // otherwise the TS union is already unique
  : T | U;
