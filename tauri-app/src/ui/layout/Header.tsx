import { Menubar, MenubarProps } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

type Props = {
  items: MenuItem[];
  currentPath: string;
} & MenubarProps;

const Header = ({ items, currentPath }: Props) => {
  return (
    <Menubar
      style={{ width: "100%", background: "transparent", border: "none" }}
      model={items}
      start={
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
            color: "black",
            marginBlockEnd: "auto",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img height={"30px"} src={logo} />
          <p>{currentPath}</p>
        </NavLink>
      }
    />
  );
};

export default Header;
