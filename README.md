# [mean_template][mean_template]
簡單的 MEAN Stack 範本

-----------------------------------

## 進度:

 - [ ] 參考 MEAN Web Development 第三章建立檔案結構
     - [ ] 資料夾目錄
     - [x] express routes
     - [ ] express static
     - [x] ejs views
 - [ ] 使用 Angular.js
     - [x] bower package manager
     - [ ] bootstrap Angular.js

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
