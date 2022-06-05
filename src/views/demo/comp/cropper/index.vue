<template>
  <PageWrapper title="图片裁剪示例">
    <Row :gutter="12">
      <Col span="6">
        <CollapseContainer
          title="头像裁剪"
          helpMessage="头像裁剪需要开启测试接口服务才能进行上传测试"
        >
          <div style="text-align: center"
            ><CropperAvatar :uploadApi="uploadApi" :value="avatar"
          /></div>
        </CollapseContainer>
      </Col>
      <Col span="18">
        <CollapseContainer title="常规裁剪">
          <div class="container p-4">
            <div class="cropper-container">
              <CropperImage ref="refCropper" :src="img" @cropend="handleCropend" />
            </div>
            <div class="croppered-container">
              <img v-if="cropperedImg" :src="cropperedImg" class="croppered" alt="croppered-img" />
            </div>
          </div>
          <p v-if="cropperedImg" class="pl-4"
            ><span style="color: #409edf">裁剪后图片信息：</span>{{ info }}</p
          >
        </CollapseContainer>
      </Col>
    </Row>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Row, Col } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { CollapseContainer } from '/@/components/Container';
  import { CropperImage, CropperAvatar } from '/@/components/Cropper';
  import { uploadApi } from '/@/api/sys/upload';
  import img from '/@/assets/images/header.jpg';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    components: {
      Row,
      Col,
      PageWrapper,
      CropperImage,
      CollapseContainer,
      CropperAvatar,
    },
    setup() {
      const info = ref('');
      const cropperedImg = ref('');
      const circleInfo = ref('');
      const userStore = useUserStore();
      const avatar = ref(userStore.getUserInfo?.avatar || '');
      function handleCropend({ imgBase64, imgInfo }) {
        info.value = imgInfo;
        cropperedImg.value = imgBase64;
      }

      return {
        img,
        info,
        circleInfo,
        cropperedImg,
        handleCropend,
        avatar,
        uploadApi: uploadApi as any,
      };
    },
  });
</script>

<style scoped lang="less">
  .container {
    display: flex;
    align-items: center;

    .cropper-container {
      width: 50%;
    }

    .croppered-container {
      width: 50%;
      display: flex;
      justify-content: center;

      .croppered {
        height: 252px;
      }
    }

    p {
      margin: 10px;
    }
  }
</style>
