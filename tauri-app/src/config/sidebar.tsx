import TreeNode from "primereact/treenode";
import { VscJson } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import { RichestTreeNode } from "../ui/layout/Sidebar";
import routes from "./routes";
import { BASE_URLS } from "./routes";

const PARSERS: Partial<RichestTreeNode> = {
  key: BASE_URLS.PARSERS_BASE_URL,
  data: BASE_URLS.PARSERS_BASE_URL,
  label: "Converters",
  icon: "pi pi-fw pi-language",

  children: [
    {
      key: routes.JSON_TO_TS,
      data: routes.JSON_TO_TS,
      label: "JSON to Typescript",
      custom_icon: (
        <>
          <VscJson />
          <BsArrowRight /> <SiTypescript />
        </>
      ),
      leaf: true,
    },
  ],
};

const PLAYGROUND: Partial<RichestTreeNode> = {
  key: "playground",
  label: "Playground",
  data: "Documents Folder",
  icon: "pi pi-fw pi-inbox",
  children: [
    {
      key: "0-0",
      label: "Work",
      data: "Work Folder",
      icon: "pi pi-fw pi-cog",
    },
    {
      key: "0-1",
      label: "Home",
      data: "Home Folder",
      icon: "pi pi-fw pi-home",
    },
  ],
};
const sidebarConfig: TreeNode[] = [PARSERS, PLAYGROUND];
export default sidebarConfig;
