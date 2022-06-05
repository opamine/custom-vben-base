import type { DrawerInstance, ReturnMethods, DrawerProps, UseDrawerReturnType } from './typing';
import {
  ref,
  getCurrentInstance,
  unref,
  reactive,
  watchEffect,
  nextTick,
  toRaw,
  computed,
} from 'vue';
import { isProdMode } from '/@/utils/env';
import { isFunction } from '/@/utils/is';
import { tryOnUnmounted } from '@vueuse/core';
import { isEqual } from 'lodash-es';
import { error } from '/@/utils/log';

const dataTransferRef = reactive<any>({});

const visibleData = reactive<{ [key: number]: boolean }>({});

/**
 * @description: Applicable to separate drawerInstanceRef and call outside
 */
export const useDrawer = (callbackFn?: Fn): UseDrawerReturnType => {
  if (!getCurrentInstance()) {
    error('useDrawer() can only be used inside setup() or functional components!');
  }
  const drawerInstanceRef = ref<DrawerInstance | null>(null);
  const currentInstance = getCurrentInstance();
  const loaded = ref<boolean | null>(false);
  const uid = ref<string>('');

  const register = (drawerInstance: DrawerInstance, uuid: string) => {
    isProdMode() &&
      tryOnUnmounted(() => {
        drawerInstanceRef.value = null;
        loaded.value = null;
        dataTransferRef[unref(uid)] = null;
      });

    if (unref(loaded) && isProdMode() && drawerInstance === unref(drawerInstanceRef)) {
      return;
    }
    uid.value = uuid;
    drawerInstanceRef.value = drawerInstance;
    loaded.value = true;

    currentInstance?.emit('register', drawerInstance, uuid);

    drawerInstance.emitVisible = (visible: boolean, uid: number) => {
      visibleData[uid] = visible;
    };
  };

  const getInstance = () => {
    const instance = unref(drawerInstanceRef);
    if (!instance) {
      error('useDrawer instance is undefined!');
    }
    return instance;
  };

  watchEffect(() => {
    const data = dataTransferRef[unref(uid)];
    if (!data) return;
    if (!callbackFn || !isFunction(callbackFn)) return;
    nextTick(() => {
      callbackFn(data);
    });
  });

  const methods: ReturnMethods = {
    openDrawer: <T = any>(data?: T, openOnSet = true): void => {
      getInstance()?.setDrawerProps({
        visible: true,
      });
      if (!data) return;

      if (openOnSet) {
        dataTransferRef[unref(uid)] = null;
        dataTransferRef[unref(uid)] = toRaw(data);
        return;
      }
      const equal = isEqual(toRaw(dataTransferRef[unref(uid)]), toRaw(data));
      if (!equal) {
        dataTransferRef[unref(uid)] = toRaw(data);
      }
    },
    closeDrawer: () => {
      getInstance()?.setDrawerProps({ visible: false });
    },
    setDrawerProps: (props: Partial<DrawerProps>): void => {
      getInstance()?.setDrawerProps(props);
    },
    getVisible: computed((): boolean => {
      return visibleData[~~unref(uid)];
    }),
  };

  return [register, methods];
};
