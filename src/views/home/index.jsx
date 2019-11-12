import React, { Component } from 'react'
import styles from './index.module.scss'
import { Carousel, WingBlank } from 'antd-mobile'
import { swiper } from '../../utils/server'
export default class Home extends Component {
  state = {
    data: [],
    imgHeight: 234
  }

  componentDidMount() {
    // 发送请求,获取图片数据
    this.getSwiperImg()
  }

  async getSwiperImg() {
    let res = await swiper()
    this.setState(
      {
        data: res.data.body
      },
      () => {
        console.log(this.state.data)
      }
    )
  }

  render() {
    return (
      <div className={styles.homeWrapper}>
        {/* 轮播图区域 */}
        <WingBlank>
          <Carousel autoplay={true} infinite>
            {this.state.data.map(item => (
              <a
                key={item.id}
                href="http://www.alipay.com"
                style={{
                  display: 'inline-block',
                  width: '100%',
                  height: this.state.imgHeight
                }}
              >
                <img
                  src={`http://183.237.67.218:3001${item.imgSrc}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'))
                    this.setState({ imgHeight: 'auto' })
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </div>
    )
  }
}
