import React from "react";
import "./App.css";
import { Layout, Avatar, Menu, Breadcrumb, Tree } from "antd";
import Title from "antd/lib/typography/Title";
import { MailOutlined } from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  Batsmen,
  Bowler,
  Cricketer,
  ODICareer,
  Batting,
  Bowling,
  TestCareer,
} from "./Cricketer";

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
                style={{ background: "#fff", padding: 24, minHeight: 440 }}
                className="site-layout-content"
              >
                <Cricketer name="Virat Kholi" team="IND" avatarSrc="./vk.jpg">
                  <ODICareer matches="239">
                    <Batting runs="11,520" score="183" />
                    <br></br>
                    <Bowling wickets="4" bowlingAvg="166.25" />
                  </ODICareer>
                  <TestCareer matches="79">
                    <Batting runs="6,749" score="243" />
                  </TestCareer>
                </Cricketer>
                <Cricketer
                  name="Jascript Bumrah"
                  team="IND"
                  avatarSrc="./jb.jpg"
                >
                  <TestCareer matches="12">
                    <Bowling wickets="62" bowlingAvg="20.63" />
                  </TestCareer>
                </Cricketer>
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
