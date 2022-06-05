<template>
  <BasicModal
    v-bind="$attrs"
    destroyOnClose
    @register="register"
    title="Modal Title"
    :helpMessage="['提示1', '提示2']"
    @visible-change="handleShow"
  >
    <template #insertFooter>
      <a-button type="primary" danger @click="setLines" :disabled="loading">点我更新内容</a-button>
    </template>
    <template v-if="!loading">
      <ul>
        <li v-for="index in lines" :key="index">加载完成{{ index }}！</li>
      </ul>
    </template>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  export default defineComponent({
    components: { BasicModal },
    setup() {
      const loading = ref(true);
      const lines = ref(10);
      const [register, { setModalProps, redoModalHeight }] = useModalInner();

      watch(
        () => lines.value,
        () => {
          redoModalHeight();
        },
      );

      function handleShow(visible: boolean) {
        if (visible) {
          loading.value = true;
          setModalProps({ loading: true, okButtonProps: { disabled: true } });
          setTimeout(() => {
            lines.value = Math.round(Math.random() * 30 + 5);
            loading.value = false;
            setModalProps({ loading: false, okButtonProps: { disabled: false } });
          }, 3000);
        }
      }

      function setLines() {
        lines.value = Math.round(Math.random() * 20 + 10);
      }
      return { register, loading, handleShow, lines, setLines };
    },
  });
</script>
