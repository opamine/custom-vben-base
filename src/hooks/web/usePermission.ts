import { useAppStore } from '/@/store/modules/app';
import { usePermissionStore } from '/@/store/modules/permission';
import projectSetting from '/@/settings/projectSetting';
import { PermissionModeEnum } from '/@/enums/appEnum';
import { RoleEnum } from '/@/enums/roleEnum';

import { intersection } from 'lodash-es';
import { isArray } from '/@/utils/is';

// User permissions related operations
export function usePermission() {
  // const userStore = useUserStore();
  const appStore = useAppStore();
  const permissionStore = usePermissionStore();

  /**
   * Change permission mode
   */
  async function togglePermissionMode() {
    appStore.setProjectConfig({
      permissionMode:
        projectSetting.permissionMode === PermissionModeEnum.BACK_END
          ? PermissionModeEnum.ROUTE_MAPPING
          : PermissionModeEnum.BACK_END,
    });
    location.reload();
  }

  /**
   * Determine whether there is permission
   */
  function hasPermission(value?: RoleEnum | RoleEnum[] | string | string[], def = true): boolean {
    // Visible by default
    if (!value) {
      return def;
    }

    const allCodeList = permissionStore.getPermCodeList as string[];
    if (!isArray(value)) {
      return allCodeList.includes(value);
    }
    return (intersection(value, allCodeList) as string[]).length > 0;
  }

  return { hasPermission, togglePermissionMode };
}
