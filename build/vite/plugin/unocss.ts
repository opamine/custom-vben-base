import type { PluginOption } from 'vite';
import UnoCSS from 'unocss/vite';
import { presetTypography, presetUno } from 'unocss';

export function configUnocssPlugin(): PluginOption | PluginOption[] {
  const plugins: PluginOption[] = [];

  plugins.push(
    UnoCSS({
      presets: [presetUno(), presetTypography()],
    }),
  );
  return plugins;
}
