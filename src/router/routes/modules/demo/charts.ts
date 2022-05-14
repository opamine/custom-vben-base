import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: t('routes.demo.charts.charts'),
  },
  children: [
    {
      path: 'aMap',
      name: 'AMap',
      meta: {
        title: t('routes.demo.charts.aMap'),
      },
      component: () => import('/@/views/demo/charts/map/Gaode.vue'),
    },
  ],
};

export default charts;
