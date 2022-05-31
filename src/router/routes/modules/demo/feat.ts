import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const feat: AppRouteModule = {
  path: '/feat',
  name: 'FeatDemo',
  component: LAYOUT,
  redirect: '/feat/icon',
  meta: {
    orderNo: 19,
    icon: 'ion:git-compare-outline',
    title: t('routes.demo.feat.feat'),
  },

  children: [
    {
      path: 'icon',
      name: 'IconDemo',
      component: () => import('/@/views/demo/feat/icon/index.vue'),
      meta: {
        title: t('routes.demo.feat.icon'),
      },
    },
    {
      path: 'ws',
      name: 'WebSocket',
      component: () => import('/@/views/demo/feat/ws/index.vue'),
      meta: {
        title: t('routes.demo.feat.ws'),
      },
    },
    {
      path: 'tabs',
      name: 'TabsDemo',
      component: () => import('/@/views/demo/feat/tabs/index.vue'),
      meta: {
        title: t('routes.demo.feat.tabs'),
        hideChildrenInMenu: true,
      },
      children: [
        {
          path: 'detail/:id',
          name: 'TabDetail',
          component: () => import('/@/views/demo/feat/tabs/TabDetail.vue'),
          meta: {
            currentActiveMenu: '/feat/tabs',
            title: t('routes.demo.feat.tabDetail'),
            hideMenu: true,
            dynamicLevel: 3,
            realPath: '/feat/tabs/detail',
          },
        },
      ],
    },
    {
      path: 'copy',
      name: 'CopyDemo',
      component: () => import('/@/views/demo/feat/copy/index.vue'),
      meta: {
        title: t('routes.demo.feat.copy'),
      },
    },
    {
      path: 'msg',
      name: 'MsgDemo',
      component: () => import('/@/views/demo/feat/msg/index.vue'),
      meta: {
        title: t('routes.demo.feat.msg'),
      },
    },
    {
      path: 'watermark',
      name: 'WatermarkDemo',
      component: () => import('/@/views/demo/feat/watermark/index.vue'),
      meta: {
        title: t('routes.demo.feat.watermark'),
      },
    },
    {
      path: '/error-log',
      name: 'ErrorLog',
      component: () => import('/@/views/sys/error-log/index.vue'),
      meta: {
        title: t('routes.demo.feat.errorLog'),
      },
    },
  ],
};

export default feat;
