import React from 'react'
import { Layout,Menu,Icon,Avatar } from 'antd'
import Link from 'umi/link'

//Header,Footer,Slider,Content组件在Layout组件模块下
const { Header,Footer,Sider,Content } = Layout;
//引入子菜单组件
const SubMenu = Menu.SubMenu;

class BasicLayout extends React.Component{
    state = {
        collapsed:false,
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render(){
        return(
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh'}} trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div style={{marginTop:'8px'}}>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Link to="/helloworld">
                                    <Icon type="pie-chart" />
                                    <span>Helloworld</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu
                              key="sub1"
                              title={<span><Icon type="dashboard" /><span>Dashborad</span></span>}
                            >
                                <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                              key="sub2"
                              title={<span><Icon type="appstore" /><span>Manager</span></span>}
                            >
                                <Menu.Item key="5">员工管理</Menu.Item>
                                <Menu.Item key="6">业务管理</Menu.Item>
                                <Menu.Item key="7">财务管理</Menu.Item>
                                <Menu.Item key="8">客户管理</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </Sider>
                <Layout >
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon 
                        style={{marginLeft:'16px'}} 
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick = {this.toggle}
                    />
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 460 }}>
                    {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout