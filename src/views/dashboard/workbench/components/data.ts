interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
  },
  {
    title: '仪表盘',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
  },
  {
    title: '组件',
    icon: 'ion:layers-outline',
    color: '#e18525',
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
  },
  {
    title: '权限管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
  },
  {
    title: '图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/49026458?v=4',
    name: '威廉',
    date: '刚刚',
    desc: `在 <a>开源组</a> 创建了项目 <a>Vue</a>`,
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/49026458?v=4',
    name: '艾文',
    date: '1个小时前',
    desc: `关注了 <a>威廉</a> `,
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/49026458?v=4',
    name: '克里斯',
    date: '1天前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/49026458?v=4',
    name: 'Vben',
    date: '2天前',
    desc: `发表文章 <a>如何编写一个Vite插件</a> `,
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/49026458?v=4',
    name: '皮特',
    date: '3天前',
    desc: `回复了 <a>杰克</a> 的问题 <a>如何进行项目优化？</a>`,
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/49026458?v=4',
    name: '杰克',
    date: '1周前',
    desc: `关闭了问题 <a>如何运行项目</a> `,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: 'esbuild',
    icon: 'logos:esbuild',
    color: '',
    desc: '不要等待机会，而要创造机会。',
    group: '运维人员',
    date: '2021-04-01',
  },
  {
    title: 'Vue',
    icon: 'vscode-icons:file-type-vue',
    color: '#3fb27f',
    desc: '现在的你决定将来的你。',
    group: '算法组',
    date: '2021-04-01',
  },
  {
    title: 'Vite',
    icon: 'vscode-icons:file-type-vite',
    color: '#e18525',
    desc: '没有什么才能比努力更重要。',
    group: '上班摸鱼',
    date: '2021-04-01',
  },
  {
    title: 'Windi CSS',
    icon: 'simple-icons:windicss',
    color: '#378dee',
    desc: '热情和欲望可以突破一切难关。',
    group: 'UI',
    date: '2021-04-01',
  },
  {
    title: 'antd',
    icon: 'logos:ant-design',
    color: '#00d8ff',
    desc: '健康的身体是实现目标的基石。',
    group: '技术牛',
    date: '2021-04-01',
  },
  {
    title: 'Echarts',
    icon: 'simple-icons:apacheecharts',
    color: '#e43961',
    desc: '路是走出来的，而不是空想出来的。',
    group: '架构组',
    date: '2021-04-01',
  },
];
