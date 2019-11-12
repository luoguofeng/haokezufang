import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import styles from './index.module.scss'
import Home from '../home'
import HouseList from '../houseList'
import Info from '../info'
import My from '../my'
export default class Layout extends Component {
  state = {
    selectedTab: '/layout/home'
  }

  // 数据源
  tabs = [
    { title: '首页', icon_class: 'icon-index', path: '/layout/home' },
    { title: '找房', icon_class: 'icon-findHouse', path: '/layout/houseList' },
    { title: '咨询', icon_class: 'icon-info', path: '/layout/info' },
    { title: '我的', icon_class: 'icon-my', path: '/layout/my' }
  ]

  // 渲染数据源
  renderTabs = () => {
    return (
      <TabBar tintColor="#21B97A" noRenderContent>
        {this.tabs.map(item => (
          <TabBar.Item
            icon={<i className={`iconfont ${item.icon_class}`}></i>}
            selectedIcon={<i className={`iconfont ${item.icon_class}`}></i>}
            title={item.title}
            key={item.path}
            selected={this.props.location.pathname === item.path}
            onPress={() => {
              if (this.props.location.pathname !== item.path) {
                this.props.history.push(item.path)
              }
            }}
          ></TabBar.Item>
        ))}
      </TabBar>
    )
  }

  // 每次路由地址发生变化时,更新state中的tabs默认选中的值
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedTab: this.props.location.pathname
      })
    }
  }

  render() {
    return (
      <div className={styles.layoutWrapper}>
        <Switch>
          <Route path="/layout/home" component={Home}></Route>
          <Route path="/layout/houseList" component={HouseList}></Route>
          <Route path="/layout/info" component={Info}></Route>
          <Route path="/layout/my" component={My}></Route>
          <Redirect exact from="/layout" to="/layout/home"></Redirect>
        </Switch>
        <div className={styles.tabBar}>{this.renderTabs()}</div>
      </div>
    )
  }
}
