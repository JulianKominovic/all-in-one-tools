import { Menubar, MenubarProps } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React from "react";
import vite from "../../assets/react.svg";

type Props = {
  items: MenuItem[];
  currentPath: string;
} & MenubarProps;

const Header = ({ items, currentPath }: Props) => {
  return (
    <Menubar
      style={{ width: "100%", background: "transparent", border: "none" }}
      model={items}
      start={<img src={vite} />}
      end={currentPath}
    />
  );
};

export default Header;
