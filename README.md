# [mean_template][mean_template]
簡單的 MEAN Stack 範本

-----------------------------------

## 進度:

 - [ ] 參考 MEAN Web Development 第三章建立檔案結構
     - [x] 資料夾目錄
     - [x] express routes
     - [x] express static
     - [x] ejs views
     - [x] 個別環境參數: `env`
 - [ ] 加入 HTTPS 連線能力
     - [ ] SSL Self-Sign
     - [ ] `https` package
     - [ ] env config
 - [ ] 加入 / 更新 相依套件
     - [x] `morgan @1.17.2`
     - [x] `debug @1.8.2`
     - [x] `cookie-parser @1.4.3`
     - [x] `serve-favicon @2.4.3`
 - [ ] 改善 console 輸出
     - [ ] 使用 `debug` 重寫
     - [ ] 區分環境別
 - [ ] 以 ES6 重構
     - [ ] 使用 `const`
     - [ ] 使用 `let`
 - [ ] 使用 Angular.js
     - [x] bower package manager
     - [x] bootstrap Angular.js
          - [x] Auto-Bootstrap (removed)
          - [x] Manual-Bootstrap
     - [ ] load html fraction
     - [ ] make HTTP RESTful request
 - [ ] 整合 Mongo.DB
 - [ ] 加入 User-Authentication 機制

[mean_template]: https://github.com/AlexLeoTW/mean_template


-----------------------------------

## 說明

套件管理工具使用 `npm` 和 `bower`，執行前請勿必確保安裝 Node.js 和 Bower 本機程式

### 安裝相依套件：

```
npm install
```

### 執行：

```
npm start
```

### 資料夾結構：

> A horizontal project structure is based on the division of folders and files by their
> functional role rather than by the feature they implement, which means that all
> the application files are placed inside a main application folder that contains an
> MVC folder structure. This also means that there is a single `controllers` folder
> that contains all of the application controllers, a single `models` folder that contains
> all of the application models, and so on.

```
├── app                     where you keep your Express application logic
│   ├── controllers             
│   ├── modules                 
│   ├── routes                  
│   └── views                   
├── config                  each module will be configured in a dedicated JavaScript file
│   ├── env                     
│   ├── config.js               configure your Express application here
│   └── express.js              initialize your Express application here
├── public                  client-side files (vertically structured)
│   ├── <section name>          Each file is placed in a proper folder with a proper filename that usefully describes what sort of code it contains.
│   │   ├── config                  AngularJS application configuration
│   │   ├── controllers             AngularJS application controllers
│   │   ├── css
│   │   ├── directives              AngularJS application directives
│   │   ├── filters                 AngularJS application filters
│   │   ├── img
│   │   └── views                   AngularJS application views
│   ├── lib                     where bower packages located
│   └── application.js          where you initialize your AngularJS application
├── bower.json              client-side package dependency
├── package.json            server-side package dependency
└── server.js               application entry point
```

### 檔案命名規則

> While developing your application, you'll soon notice that you end up with many
> files with the same name. The reason is that MEAN applications often have a parallel
> MVC structure for both the Express and AngularJS components.

建議命名規則：
```
[feature].[side].[role].js
```

例如：

`index` 的 server-side controller 就應該叫做 `index.server.controller.js`
