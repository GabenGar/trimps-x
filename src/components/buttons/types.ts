import { type MouseEvent as IReactMouseEvent } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VIEW_TYPES = [
  "button",
  "submit",
  "reset",
  "negative",
  "positive",
] as const;

export type IViewType = (typeof VIEW_TYPES)[number];

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IClickEvent
  extends IReactMouseEvent<HTMLButtonElement, MouseEvent> {}
