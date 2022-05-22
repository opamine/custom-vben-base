<template>
  <div class="bg-white m-4 p-4">
    目前 mock 了两个用户数据， id为 1 和 2 具体返回的菜单可以在 mock/sys/menu.ts 内查看
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { PermissionModeEnum } from '/@/enums/appEnum';
  import { useAppStore } from '/@/store/modules/app';

  export default defineComponent({
    setup() {
      const appStore = useAppStore();

      const isBackPermissionMode = computed(
        () => appStore.getProjectConfig.permissionMode === PermissionModeEnum.BACK_END,
      );

      return {
        RoleEnum,
        isBackPermissionMode,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background-color: @component-background;
  }
</style>
