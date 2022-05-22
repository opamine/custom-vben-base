<template>
  <PageWrapper contentBackground title="按钮权限控制" contentClass="p-4">
    <p>
      当前拥有的code列表: <a> {{ permissionStore.getPermCodeList }} </a>
    </p>
    <Divider />

    <Divider>组件方式判断权限</Divider>
    <Authority :value="'1000'">
      <a-button type="primary" class="mx-4"> 拥有code ['1000']权限可见 </a-button>
    </Authority>

    <Authority :value="'2000'">
      <a-button color="success" class="mx-4"> 拥有code ['2000']权限可见 </a-button>
    </Authority>

    <Authority :value="['1000', '2000']">
      <a-button color="error" class="mx-4"> 拥有code ['1000','2000']角色权限可见 </a-button>
    </Authority>

    <Divider>函数方式方式判断权限</Divider>
    <a-button v-if="hasPermission('1000')" type="primary" class="mx-4">
      拥有code ['1000']权限可见
    </a-button>

    <a-button v-if="hasPermission('2000')" color="success" class="mx-4">
      拥有code ['2000']权限可见
    </a-button>

    <a-button v-if="hasPermission(['1000', '2000'])" color="error" class="mx-4">
      拥有code ['1000','2000']角色权限可见
    </a-button>

    <Divider>指令方式方式判断权限</Divider>
    <a-button v-auth="'1000'" type="primary" class="mx-4"> 拥有code ['1000']权限可见 </a-button>

    <a-button v-auth="'2000'" color="success" class="mx-4"> 拥有code ['2000']权限可见 </a-button>

    <a-button v-auth="['1000', '2000']" color="error" class="mx-4">
      拥有code ['1000','2000']角色权限可见
    </a-button>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { Divider } from 'ant-design-vue';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { Authority } from '/@/components/Authority';
  import { usePermissionStore } from '/@/store/modules/permission';
  import { PermissionModeEnum } from '/@/enums/appEnum';
  import { PageWrapper } from '/@/components/Page';
  import { useAppStore } from '/@/store/modules/app';

  export default defineComponent({
    components: { PageWrapper, Divider, Authority },
    setup() {
      const { hasPermission } = usePermission();
      const permissionStore = usePermissionStore();
      const appStore = useAppStore();
      const isBackPermissionMode = computed(
        () => appStore.getProjectConfig.permissionMode === PermissionModeEnum.BACK_END,
      );

      return {
        hasPermission,
        permissionStore,
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
