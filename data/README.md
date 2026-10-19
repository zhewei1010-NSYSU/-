# 校園漫遊資料來源

- 國小名錄：教育部統計處，115 學年度國民小學名錄，https://data.gov.tw/dataset/6087 。原始 JSON：https://stats.moe.gov.tw/files/school/115/e1_new.json 。2026-10-19 下載，2,609 筆，以教育部六碼學校代碼識別。縣市碼移除、台字正規化為臺，地址依鄉鎮市區名稱分類。
- 景點：交通部觀光署，觀光開放資料景點清單，https://media.taiwan.net.tw/zh-tw/portal/travel?DataCode=Attraction 。從官方「下載搜尋結果」取得 CSV，2026-10-19 下載，6,185 筆，按縣市分檔；描述擷取前 180 字，保留原提供機關、更新時間與官方詳情連結。以相同縣市及鄉鎮市區篩選，未推算學校座標或距離，資料無收錄時明示。
- 縣市圖資：內政部縣市界線，由 Daniel Kao 的 taiwan-atlas 專案提供簡化 TopoJSON，https://github.com/dkaoster/taiwan-atlas 。以 counties-10t.json 轉為 SVG 路徑；離島分置示意框，非實際相對位置。鄉鎮名稱取自 towns-10t.json，用於地址分類。授權全文見 taiwan-atlas-LICENSE.txt。

教育部及觀光署政府開放資料依「政府資料開放授權條款－第1版」利用：https://data.gov.tw/license 。
本版為下載快照，不宣稱即時更新，亦不宣稱學校開放參觀。
