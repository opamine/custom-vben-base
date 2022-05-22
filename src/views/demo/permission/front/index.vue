<template>
  <PageWrapper
    title="前端权限示例"
    contentBackground
    contentClass="p-4"
    content="由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"
  >
    <CurrentPermissionMode />

    <p>
      当前角色: <a> {{ userStore.getRoleList }} </a>
    </p>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useUserStore } from '/@/store/modules/user';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { PageWrapper } from '/@/components/Page';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';

  export default defineComponent({
    components: { CurrentPermissionMode, PageWrapper },
    setup() {
      const userStore = useUserStore();

      return {
        userStore,
        RoleEnum,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background-color: @component-background;
  }
</style>
