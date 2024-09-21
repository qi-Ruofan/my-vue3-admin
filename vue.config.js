const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack').default;
const Components = require('unplugin-vue-components/webpack').default;
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const IconsResolver = require('unplugin-icons/resolver').default; // 修正引入路径
const Icons = require('unplugin-icons/webpack').default;
const path = require('path');

// 定义 pathSrc 路径
const pathSrc = path.resolve(__dirname, 'src');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 自动导入 API
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      // 自动注册组件
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ['ep'],  // ep 是 Element Plus 图标集合
          }),
        ],
        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
      // 自动安装图标
      Icons({
        autoInstall: true,
      }),
    ],
  },
});
