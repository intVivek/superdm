import { Menu, Typography } from "antd";
import { Header as Head } from "antd/es/layout/layout";

export default function Header() {
  return (
    <Head style={{ display: 'flex', alignItems: 'center' }}>
    <div className="demo-logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={[]}
      style={{ flex: 1, minWidth: 0 }}
    />
  </Head>
  );
}
