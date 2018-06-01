export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type SingleOrArray<Properties, T extends keyof Properties> = {
  [P in T]: Properties[P] | Array<Properties[P]>
}
