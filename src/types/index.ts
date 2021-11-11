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

export type ContainerStyle = {
  width: string;
  height: string;
  background: string;
  margin: string;
  padding: string;
};
export type ContainerDom = {
  id: string;
  type: "container";
  style: ContainerStyle;
  children: (ContainerDom | InputDom)[];
};

export type InputStyle = {
  width: string;
  height: string;
  margin: string;
  padding: string;
};
export type InputDom = {
  id: string;
  type: "input";
  style: InputStyle;
};
