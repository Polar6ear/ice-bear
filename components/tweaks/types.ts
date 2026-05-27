export type DisplayFont =
  | "lilita"
  | "paytone"
  | "nunito"
  | "sniglet"
  | "fredoka"
  | "chango"
  | "bowlby"
  | "bagel";

export type TitleStyle = "outlined" | "clean" | "shadowed" | "sticker";
export type Accessory = "mug" | "sword";

export interface TweakState {
  displayFont: DisplayFont;
  titleStyle: TitleStyle;
  accessory: Accessory;
  bearMode: boolean;
  snow: boolean;
  snowDensity: number;
}

export const TWEAK_DEFAULTS: TweakState = {
  displayFont: "lilita",
  titleStyle: "outlined",
  accessory: "mug",
  bearMode: true,
  snow: true,
  snowDensity: 28,
};

export const TWEAK_STORAGE_KEY = "iceberg.tweaks.v1";
