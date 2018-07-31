import UserList from 'pages/home/user/UserList'
import UserAdd from 'pages/home/user/UserAdd'
import UserEdit from 'pages/home/user/UserEdit'

import MenuList from 'pages/home/menu/MenuList'
import MenuAdd from 'pages/home/menu/MenuAdd'
import MenuEdit from 'pages/home/menu/MenuEdit'

import OrderList from 'pages/home/order/OrderList'
import OrderAdd from 'pages/home/order/OrderAdd'

import RoleList from 'pages/home/role/RoleList'
import RoleAdd from 'pages/home/role/RoleAdd'
import RoleEdit from 'pages/home/role/RoleEdit'

import CatalogsList from 'pages/home/shop/catalogs/CatalogsList'
import CatalogsAdd from 'pages/home/shop/catalogs/CatalogsAdd'
import CatalogsEdit from 'pages/home/shop/catalogs/CatalogsEdit'

import ComboList from 'pages/home/shop/combo/ComboList'
import ComboAdd from 'pages/home/shop/combo/ComboAdd'
import ComboEdit from 'pages/home/shop/combo/ComboEdit'

import GoodsList from 'pages/home/shop/goods/GoodsList'
import GoodsAdd from 'pages/home/shop/goods/GoodsAdd'
import GoodsEdit from 'pages/home/shop/goods/GoodsEdit'

let homeRouter = [
  {path: 'user/list', component: UserList, name: 'userList'},
  {path: 'user/add', component: UserAdd, name: 'userAdd'},
  {path: 'user/edit/:userId', component: UserEdit, name: 'userEdit', props: true},

  {path: 'menu/list', component: MenuList, name: 'menuList'},
  {path: 'menu/add', component: MenuAdd, name: 'menuAdd'},
  {path: 'menu/edit/:menuId', component: MenuEdit, name: 'menuEdit', props: true},

  {path: 'order/list', component: OrderList, name: 'orderList'},
  {path: 'order/add', component: OrderAdd, name: 'orderAdd'},

  {path: 'role/list', component: RoleList, name: 'roleList'},
  {path: 'role/add', component: RoleAdd, name: 'roleAdd'},
  {path: 'role/edit/:roleId', component: RoleEdit, name: 'roleEdit', props: true},

  {path: 'catalogs/list', component: CatalogsList, name: 'catalogsList'},
  {path: 'catalogs/add', component: CatalogsAdd, name: 'catalogsAdd'},
  {path: 'catalogs/edit/:catalogsId', component: CatalogsEdit, name: 'catalogsEdit', props: true},

  {path: 'combo/list', component: ComboList, name: 'comboList'},
  {path: 'combo/add', component: ComboAdd, name: 'comboAdd'},
  {path: 'combo/edit/:comboId', component: ComboEdit, name: 'comboEdit', props: true},

  {path: 'goods/list', component: GoodsList, name: 'goodsList'},
  {path: 'goods/add', component: GoodsAdd, name: 'goodsAdd'},
  {path: 'goods/edit/:goodsId', component: GoodsEdit, name: 'goodsEdit', props: true},
]
export default homeRouter
