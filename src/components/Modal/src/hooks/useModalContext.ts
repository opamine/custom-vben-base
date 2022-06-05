import { InjectionKey } from 'vue';
import { createContext, useContext } from '/@/hooks/core/useContext';

export interface ModalContextProps {
  redoModalHeight: () => void;
}

const key: InjectionKey<ModalContextProps> = Symbol();

export const createModalContext = (context: ModalContextProps) => {
  return createContext<ModalContextProps>(context, key);
};

export const useModalContext = () => {
  return useContext<ModalContextProps>(key);
};
