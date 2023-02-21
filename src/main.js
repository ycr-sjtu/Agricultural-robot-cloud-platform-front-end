import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map-3x'

const app = createApp(App)

app.use(ElementPlus)
app.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 */
  ak: 'oaw9Q8tgtvBKiww4OklZgUGD7Q0fVaB0',
  // v:'2.0',  // 默认使用3.0
  // type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
});
app.mount('#app')
