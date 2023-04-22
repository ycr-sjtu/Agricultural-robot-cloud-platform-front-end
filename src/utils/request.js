import axios from 'axios'

// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000, // 请求超时时间
})

export default request