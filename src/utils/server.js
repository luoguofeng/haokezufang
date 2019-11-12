import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://183.237.67.218:3001'
})
export function swiper() {
  return instance.get('/home/swiper')
}
