<template>
  <div class="p-4">
    <CollapseContainer title="Antv Icon使用 (直接按需引入相应组件即可)">
      <div class="flex justify-around">
        <GithubFilled :style="{ fontSize: '30px', color: '#409eff' }" />
      </div>
    </CollapseContainer>

    <CollapseContainer title="IconIfy 组件使用" class="my-5">
      <div class="flex justify-around flex-wrap">
        <Icon icon="vscode-icons:file-type-vue" :size="30" :color="'#409eff'" />
      </div>
    </CollapseContainer>

    <CollapseContainer title="svg 雪碧图" class="my-5">
      <div class="flex justify-around flex-wrap">
        <SvgIcon name="test" size="32" />
      </div>
    </CollapseContainer>

    <CollapseContainer title="图标选择器(Iconify)" class="my-5">
      <div class="flex justify-around flex-wrap">
        <IconPicker />
      </div>
    </CollapseContainer>

    <CollapseContainer title="图标选择器(Svg)" class="my-5">
      <div class="flex justify-around flex-wrap">
        <IconPicker mode="svg" />
      </div>
    </CollapseContainer>
  </div>
</template>
<script lang="ts" setup>
  import { CollapseContainer } from '/@/components/Container/index';
  import { GithubFilled } from '@ant-design/icons-vue';
  import { Icon, IconPicker, SvgIcon } from '/@/components/Icon/index';
</script>
