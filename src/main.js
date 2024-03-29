import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import BaiduMap from 'vue-baidu-map-3x'
import "@/assets/globle.css"

const app = createApp(App);

app.use(router).use(ElementPlus).use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 */
  ak: 'oaw9Q8tgtvBKiww4OklZgUGD7Q0fVaB0',
  // v:'2.0',  // 默认使用3.0
  // type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
}).mount('#app');
