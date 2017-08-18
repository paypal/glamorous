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

export type StaticStyleArray<Properties> = Array<
| Partial<Properties>
| string
>

export type StyleArgument<Properties, Props> =
  | Partial<Properties>
  | string
  | StyleFunction<Properties, Props>
  | StyleArray<Properties, Props>

export type StaticStyleArgument<Properties> =
  | Partial<Properties>
  | string
  | StaticStyleArray<Properties>
