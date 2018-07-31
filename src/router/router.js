import Err from 'src/pages/Err'
import homeRouter from './homeRouter'
import Home from 'src/pages/Home'

let router = [
  {path: '/error', component: Err},
  {path: '/home', component: Home, children: homeRouter}
]
export default [].concat(router)
