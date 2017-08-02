export interface StyleFunction<Properties, Props> {
  (props: Props):
    | Partial<Properties>
    | string
    | Array<
      | Partial<Properties>
      | string
      | StyleFunction<Properties, Props>
    >
}

export type StyleArray<Properties, Props> = Array<
  | Partial<Properties>
  | string
  | StyleFunction<Properties, Props>
>

export type StyleArgument<Properties, Props> =
  | Partial<Properties>
  | string
  | StyleFunction<Properties, Props>
  | StyleArray<Properties, Props>