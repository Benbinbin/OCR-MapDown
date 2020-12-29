
# OCR-Mapdown

[OCR-Mapdown](https://benbinbin.github.io/OCR-MapDown/) 是 Mapdown 网页应用的一个功能模块，主要针对书摘获取场景，用于从图片（可以上传图片或调用摄像头进行拍摄）中识别文本。目前使用 Tesseract.js 实现纯前端的 OCR 功能。

也可以访问 [Gitee Pages](https://benbinbin.gitee.io/ocr-mapdown) 使用。

*Mapdown 是一款书摘管理 Web App，设计图可以参考[该帖子](https://twitter.com/Benbinbin_fun/status/1341417515033903105)或 [Dribbble 页面](https://dribbble.com/BinBinDesign)；桌面版交互演示可以查看[这个帖子](https://weibo.com/tv/show/1034:4585086700421226)，在线交互可以查看[这里](https://www.figma.com/proto/QSAKQLMvNcrrzuUucUHAC7/MapDown?node-id=184%3A900)；手机版交互演示可以查看[这个帖子](https://weibo.com/tv/show/1034:4585086473928725)，在线交互可以查看[这里](https://www.figma.com/proto/QSAKQLMvNcrrzuUucUHAC7/MapDown?node-id=277%3A1502)。*

## 技术

* 使用 [Vue.js](https://cn.vuejs.org/) 作为前端框架
* 使用 [Bootstrap](https://getbootstrap.com/) 作为 UI 框架
* 使用 [tesseract.js](https://tesseract.projectnaptha.com/) 作为 OCR 引擎
* 使用 [glfx.js](http://evanw.github.io/glfx.js/) 作为图片编辑器

## 路线
- [ ] 增添其他 OCR 引擎
- [ ] 串接后端数据库，增添保存图片和识别结果功能
- [ ] 增强图片预处理功能，提高识别率
    - [ ] 图片扭曲矫正功能
    - [ ] 图片自动色彩调整
    - [ ] 多区域框选，分区识别
- [ ] 增强识别结果编辑器功能

## 参考
* [JavaScript OCR demo](https://kdzwinel.github.io/JS-OCR-demo/)
* [OCR in the browser with Tesseract.js](https://golb.hplar.ch/2019/07/ocr-with-tesseractjs.html)
* [Capture Audio and Video in HTML5](https://www.html5rocks.com/en/tutorials/getusermedia/intro/)
* [HTML5 Canvas Tutorials for Beginners | Become a Canvas Pro](https://youtube.com/playlist?list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL)
* [Unreal Webcam Fun with getUserMedia() and HTML5 Canvas - #JavaScript30 19/30](https://youtu.be/ElWFcBlVk-o)
* [Build A Javascript OCR App Tutorial](https://youtu.be/a1I3tcALTlc)


## 协议
遵循 [MIT 协议](https://github.com/Benbinbin/OCR-MapDown/blob/main/LICENSE)。