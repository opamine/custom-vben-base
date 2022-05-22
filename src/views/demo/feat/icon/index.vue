<template>
  <div class="m-4">
    <CollapseContainer title="Antv Icon使用 (直接按需引入相应组件即可)">
      <div class="flex justify-around">
        <GithubFilled :style="{ fontSize: '30px', color: '#409eff' }" />
      </div>
    </CollapseContainer>

    <CollapseContainer title="IconIfy 组件使用" class="my-5">
      <div class="flex justify-around flex-wrap">
        <Icon icon="ion:layers-outline" :size="30" :color="'#409eff'" />
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

    <Alert
      show-icon
      message="推荐使用Iconify组件"
      description="Icon组件基本包含所有的图标,在下面网址内你可以查询到你想要的任何图标。并且打包只会打包所用到的图标。"
    />
  </div>
</template>
<script lang="ts" setup>
  import { CollapseContainer } from '/@/components/Container/index';
  import { Alert } from 'ant-design-vue';
  import { GithubFilled } from '@ant-design/icons-vue';
  import { Icon, IconPicker, SvgIcon } from '/@/components/Icon/index';
</script>
