import { globalConst as native } from 'lib/const'

class ApiConfig {
  constructor (name, url, config, method = 'post') {
    this.name = name
    this.url = url
    this.method = method
    if (config && typeof config === 'object') {
      this.config = config
      this.method = method
    } else if (config && typeof config === 'string') {
      this.method = config
    } else {
      this.config = {}
    }

  }
}

let apiConfig = [
  new ApiConfig(native.doSysCheckInInfo, '/api/room/checkInInfo'),
  new ApiConfig(native.doSysCheckVip, '/api/user/checkVip'),
  new ApiConfig(native.doSysGetCode, '/api/getCode'),
  new ApiConfig(native.doSysLogin, '/api/login'),
  new ApiConfig(native.doSysUserList, '/api/user/list'),
  new ApiConfig(native.doSysUserAdd, '/api/user/add'),
  new ApiConfig(native.doSysUserDel, '/api/user/del'),
  new ApiConfig(native.doSysUserEdit, '/api/user/edit'),
  new ApiConfig(native.doSysUserInfo, '/api/user/info'),
  new ApiConfig(native.doSysUserSeach, '/api/user/search'),
  new ApiConfig(native.doSysRuleList, '/api/menu/list'),
  new ApiConfig(native.doSysRuleInfo, '/api/menu/info'),
  new ApiConfig(native.doSysRuleAdd, '/api/menu/add'),
  new ApiConfig(native.doSysRuleEdit, '/api/menu/edit'),
  new ApiConfig(native.doSysRuleDel, '/api/menu/del'),
  new ApiConfig(native.doSysRuleSeach, '/api/menu/seach'),
  new ApiConfig(native.doSysRuleGetChildren, '/api/rule/getChildren'),
  new ApiConfig(native.doSysRoleAdd, '/api/role/add'),
  new ApiConfig(native.doSysRoleList, '/api/role/list'),
  new ApiConfig(native.doSysRoleInfo, '/api/role/info'),
  new ApiConfig(native.doSysRoleEdit, '/api/role/edit'),

  new ApiConfig(native.doUserList, '/api/user/list'),
  new ApiConfig(native.doUserAdd, '/api/user/add'),
  new ApiConfig(native.doUserEdit, '/api/user/set'),
  new ApiConfig(native.doUserInfo, '/api/user/info'),
  new ApiConfig(native.doUserSearch, '/api/user/search'),

  new ApiConfig(native.doSysCatalogsList, '/api/shop/catalogs/list'),
  new ApiConfig(native.doSysCatalogsAdd, '/api/shop/catalogs/add'),
  new ApiConfig(native.doSysCatalogsEdit, '/api/shop/catalogs/set'),
  new ApiConfig(native.doSysCatalogsInfo, '/api/shop/catalogs/info'),
  new ApiConfig(native.doSysCatalogsAll, '/api/shop/catalogs/all'),
  new ApiConfig(native.doSysCatalogsAllJoinGoods, '/api/shop/catalogs/allJoinGoods'),

  new ApiConfig(native.doSysGoodsList, '/api/shop/goods/list'),
  new ApiConfig(native.doSysGoodsAdd, '/api/shop/goods/add'),
  new ApiConfig(native.doSysGoodsEdit, '/api/shop/goods/set'),
  new ApiConfig(native.doSysGoodsInfo, '/api/shop/goods/info'),
  new ApiConfig(native.doSysGoodsAll, '/api/shop/goods/all'),

  new ApiConfig(native.doSysComboList, '/api/shop/combo/list'),
  new ApiConfig(native.doSysComboAdd, '/api/shop/combo/add'),
  new ApiConfig(native.doSysComboEdit, '/api/shop/combo/set'),
  new ApiConfig(native.doSysComboInfo, '/api/shop/combo/info'),
  new ApiConfig(native.doSysComboListAll, '/api/shop/combo/all'),

  new ApiConfig(native.doSysOrderList, '/api/order/list'),
  new ApiConfig(native.doSysOrderAdd, '/api/order/add'),
  new ApiConfig(native.doSysOrderEdit, '/api/order/set'),
  new ApiConfig(native.doSysOrderInfo, '/api/order/info'),
  new ApiConfig(native.doSysOrderOfflinePay, '/api/order/offlinePay')
]
export default apiConfig
