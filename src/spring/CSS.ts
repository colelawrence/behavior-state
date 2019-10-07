import * as CSS from "csstype";

export type TLength = number | string;

const COLOR: "color" = "color";
const LENGTH: "length" = "length";
const ZERO_TO_ONE: "zero-to-one" = "zero-to-one";
const LENGTH4: "length4" = "length4";

type TargetForKind<T> = T extends "color"
  ? string
  : T extends "length4"
  ? number[]
  : T extends "length"
  ? number
  : T extends "zero-to-one"
  ? number
  : number | string;

function propconf<T>(
  kind: T,
  defaults?: CSS.Properties,
  apply?: (target: TargetForKind<T>) => CSS.Properties
) {
  return {
    kind,
    defaults,
    apply
  };
}

function len4Px(nums: number[]) {
  return nums
    .slice(0, 4)
    .map(px => px + "px")
    .join(" ");
}

/** Animatable properties configuration */
const CSSProps = {
  // Decoration
  backgroundColor: propconf(COLOR),
  opacity: propconf(ZERO_TO_ONE),
  borderRadius: propconf(LENGTH4, { overflow: "hidden" }, len4 => ({
    borderRadius: len4.map(px => px + "px").join(" ")
  })),
  borderWidth: propconf(LENGTH),
  borderColor: propconf(COLOR),

  // Type
  fontSize: propconf(LENGTH),
  color: propconf(COLOR),

  // Layout
  marginTop: propconf(LENGTH),
  marginBottom: propconf(LENGTH),
  marginLeft: propconf(LENGTH),
  marginRight: propconf(LENGTH),
  margin: propconf(LENGTH4, {}, len4 => ({
    margin: len4Px(len4)
  })),

  paddingTop: propconf(LENGTH),
  paddingBottom: propconf(LENGTH),
  paddingLeft: propconf(LENGTH),
  paddingRight: propconf(LENGTH),
  padding: propconf(LENGTH4, {}, len4 => ({
    padding: len4Px(len4)
  })),

  top: propconf(LENGTH),
  bottom: propconf(LENGTH),
  left: propconf(LENGTH),
  right: propconf(LENGTH),

  /** use for all sides & include absolute */
  absolute: propconf(LENGTH4, { position: "absolute" }, len4 => ({
    top: len4[0] + "px",
    right: len4[1 % len4.length] + "px",
    bottom: len4[2 % len4.length] + "px",
    left: len4[3 % len4.length] + "px"
  })),

  /** use for all sides & include fixed */
  fixed: propconf(LENGTH4, { position: "fixed" }, len4 => ({
    top: len4[0] + "px",
    right: len4[1 % len4.length] + "px",
    bottom: len4[2 % len4.length] + "px",
    left: len4[3 % len4.length] + "px"
  }))
};

type CSSProps = typeof CSSProps;
type AnimatableCSSProps = {
  [P in keyof CSSProps]: CSSProps[P] extends { kind: infer Kind }
    ? TargetForKind<Kind>
    : never;
};
