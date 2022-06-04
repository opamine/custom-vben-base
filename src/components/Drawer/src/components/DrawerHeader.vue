<template>
  <BasicTitle :class="prefixCls">
    <slot name="title"></slot>
    {{ !$slots.title ? title : '' }}
  </BasicTitle>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTitle } from '/@/components/Basic';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'BasicDrawerHeader',
    components: { BasicTitle },
    props: {
      title: propTypes.string,
    },
    setup() {
      const { prefixCls } = useDesign('basic-drawer-header');

      return { prefixCls };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-basic-drawer-header';
  @footer-height: 60px;
  .@{prefix-cls} {
    display: flex;
    height: 100%;
    align-items: center;
  }
</style>
