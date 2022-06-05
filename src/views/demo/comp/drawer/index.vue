<template>
  <PageWrapper title="Drawer">
    <Alert message="使用 useDrawer 进行抽屉操作" show-icon />
    <a-button type="primary" class="my-4" @click="openDrawer1WithLoading"> 打开 Drawer1 </a-button>

    <Alert message="内外同时控制显示隐藏" show-icon />
    <a-button type="primary" class="my-4" @click="openDrawer2"> 打开 Drawer2 </a-button>

    <Alert message="内外数据交互" show-icon />
    <Space>
      <a-button type="primary" class="my-4" @click="openDrawer4WithData(1)">
        打开 Drawer3 并传递数据 1
      </a-button>
      <a-button type="primary" class="my-4" @click="openDrawer4WithData(2)">
        打开 Drawer3 并传递数据 2
      </a-button>
    </Space>
    <BasicDrawer
      title="Drawer1 Title"
      width="50%"
      :show-footer="true"
      ok-type="danger"
      @register="register1"
      >Drawer1 Content.</BasicDrawer
    >
    <BasicDrawer title="Drawer2 Title" width="50%" @register="register2">
      <a-button type="primary" @click="closeDrawer2"> 关闭 Drawer2 </a-button>
    </BasicDrawer>
    <BasicDrawer title="Drawer Title" width="50%" @register="register3">
      <BasicForm @register="registerForm"
    /></BasicDrawer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert, Space } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicDrawer, useDrawer } from '/@/components/Drawer';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';

  const formSchemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 12,
      },
      defaultValue: '111',
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 12,
      },
    },
  ];

  export default defineComponent({
    components: { Alert, Space, PageWrapper, BasicDrawer, BasicForm },
    setup() {
      const [register1, { openDrawer: openDrawer1, setDrawerProps: setDrawer1Props }] = useDrawer();
      const [register2, { openDrawer: openDrawer2, closeDrawer: closeDrawer2 }] = useDrawer();

      const [registerForm, { setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas: formSchemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });
      const [register3, { openDrawer: openDrawer3 }] = useDrawer((data) => {
        setFieldsValue({
          field2: data.data,
          field1: data.info,
        });
      });

      const openDrawer1WithLoading = () => {
        openDrawer1();
        setDrawer1Props({ loading: true });
        setTimeout(() => {
          setDrawer1Props({ loading: false });
        }, 2000);
      };

      const openDrawer4WithData = (val: number) => {
        openDrawer3({
          data: 'content' + val,
          info: 'Info' + val,
        });
      };

      return {
        register1,
        openDrawer1,
        openDrawer1WithLoading,
        register2,
        openDrawer2,
        closeDrawer2,
        register3,
        openDrawer4WithData,
        registerForm,
      };
    },
  });
</script>
