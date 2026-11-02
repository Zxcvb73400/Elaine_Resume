# 鄭依玲｜個人網站

資料整合與流程自動化工程師的個人網站，介紹我的工作經歷、專案與技能。

- **聯絡**：qawszyl@gmail.com

## 網站內容

| 頁面 | 內容 |
| --- | --- |
| 首頁 | 標語、快速了解、解決問題、怎麼做事、專案、工作經歷、聯絡我 |
| 專案 | 每個專案的問題、做法與成果 |
| 經歷 | 工作、接案、進修與學歷 |
| 技能 | 技能分組、證照與訓練 |
| 履歷 | 一頁式履歷 PDF，可線上閱讀或下載 |

## 技術

- HTML、CSS、JavaScript（未使用框架）
- 響應式設計（RWD），桌機與手機皆可瀏覽
- 深色／淺色模式切換，並跟隨系統設定
- 以網址 hash 切換頁面（例如 `#projects`、`#experience`）
- 字型：Google Fonts（IBM Plex Sans、IBM Plex Mono、Noto Sans TC）

## 檔案結構

```
.
├── index.html      # 網頁結構與文字內容
├── css/
│   └── style.css   # 版面、配色（:root 色彩變數）、深色模式
├── js/
│   └── main.js     # 頁面切換、深淺色切換、複製 Email
├── assets/
│   └── resume.pdf  # 一頁式履歷（網站的下載履歷按鈕）
└── README.md
```

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可，不需要安裝任何套件。

## 部署到 GitHub Pages

1. 將專案推送到 GitHub repo 的 `main` 分支。
2. 到 repo 的 **Settings → Pages**。
3. Source 選擇 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/ (root)`，按 Save。
4. 約 1–2 分鐘後，網站會出現在 `https://〔帳號〕.github.io/〔repo 名稱〕/`。
