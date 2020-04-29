import React from "react";
import "./App.css";
import { Layout, Avatar, Menu, Breadcrumb, Tree } from "antd";
import Title from "antd/lib/typography/Title";
import { MailOutlined } from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { Batsmen, Bowler } from './Cricketer';

const { Header, Footer, Sider, Content } = Layout;
//const { TreeNode } = Tree;

function App() {
  // let bestBatsmen = new Batsmen("S.P.D. Smit", "AUS", 6973);
  // let bestBowler = new Bowler("Pat Cummins", "AUS", 123);
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: "right" }} src="./dp.png" />
          <Title style={{ color: "white" }} level={3}>
            Ant Design
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={["Doashboard"]} mode="inline">
              <Menu.Item key="Doashboard">Doashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <MailOutlined />
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="AboutUS" title="Country 1">
                  <Menu.Item key="location1">Location 1</Menu.Item>
                  <Menu.Item key="location2">Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Doashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{ background: "#fff", padding: 24, minHeight: 500 }}
                className="site-layout-content"
              >
                {/* <Tree key="0" showLine defaultExpandedKeys={["0-0-0"]}>
                  <TreeNode title={bestBatsmen.getName()} key="0-0-0">
                    <TreeNode title={"Team - " + bestBatsmen.getTeamName()} key="0-0-0-1"></TreeNode>
                    <TreeNode title={"Runs - " + bestBatsmen.getRuns()} key="0-0-0-2"></TreeNode>
                  </TreeNode>
                  <TreeNode title={bestBowler.getName()} key="0-0-1">
                    <TreeNode title={"Team - " + bestBowler.getTeamName()} key="0-0-1-1"></TreeNode>
                    <TreeNode title={"Runs - " + bestBowler.getWickets()} key="0-0-1-2"></TreeNode>
                  </TreeNode>
                </Tree> */}
                <Batsmen name='S.P.D. Smit' team='AUS' runs='6973' />
                <Bowler name='Pat Cummins' team='AUS' wickets='123' />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design Layout example
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
