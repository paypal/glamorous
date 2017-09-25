export interface StyleFunction<Properties, Props> {
  (props: Props):
    | Properties
    | string
    | Array<Properties | string | StyleFunction<Properties, Props>>
}

export type StyleArray<Properties, Props> = Array<
  Properties | string | StyleFunction<Properties, Props>
>

export type StaticStyleArray<Properties> = Array<Properties | string>

export type StyleArgument<Properties, Props> =
  | Properties
  | string
  | StyleFunction<Properties, Props>
  | StyleArray<Properties, Props>

export type StaticStyleArgument<Properties> =
  | Properties
  | string
  | StaticStyleArray<Properties>
