# autoTestDemo自動化測試範例

## mocha 、 should 、 grunt
|名稱|說明|
|---|---|
|mocha|為測試框架支援TDD及BDD語句|
|should|Node.js的assert為支援TDD判定語句，should為支援BDD判定語句|
|grunt|為自動化/配置執行的工具|

### 說明

此範例Demo利用mocha配合should的BBD測試語句，加上grunt的自動化功能，最後將測試結果由istanbul產生報告

### 範例

下載網址
https://github.com/zeemanliao/autoTestDemo

### 安裝
    # npm install

### 主要目錄檔案結構
```
autoTestDemo
├──coverage
│  └──lcov-report
│     └──index.html
├──lib
│  ├──asyncModel
│  │  └──index.js
│  ├──syncModel
│  │  └──index.js
│  └──testModel.js
├──test
│  ├──autoTestAsyncDemo.test.js
│  └──autoTestSyncDemo.test.js
└──gruntfile.js

```
|目錄檔案|說明|
|---|---|
|coverage|報告產出目錄，可至gruntfile.js自行指定|
|lib|專案模組內容，也是本範列的測試目標|
|asyncModel|非同步程式範列|
|syncModel|同步程式範列|
|testModel.js|工廠方法，用來建立同步及非同步程式|
|test|放置測試內容，如果寫自動測試範例|
|gruntfile.js|自動化執行相關設定|
|index.html|產出的報告首頁|

### 執行測試
    # grunt test

