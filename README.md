# 修仙世界·熵变系统

&gt; 纯前端模块化文字修仙游戏，GitHub Pages 直接部署即可游玩！

## 快速开始
1. Fork 或 Clone 本仓库
2. 推送至你的 GitHub
3. Settings → Pages → Branch: main → Save
4. 访问 `https://你的用户名.github.io/仓库名/`

## 技术栈
- 原生 ES Module
- 无依赖，开箱即用
- 模块化：配置 / 状态 / 事件 / 渲染 分离

## 特色
- **熵变维度**：4 大世界属性实时变化
- **多选择**：每事件 ≥ 5 项选择
- **背包使用**：物品可点击使用
- **多主线**：灵脉沸腾任务链已落地，易扩展

## 扩展指引
- 新增事件：在 `js/event.js` 添加函数，并在 `create()` 内调用
- 新熵变维度：在 `config.js` 的 `entropy.keys` 添加，其余自动适配
- 新物品：在 `config.js` 的 `pillPower` 添加，背包自动识别

## License
MIT
