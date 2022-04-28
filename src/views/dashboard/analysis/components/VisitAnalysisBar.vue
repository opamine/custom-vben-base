<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts">
  import { basicProps } from './props';
</script>
<script lang="ts" setup>
  import { onMounted, ref, Ref } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  defineProps({
    ...basicProps,
  });

  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
  onMounted(() => {
    setOptions({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            width: 1,
            color: '#019680',
          },
        },
      },
      label: {
        show: true,
        position: 'top',
      },
      grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
      xAxis: {
        type: 'category',
        data: [...new Array(12)].map((_item, index) => `${index + 1}月`),
      },
      yAxis: {
        type: 'value',
        max: 8000,
        splitNumber: 4,
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(255,255,255,0.1)', 'rgba(226,226,226,0.1)'],
          },
        },
      },
      series: [
        {
          data: [3000, 2000, 3333, 5000, 3200, 4200, 3200, 2100, 3000, 5100, 6000, 3200, 4800],
          type: 'bar',
          barMaxWidth: 50,
          itemStyle: {
            color: '#6d65ffcc',
            borderColor: '#6d65ff',
            borderWidth: 2,
          },
        },
        {
          data: [1000, 2000, 3533, 2000, 1200, 5200, 3200, 2100, 2000, 5100, 7000, 2200, 1800],
          type: 'bar',
          barMaxWidth: 50,
          itemStyle: {
            color: '#ff6784cc',
            borderColor: '#ff6784',
            borderWidth: 2,
          },
        },
      ],
    });
  });
</script>
