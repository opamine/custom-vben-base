import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const permission: AppRouteModule = {
  path: '/permission',
  name: 'Permission',
  component: LAYOUT,
  redirect: '/permission/front/page',
  meta: {
    orderNo: 15,
    icon: 'ion:key-outline',
    title: t('routes.demo.permission.permission'),
  },

  children: [
    {
      path: 'back',
      name: 'PermissionBackDemo',
      component: getParentLayout('PermissionBackDemo'),
      meta: {
        title: t('routes.demo.permission.back'),
      },
      children: [
        {
          path: 'page',
          name: 'BackAuthPage',
          component: () => import('/@/views/demo/permission/back/index.vue'),
          meta: {
            title: t('routes.demo.permission.backPage'),
          },
        },
        {
          path: 'btn',
          name: 'BackAuthBtn',
          component: () => import('/@/views/demo/permission/back/Btn.vue'),
          meta: {
            title: t('routes.demo.permission.backBtn'),
          },
        },
      ],
    },
  ],
};

export default permission;
