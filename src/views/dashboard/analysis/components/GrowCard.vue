<template>
  <div class="md:flex">
    <template v-for="(item, index) in growCardList" :key="item.title">
      <Card
        size="small"
        :loading="loading"
        :title="item.title"
        class="md:w-1/4 w-full !md:mt-0"
        :class="{ '!md:mr-4': index + 1 < 4, '!mt-4': index > 0 }"
      >
        <template #extra>
          <Tag :color="item.color">{{ item.action }}</Tag>
        </template>

        <div class="py-2 px-4 flex justify-between">
          <CountTo :prefix="item.prefix" :startVal="0" :endVal="item.value" class="text-2xl" />
          <Icon :icon="item.icon" :size="40" />
        </div>

        <div class="py-2 px-4 flex justify-between">
          <span>总{{ item.title }}</span>
          <CountTo :prefix="item.prefix" :startVal="0" :endVal="item.total" />
        </div>
      </Card>
    </template>
  </div>
</template>
<script lang="ts" setup>
  import { CountTo } from '/@/components/CountTo/index';
  import { Icon } from '/@/components/Icon';
  import { Tag, Card } from 'ant-design-vue';

  defineProps({
    loading: {
      type: Boolean,
    },
  });

  const growCardList = [
    {
      title: '访问数',
      icon: 'el:universal-access',
      value: 2000,
      total: 120000,
      color: 'green',
      action: '日',
    },
    {
      title: '成交额',
      icon: 'cib:ideal',
      value: 20000,
      total: 500000,
      color: 'blue',
      action: '周',
      prefix: '$',
    },
    {
      title: '下载数',
      icon: 'entypo:download',
      value: 8000,
      total: 120000,
      color: 'orange',
      action: '月',
    },
    {
      title: '成交数',
      icon: 'bxs:pie-chart-alt-2',
      value: 5000,
      total: 50000,
      color: 'pink',
      action: '年',
    },
  ];
</script>
