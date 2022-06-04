<template>
  <PageWrapper title="Drawer">
    <Alert message="使用 useDrawer 进行抽屉操作" show-icon />
    <a-button type="primary" class="my-4" @click="openDrawerLoading"> 打开Drawer </a-button>

    <Alert message="内外同时控制显示隐藏" show-icon />
    <a-button type="primary" class="my-4" @click="openDrawer2(true)"> 打开Drawer </a-button>

    <Alert message="内外数据交互" show-icon />
    <a-button type="primary" class="my-4" @click="send"> 打开Drawer并传递数据 </a-button>

    <BasicDrawer title="Drawer Title" width="50%" @register="register1">Drawer Info.</BasicDrawer>
    <Drawer2 @register="register2" />
    <Drawer4 @register="register4" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicDrawer, useDrawer } from '/@/components/Drawer';
  import Drawer2 from './Drawer2.vue';
  import Drawer4 from './Drawer4.vue';

  export default defineComponent({
    components: { Alert, PageWrapper, BasicDrawer, Drawer2, Drawer4 },
    setup() {
      const [register1, { openDrawer: openDrawer1, setDrawerProps }] = useDrawer();
      const [register2, { openDrawer: openDrawer2 }] = useDrawer();
      const [register4, { openDrawer: openDrawer4 }] = useDrawer();
      function send() {
        openDrawer4(true, {
          data: 'content',
          info: 'Info',
        });
      }
      function openDrawerLoading() {
        openDrawer1();
        setDrawerProps({ loading: true });
        setTimeout(() => {
          setDrawerProps({ loading: false });
        }, 2000);
      }
      return {
        register1,
        openDrawer1,
        register2,
        openDrawer2,
        register4,
        send,
        openDrawerLoading,
      };
    },
  });
</script>
