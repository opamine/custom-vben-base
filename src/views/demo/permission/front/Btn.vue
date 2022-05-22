<template>
  <PageWrapper
    title="前端权限按钮示例"
    contentBackground
    contentClass="p-4"
    content="由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"
  >
    <CurrentPermissionMode />

    <p>
      当前角色: <a> {{ userStore.getRoleList }} </a>
    </p>
    <Divider>组件方式判断权限(有需要可以自行全局注册)</Divider>
    <Authority :value="RoleEnum.SUPER">
      <a-button type="primary" class="mx-4"> 拥有super角色权限可见 </a-button>
    </Authority>

    <Authority :value="RoleEnum.TEST">
      <a-button color="success" class="mx-4"> 拥有test角色权限可见 </a-button>
    </Authority>

    <Authority :value="[RoleEnum.TEST, RoleEnum.SUPER]">
      <a-button color="error" class="mx-4"> 拥有[test,super]角色权限可见 </a-button>
    </Authority>

    <Divider>函数方式方式判断权限(适用于函数内部过滤)</Divider>
    <a-button v-if="hasPermission(RoleEnum.SUPER)" type="primary" class="mx-4">
      拥有super角色权限可见
    </a-button>

    <a-button v-if="hasPermission(RoleEnum.TEST)" color="success" class="mx-4">
      拥有test角色权限可见
    </a-button>

    <a-button v-if="hasPermission([RoleEnum.TEST, RoleEnum.SUPER])" color="error" class="mx-4">
      拥有[test,super]角色权限可见
    </a-button>

    <Divider>指令方式方式判断权限(该方式不能动态修改权限.)</Divider>
    <a-button v-auth="RoleEnum.SUPER" type="primary" class="mx-4"> 拥有super角色权限可见 </a-button>

    <a-button v-auth="RoleEnum.TEST" color="success" class="mx-4"> 拥有test角色权限可见 </a-button>

    <a-button v-auth="[RoleEnum.TEST, RoleEnum.SUPER]" color="error" class="mx-4">
      拥有[test,super]角色权限可见
    </a-button>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Divider } from 'ant-design-vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';
  import { useUserStore } from '/@/store/modules/user';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { Authority } from '/@/components/Authority';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { PageWrapper, CurrentPermissionMode, Divider, Authority },
    setup() {
      const { hasPermission } = usePermission();
      const userStore = useUserStore();

      return {
        userStore,
        RoleEnum,
        hasPermission,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background-color: @component-background;
  }
</style>
