export type Style = {
  width: string;
  height: string;
  background: string;
  margin: string;
  padding: string;
};
export type Dom = {
  id: string;
  type: string;
  style: Style;
  children: Dom[];
};
