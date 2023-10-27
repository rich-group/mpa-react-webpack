### 初始化

初始化工作区子包`js` 和 `ts`
```sh
npm init -y -w ./examples/js
npm init -y -w ./examples/ts
```

初始化命令完成后，会自动创建 `examples` 文件夹，里面多了 `js` 和 `ts` 两个项目

并且 package.json 文件中多了 `workspaces` 的配置

```json
{
  "workspaces": [
    "examples/js",
    "examples/ts"
  ]
}
```


### 安装依赖

全局安装子包依赖

添加`abbrev` 作为 工作区 `js` 的依赖项。可以使用工作区配置`（-w）`告诉 npm 安装包应作为所提供工作区`（js）`的依赖项`（abbrev）`
```sh
npm install abbrev -w js
```

执行完成后，发现依赖包 `abbrev` 安装到 `根目录` 的 `node_modules` 下，而依赖配置添加到了工作区 `js` 的 `package.json` 中。

```txt
├── examples
│   ├── js
│   ├── ts
├── node_modules
│   ├── abbrev
```

### 执行

```sh
npm run test --workspace=js
```

同时执行多个工作区
```sh
npm run test --workspace=js --workspace=ts
# 或, 不过它们的执行顺序是按照在 package.json 中 workspaces 定义的顺序来的
npm run test --workspaces
```
