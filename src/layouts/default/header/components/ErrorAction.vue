<template>
  <div :class="prefixCls">
    <Tooltip
      :title="t('layout.header.tooltipErrorLog')"
      placement="bottom"
      :mouseEnterDelay="0.5"
      @click="handleToErrorList"
    >
      <Badge :count="getCount" :offset="[0, 12]" :overflowCount="99">
        <BugOutlined />
      </Badge>
    </Tooltip>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { Tooltip, Badge } from 'ant-design-vue';
  import { BugOutlined } from '@ant-design/icons-vue';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { useErrorLogStore } from '/@/store/modules/errorLog';
  import { PageEnum } from '/@/enums/pageEnum';

  import { useDesign } from '/@/hooks/web/useDesign';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'ErrorAction',
    components: { Tooltip, Badge, BugOutlined },

    setup() {
      const { t } = useI18n();
      const { push } = useRouter();
      const errorLogStore = useErrorLogStore();
      const { prefixCls } = useDesign('header-bug');

      const getCount = computed(() => errorLogStore.getErrorLogListCount);

      function handleToErrorList() {
        push(PageEnum.ERROR_LOG_PAGE).then(() => {
          errorLogStore.setErrorLogListCount(0);
        });
      }

      return {
        t,
        getCount,
        handleToErrorList,
        prefixCls,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-header-bug';

  .@{prefix-cls} {
    .ant-badge {
      font-size: 18px;

      svg {
        width: 0.9em;
      }
    }
  }
</style>
