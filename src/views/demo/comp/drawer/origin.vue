<template>
  <PageWrapper title="Origin Drawer">
    <a-button type="primary" class="my-4" @click="openDrawer"> 打开 Drawer </a-button>
    <a-drawer
      title="Drawer Title"
      v-model:visible="drawerVisible"
      :width="500"
      :footer-style="{ textAlign: 'right' }"
    >
      <div v-for="i in 80" :key="i">
        {{ i }}
      </div>
      <template #footer>
        <Space>
          <a-button @click="handleCancel">取消</a-button>
          <a-button type="primary" @click="handleOk">确认</a-button>
        </Space>
      </template>
    </a-drawer>
  </PageWrapper>
</template>
<script setup>
  import { ref } from 'vue';
  import { Drawer as ADrawer, Space } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';

  const drawerVisible = ref(false);

  const openDrawer = () => {
    drawerVisible.value = true;
  };

  const handleCancel = () => {
    drawerVisible.value = false;
  };

  const handleOk = () => {
    drawerVisible.value = false;
  };
</script>
