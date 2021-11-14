import React from "react";

/**
 * @packages npm registry packages
 */
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  WalletOutlined,
  DollarCircleOutlined,
  AppstoreOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import { useActiveTabDataLayerValue } from "../Context/ActiveNavbarTab";

const { SubMenu } = Menu;

export default function Navbar() {
  const [{ active }, dispatch] = useActiveTabDataLayerValue();

  const handleClick = (e) => {
    dispatch({
      type: "SET_ACTIVE_NAVBAR_TAB",
      activeTab: e.key,
    });
  };

  return (
    <div className="navbar__container">
      <Menu onClick={handleClick} selectedKeys={[active]} mode="horizontal">
        <Menu.Item key="home">eScrow</Menu.Item>

        <SubMenu key="buy" title="Buy" icon={<CaretDownOutlined />}>
          <Menu.ItemGroup>
            <Menu.Item key="buy-ethereum">Buy Ethereum</Menu.Item>
            <Menu.Item key="buy-tether">Buy Tether</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu key="sell" title="Sell" icon={<CaretDownOutlined />}>
          <Menu.ItemGroup>
            <Menu.Item key="sell-ethereum">Sell Ethereum</Menu.Item>
            <Menu.Item key="sell-tether">Sell Tether</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <Menu.Item key="wallet" icon={<WalletOutlined />}>
          Wallet
        </Menu.Item>

        <Menu.Item key="create-an-offer" icon={<DollarCircleOutlined />}>
          Create an Offer
        </Menu.Item>

        <Menu.Item key="vendor" icon={<AppstoreOutlined />}>
          Become a Vendor
        </Menu.Item>
      </Menu>
    </div>
  );
}
