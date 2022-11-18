/*
 * @Author: Chen Yankai
 * @Date: 2022-11-15 15:51:15
 * @LastEditTime: 2022-11-16 10:33:43
 * @LastEditors: Chen Yankai
 * @Description:
 */
export interface DefaultInstallOptions {
  prefix?: string
  alias?: string
  namespace?: string
}

export interface ContextMenuInstance {
  closeMenu(): void
}
export interface MenuOptions {
  items: MenuItem[]
  x: number
  y: number
  xOffset?: number
  yOffset?: number
  zIndex?: number
  customClass?: string
  iconFontClass?: string
  moreArrow?: string | object
  maxWidth?: number
  minWidth?: number
  maxHeight?: number
  closeWhenScroll?: boolean
  namespace?: string
}
export interface MenuItem {
  label?: string | object
  icon?: string | object
  disabled?: boolean
  adjustSubMenuPosition?: boolean
  clickableWhenHasChildren?: boolean
  clickClose?: boolean
  divided?: boolean
  customClass?: string
  maxWidth?: number
  minWidth?: number
  onClick?: () => void
  customComponent?: object
  children?: MenuItem[]
}

export interface ContextMenuPositionData {
  x: number
  y: number
}

export interface SubMenuParentContext {
  zIndex: number
  getMyPosition: () => ContextMenuPositionData
  getParentWidth: () => number
  addOpenedSubMenu: (closeFn: Function) => void
  closeOtherSubMenu: () => void
  closeOtherSubMenuWithTimeOut: () => void
  checkCloseOtherSubMenuTimeOut: () => boolean
}
