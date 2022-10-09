import TreeNode from "primereact/treenode";
import { VscJson } from "react-icons/vsc";
import { SiJavascript, SiTypescript } from "react-icons/si";
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
      key: routes.JSON_TO_TS.url,
      data: routes.JSON_TO_TS.url,
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
  icon: "pi pi-fw pi-inbox",
  children: [
    {
      key: routes.PLAYGROUND_JS.url,
      data: routes.PLAYGROUND_JS.url,
      label: "Javascript",
      custom_icon: (
        <>
          <SiJavascript />
        </>
      ),
      leaf: true,
    },
    {
      key: routes.PLAYGROUND_TS.url,
      data: routes.PLAYGROUND_TS.url,
      label: "Typescript",
      custom_icon: (
        <>
          <SiTypescript />
        </>
      ),
      leaf: true,
    },
  ],
};
const sidebarConfig: TreeNode[] = [PARSERS, PLAYGROUND];
export default sidebarConfig;
