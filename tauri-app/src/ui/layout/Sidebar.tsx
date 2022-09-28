import { Tree, TreeNodeTemplateOptions } from "primereact/tree";
import TreeNode from "primereact/treenode";
import { useNavigate } from "react-router";
export interface RichestTreeNode extends TreeNode {
  custom_icon?: JSX.Element | React.ReactNode;
  children?: RichestTreeNode[];
}

const nodeTemplate = (node: RichestTreeNode, options) => {
  let label = <b>{node.label}</b>;

  return (
    <p
      style={{
        fontSize: "14px",
      }}
    >
      <span style={{ marginRight: "8px" }}>{node.custom_icon}</span>
      <span className={options.className}>{label}</span>
    </p>
  );
};

const Sidebar = ({ items, setSelectedItem, selectedItem }: any) => {
  const navigate = useNavigate();
  return (
    <div className="layout-sidebar">
      <Tree
        filter
        value={items}
        nodeTemplate={nodeTemplate}
        selectionMode="single"
        onSelect={(e) => navigate(e.node.data)}
      />
    </div>
  );
};

export default Sidebar;
