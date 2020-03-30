import { getAction, postAction, putAction } from '@/utils/ajax'

////// Menu
const getMenuList = (params) => getAction('/sys/menu/list', params)
const addMenu = (params) => postAction('/sys/menu/add', params)
const editMenu = (params) => putAction('/sys/menu/edit', params)

const queryTreeList = (params) => getAction('/sys/menu/queryTreeList', params)
// const queryTreeListForRole = (params) => getAction('/sys/role/queryTreeList', params)
// const queryListAsync = (params) => getAction('/sys/permission/queryListAsync', params)

////// User
const addUser = (params) => postAction('/sys/user/add', params)
const editUser = (params) => putAction('/sys/user/edit', params)
const queryUserRole = (params) => getAction('/sys/user/queryUserRole', params)
const getUserList = (params) => getAction('/sys/user/list', params)
const frozenBatch = (params) => putAction('/sys/user/frozenBatch', params)
// 修改系统用户密码
const changePassword = (params) => putAction('/sys/user/changePassword', params)
// 修改个人账号密码
const updatePassword = (params) => putAction('/sys/user/updatePassword', params)
// 获取用户菜单、按钮权限
const getUserPermissionList = (params) => getAction('/sys/permission/getUserPermission', params)

///// Role
const addRole = (params) => postAction('/sys/role/add', params)
const editRole = (params) => putAction('/sys/role/edit', params)
// const getRoleList = (params) => getAction('/sys/role/list', params)
// const deleteRole = (params) => deleteAction('/sys/role/delete', params)
// const deleteRoleList = (params) => deleteAction('/sys/role/deleteBatch', params)
const checkRoleCode = (params) => getAction('/sys/role/checkRoleCode', params)
const queryAllRole = (params) => getAction('/sys/role/all', params)
const queryRoleTreeList = (params) => getAction('/sys/role/queryRoleTreeList', params)

///// Dict
const ajaxGetDictItems = (code, params) => getAction(`/sys/dict/getDictItems/${code}`, params)
const addDict = (params) => postAction('/sys/dict/add', params)
const editDict = (params) => putAction('/sys/dict/edit', params)
const addDictItem = (params) => postAction('/sys/dictItem/add', params)
const editDictItem = (params) => putAction('/sys/dictItem/edit', params)
const duplicateCheck = (params) => getAction('/sys/duplicate/check', params)

///// Permission
const queryRolePermission = (params) => getAction('/sys/permission/queryRolePermission', params)
const saveRolePermission = (params) => postAction('/sys/permission/saveRolePermission', params)
const queryPermissionTreeList = (params) => getAction('/sys/role/queryPermissionTreeList', params)

///// Annoucement
const doReleaseData = (params) => getAction('/sys/announcement/doReleaseData', params)
const doReovkeData = (params) => getAction('/sys/announcement/doReovkeData', params)
// 获取用户通告信息
const getAnnouncementListByUser = (params) => getAction('/sys/announcement/listByUser', params)
// 修改公告状态（已读）
const editAnnouncementStatus = (params) => putAction('/sys/announcement/editStatus', params)
const queryAnnouncementDetail = (params) => getAction('/sys/announcement/queryDetailById', params)

///// System Setting
///// 通过ajaxGetDictItems 使用
const getSystemConfig = () => getAction('/sys/common/setting')

export {
  // Menu
  getMenuList,
  addMenu,
  editMenu,
  queryTreeList,

  // Role
  addRole,
  editRole,
  checkRoleCode,
  queryAllRole,
  queryRoleTreeList,

  // Permission
  queryRolePermission,
  saveRolePermission,
  queryPermissionTreeList,

  // User
  addUser,
  editUser,
  queryUserRole,
  getUserList,
  frozenBatch,
  getUserPermissionList,
  changePassword,
  updatePassword,

  // Dict
  ajaxGetDictItems,
  addDict,
  editDict,
  addDictItem,
  editDictItem,
  duplicateCheck,

  // Annoucement
  doReleaseData,
  doReovkeData,
  getAnnouncementListByUser,
  editAnnouncementStatus,
  queryAnnouncementDetail,

  // System
  getSystemConfig
}
