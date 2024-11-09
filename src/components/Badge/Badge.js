import { Tag } from "antd";

export const labelColors = {
    "Bug": "error",          
    "Urgent": "volcano",     
    "Enhancement": "green",  
    "Documentation": "blue", 
    "Feature": "purple",   
    "Critical": "red",     
    "Refactor": "magenta",   
    "Security": "cyan",     
    "UI": "gold",          
    "Optimization": "lime", 
    "Database": "geekblue",   
  };

const Badge = ({ label }) => {
    return (
      <Tag bordered={false} color={labelColors[label]}>
        {label}
      </Tag>
    );
  };

  export default Badge