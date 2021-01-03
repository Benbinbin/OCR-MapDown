// OCR support language list: https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016
const languageLists = [{
  name: 'eng',
  value: '英文',
},
{
  name: 'chi_sim',
  value: '简体中文',
},
{
  name: 'chi_tra',
  value: '繁体中文',
},
{
  name: 'deu',
  value: '德文',
},
{
  name: 'fra',
  value: '法文',
},
{
  name: 'ita',
  value: '意大利文',
},
{
  name: 'jpn',
  value: '日文',
},
{
  name: 'kor',
  value: '韩文',
},
{
  name: 'lat',
  value: '拉丁文',
},
{
  name: 'rus',
  value: '俄文',
},
{
  name: 'spa',
  value: '西班牙文',
},
{
  name: 'tha',
  value: '泰文',
},
{
  name: 'afr',
  value: 'Afrikaans 南非的公用荷兰语'
},
{
  name: 'amh',
  value: 'Amharic 阿姆哈拉语'
},
{
  name: 'ara',
  value: 'Arabic 阿拉伯语'
},
{
  name: 'asm',
  value: 'Assamese 阿萨姆语'
},
{
  name: 'aze',
  value: 'Azerbaijani 阿塞拜疆语'
},
{
  name: 'aze_cyrl',
  value: 'Azerbaijani -Cyrillic 阿塞拜疆-西里尔文',
},
{
  name: 'bel',
  value: 'Belarusian 白俄罗斯语'
},
{
  name: 'ben',
  value: 'Bengali 孟加拉语'
},
{
  name: 'bod',
  value: 'Tibetan 藏文'
},
{
  name: 'bos',
  value: 'Bosnian 波斯尼亚语'
},
{
  name: 'bul',
  value: 'Bulgarian 保加利亚语'
},
{
  name: 'cat',
  value: 'Catalan （西班牙）加泰罗尼亚语'
},
{
  name: 'ceb',
  value: 'Cebuano 宿雾语'
},
{
  name: 'ces',
  value: 'Czech 捷克语'
},
{
  name: 'chr',
  value: 'Cherokee 切罗基语'
},
{
  name: 'cym',
  value: 'Welsh 威尔士语'
},
{
  name: 'dan',
  value: 'Danish 丹麦语'
},
{
  name: 'dzo',
  value: 'Dzongkha 不丹文'
},
{
  name: 'ell',
  value: 'Greek 希腊文，现代（1453，-）',
},
{
  name: 'enm',
  value: 'English 英语，中世纪（1100，-1500）',
},
{
  name: 'epo',
  value: 'Esperanto 世界语'
},
{
  name: 'est',
  value: 'Estonian 爱沙尼亚语'
},
{
  name: 'eus',
  value: 'Basque 巴斯克语'
},
{
  name: 'fas',
  value: 'Persian 波斯语'
},
{
  name: 'fin',
  value: 'Finnish 芬兰语'
},
{
  name: 'frk',
  value: 'German Fraktur 德文福拉图尔'
}
]

const languageOptions = [{
  name: 'eng',
  value: '英文',
},
{
  name: 'chi_sim',
  value: '简体中文',
},
{
  name: 'chi_tra',
  value: '繁体中文',
},
{
  name: 'deu',
  value: '德文',
},
{
  name: 'fra',
  value: '法文',
},
{
  name: 'ita',
  value: '意大利文',
},
{
  name: 'jpn',
  value: '日文',
},
{
  name: 'kor',
  value: '韩文',
},
{
  name: 'lat',
  value: '拉丁文',
},
{
  name: 'rus',
  value: '俄文',
},
{
  name: 'spa',
  value: '西班牙文',
},
{
  name: 'tha',
  value: '泰文'
},
]

const translations = {
  chi_sim: {
    'header.image_editor_title': 'Filerobot 图形编辑器',
    'header.toggle_fullscreen': '全屏',
    'header.close_modal': '关闭',
    'toolbar.download': '完成',
    'toolbar.save': '保存',
    'toolbar.apply': '应用',
    'toolbar.cancel': '取消',
    'toolbar.go_back': '返回',
    'toolbar.adjust': '调整',
    'toolbar.effects': '特效',
    'toolbar.filters': '滤镜',
    'toolbar.orientation': '方向',
    'toolbar.crop': '裁剪',
    'toolbar.resize': '大小',
    'toolbar.watermark': '水印',
    'toolbar.focus_point': '焦点',
    'toolbar.shapes': '形状',
    'toolbar.image': '图片',
    'toolbar.text': '文字',
    'adjust.brightness': '亮度',
    'adjust.contrast': '对比度',
    'adjust.exposure': '曝光',
    'adjust.saturation': '饱和',
    'orientation.rotate_l': '顺时针',
    'orientation.rotate_r': '逆时针',
    'orientation.flip_h': '水平翻转',
    'orientation.flip_v': '垂直翻转',
    'pre_resize.title': '您要在编辑图像之前降低分辨率吗？',
    'pre_resize.keep_original_resolution': '保持原始分辨率',
    'pre_resize.resize_n_continue': '调整大小并继续',
    'footer.reset': '重置',
    'footer.undo': '撤消',
    'footer.redo': '重做',
    'spinner.label': '处理中……',
    'warning.too_big_resolution': '图像的分辨率太大，可能会导致图像编辑器性能出现问题',
    'common.x': 'x',
    'common.y': 'y',
    'common.width': '宽度',
    'common.height': '高度',
    'common.custom': '自定义',
    'common.original': '原始比例',
    'common.square': '正方形',
    'common.opacity': '透明度',
    'common.apply_watermark': '添加水印',
    'common.url': '链接',
    'common.upload': '上传',
    'common.gallery': '相册',
    'common.text': '文本',
  }
}

Vue.component("tab-engine", {
  props: {
    status: {
      type: String,
      default: ''
    },
    initializing: {
      type: Boolean,
      default: false
    },
    engineReady: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      languageLists: languageLists,
      languageOptions: languageOptions,
      selectedLanguage: ['chi_sim'],
    }
  },
  template: `
    <div>
      <h2 class="text-center mt-5 mb-3">选择识别的语言</h2>
      <div class="d-flex justify-content-center">
        <p class="badge bg-secondary text-wrap lh-base">选择识别语言（可多选）以下载相应的训练数据集。如果更改了语言，需要再次初始化引擎。</p>
      </div>

      <div>
        <div class="form-check form-check-inline" v-for="item of languageOptions">
          <input :id="item.name" class="form-check-input" type="checkbox" :checked="selectedLanguage.includes(item.name)" :value="item.name" v-model="selectedLanguage">
          <label class="form-check-label" :for="item.name">{{ item.value }}</label>
        </div>

        <span>
          <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="add-options" data-bs-toggle="dropdown">
            添加更多语言选项
          </button>
          <ul class="dropdown-menu dropdown-menu-start h-50" style="overflow:auto">
            <li v-for="item of languageLists" class="form-check form-switch mx-3" :key="item.name">
              <input class="form-check-input" type="checkbox" :value="item" :id="item.name" :checked="languageOptions.includes(item)" v-model="languageOptions">
              <label class = "form-check-label" :for="item.name">{{ item.value }} </label>
            </li>
          </ul>
        </span>
      </div>

      <button type="button" class="btn btn-primary d-block mx-auto m-3" @click="init" :disabled="initializing">{{ initializing ? '正在初始化引擎' : '初始化引擎' }}</button>

      <p class="text-center">状态：{{ status }}</p>

      <div v-show="engineReady">
        <button type="button" class="btn btn-success d-block mx-auto m-3" @click="$emit('next-step', 'tab-image')" >下一步</button>
      </div>

    </div>
  `,
  methods: {
    init() {
      let language = this.selectedLanguage.join('+');
      this.$emit('init-worker', language);
    },
  },
});

Vue.component("tab-image", {
  props: {
    image: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isDropping: false,
      imgTempSrc: null,
      loadingCamera: false,
      camera: false,
      texture: null,
      fxCanvas: null,
      editor: null,
      width: 0,
      height: 0,
      brightness: 0,
      contrast: 0,
      radius: 5,
      strength: 0,
      showSkewController: false,
      controllerRadius: 15,
      skewReady: false,
      startDrag: false,
      dragTarget: null,
      originCoordinate: [0, 0, 0, 0, 0, 0, 0, 0],
      newCoordinate: [0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  watch: {
    imgTempSrc() {
      if (this.imgTempSrc) {
        this.width = this.fxCanvas.width;
        this.height = this.fxCanvas.height;
        this.$refs.canvas.width = this.width;
        this.$refs.canvas.height = this.height;
        let ctx = this.$refs.canvas.getContext('2d');
        ctx.drawImage(this.fxCanvas, 0, 0, this.width, this.height);
      }
    },
  },
  template: `
  <div>
    <div v-show="!imgTempSrc">
      <div class="input-container border-secondary" :class="{dropping: isDropping}" @dragover="isDropping = true" @drop="isDropping = false" @dragleave="isDropping = false">
        <p class="fw-bold">点击或拖放图片到此</p>
        <input id="image_upload" type="file" accept="image/*" @change="inputImg">
      </div>

      <button type="button" class="btn btn-primary d-block mx-auto" @click="openCamera" :disabled="loadingCamera">{{ loadingCamera ? "开启中" : "使用摄像头" }}</button>

      <div v-show="camera">
        <div class="video-container d-flex flex-column justify-content-center align-items-center">
          <video class="border border-3 rounded-3" autoplay ref='video'></video>
          <div class="btn-group mt-3">
            <button type="button" class="btn btn-primary btn-lg" @click="inputImg">拍摄</button>
            <button type="button" class="btn btn-danger btn-lg" @click="closeCamera">取消</button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="imgTempSrc" class="container">
      <div class="row">
        <div class="col-12 col-lg-8 text-center mw-100">
          <div class="canvas-container position-relative d-inline-block" ref="container" @mousemove="move" @touchmove="move" @mouseup="startDrag = false" @touchend="startDrag = false">
            <canvas class="mw-100 d-block img-temp" ref="canvas"></canvas>
            <div class="dot a" @mousedown="setDrag" @touchstart="setDrag" ref="a" v-show="showSkewController"></div>
            <div class="dot b" @mousedown="setDrag" @touchstart="setDrag" ref="b" v-show="showSkewController"></div>
            <div class="dot c" @mousedown="setDrag" @touchstart="setDrag" ref="c" v-show="showSkewController"></div>
            <div class="dot d" @mousedown="setDrag" @touchstart="setDrag" ref="d" v-show="showSkewController"></div>
          </div>
        </div>

        <div class="col-12 col-lg-4 px-3" v-show="!showSkewController">
          <div class="btn-group w-100 mb-2">
            <button type="button" class="btn btn-success btn-sm" @click="start">开始识别</button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="reset">重置修改</button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="removeImage">删除图片</button>
          </div>
          <div class="editor-container">
            <div>
              <p class="lh-lg">打开 <button type="button" class="btn btn-primary btn-sm" @click="imageEditor">Filerobot</button> 对图片旋转、裁剪；对于文字在非平面的图片进行 <button type="button" class="btn btn-primary btn-sm" @click="initSkewController">扭曲矫正</button> <a class="text-primary" tabindex="0" data-bs-toggle="popover" data-bs-trigger="focus" title="为何及如何编辑图片" data-bs-content="<ul><li>调整亮度、对比度、锐化让文字清晰，以提高识别正确率。</li><li>开启 Filerobot 图形编辑器对图片的方向、角度进行调整，或进行扭曲矫正，让图片中的文字水平</li><li>开启 Filerobot 图形编辑器裁剪图片，只保留需要识别文字的区域以缩短识别时间。</li></ul>" ref="popover"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg></a>
              </p>
            </div>
            <div class="row w-100">
              <div class="col-6 col-lg-12">
                <label for="brightness" class="form-label d-block">亮度：{{ brightness }}</label>
                <input type="range" id="brightness" class="form-range" min="-1" max="1" step="0.01" v-model:value.number="brightness"
                  @change="filter">
              </div>
              <div class="col-6 col-lg-12">
                <label for="contrast" class="form-label d-block">对比度：{{ contrast }}</label>
                <input type="range" id="contrast" class="form-range" min="-1" max="1" step="0.01"
                  v-model:value.number="contrast" @change="filter">
              </div>
              <div class="col-6 col-lg-12">
                <label for="radius" class="form-label d-block">锐化半径：{{ radius }}</label>
                <input type="range" id="radius" class="form-range" min="0" max="200" v-model:value.number="radius"
                  @change="filter">
              </div>
              <div class="col-6 col-lg-12">
                <label for="strength" class="form-label d-block">锐化强度：{{ strength }}</label>
                <input type="range" id="strength" class="form-range" min="0" max="5" step="0.01" v-model:value.number="strength"
                  @change="filter">
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4 px-3" v-show="showSkewController">
          <div v-show="showSkewController && !skewReady" class="text-center">
            <p class="text-center">设定锚点的初始位置</p>
            <button type="button" class="btn btn-success btn-sm" @click="skewReady = true">下一步</button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="resetCoordinate">重置锚点</button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="cancelSkew">取消</button>
          </div>

          <div v-show="showSkewController && skewReady">
            <p>矫正图片：</p>
            <button type="button" class="btn btn-success btn-sm" @click="finishSkew">完成</button>
            <button type="button" class="btn btn-primary btn-sm" @click="skewToBoundary">置界 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bounding-box-circles" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="restSkew">重置变形</button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="cancelSkew">取消</button>
          </div>
        </div>

      </div>

    </div>
  </div>
  `,
  methods: {
    // 输入图片
    inputImg(event) {
      if (!this.camera && event.target.files) {
        let file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          let img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            this.initialFxCanvas(img);
            this.imgTempSrc = this.fxCanvas.toDataURL();
            this.$emit('set-img', this.imgTempSrc);
            // 开启 popover
            new bootstrap.Popover(this.$refs.popover, {
              trigger: 'focus',
              html: true
            })
          }
        };
      } else {
        // 将视频帧输入到 canvas
        this.initialFxCanvas(this.$refs.video);
        this.cancelSnap();
        this.imgTempSrc = this.fxCanvas.toDataURL();
        this.$emit('set-img', this.imgTempSrc);
        // 开启 popover
        new bootstrap.Popover(this.$refs.popover, {
          trigger: 'focus'
        })
      }
    },
    openCamera() {
      this.loadingCamera = true;
      let vm = this;
      var constraints = {
        video: {
          facingMode: "environment"
        },
        audio: false
      };
      navigator.mediaDevices.getUserMedia(constraints)
        .then(mediaStream => {
          vm.$refs.video.srcObject = mediaStream;
          this.camera = true;
          this.loadingCamera = false;
        })
        .catch(err => {
          console.log('oops!!!' + err)
        })
    },
    closeCamera() {
      // 取消视频流，关闭摄像头
      const stream = this.$refs.video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(function (track) {
        track.stop();
      });
      this.$refs.video.srcObject = null;
      this.camera = false;
    },
    // 删除图片
    removeImage() {
      this.imgTempSrc = null;
      this.$emit('clear-img');
    },
    // glfx 图形编辑器
    initialFxCanvas(source) {
      try {
        this.fxCanvas = fx.canvas();
        this.texture = this.fxCanvas.texture(source);
        this.fxCanvas.draw(this.texture).update();
      } catch (e) {
        console.log('oops!!!' + e)
        return;
      }
    },
    filter() {
      this.fxCanvas.draw(this.texture).brightnessContrast(this.brightness, this.contrast).unsharpMask(this.radius, this.strength).update();
      this.imgTempSrc = this.fxCanvas.toDataURL();
    },
    setDrag(event) {
      this.dragTarget = event.srcElement;
      this.startDrag = true;
    },
    initSkewController() {
      this.showSkewController = true;
      this.resetCoordinate();
    },
    resetCoordinate() {
      let { width, height } = this.getELemCoords(this.$refs.container);
      this.$refs.a.style.top = `${height * 0.1}px`;
      this.$refs.a.style.left = `${width * 0.1}px`;
      this.$refs.b.style.top = `${height * 0.1}px`;
      this.$refs.b.style.left = `${width * 0.9 - this.controllerRadius}px`;
      this.$refs.c.style.top = `${height * 0.9 - this.controllerRadius}px`;
      this.$refs.c.style.left = `${width * 0.9 - this.controllerRadius}px`
      this.$refs.d.style.top = `${height * 0.9 - this.controllerRadius}px`;
      this.$refs.d.style.left = `${width * 0.1}px`;
      let coordinate = [
        this.getDotCoords('a').x,
        this.getDotCoords('a').y,
        this.getDotCoords('b').x,
        this.getDotCoords('b').y,
        this.getDotCoords('c').x,
        this.getDotCoords('c').y,
        this.getDotCoords('d').x,
        this.getDotCoords('d').y,
      ];
      this.originCoordinate = coordinate;
    },
    move(event) {
      if (!this.startDrag) return;
      // 计算 dot 相对于 canvas-container 的坐标
      let { width, height, containerX, containerY } = this.getELemCoords(this.$refs.container)
      let x = 0,
        y = 0;
      if (event.type === 'touchmove') {
        let touch = event.touches[0];
        x = touch.pageX - containerX - this.controllerRadius / 2;
        y = touch.pageY - containerY - this.controllerRadius / 2;
      } else {
        x = event.pageX - containerX - this.controllerRadius / 2;
        y = event.pageY - containerY - this.controllerRadius / 2;
      }

      // 限制 dot 移动范围
      if (x >= 0 && x + this.controllerRadius <= width) {
        this.dragTarget.style.left = `${x}px`;
      } else if (x < 0) {
        this.dragTarget.style.left = '0'
      } else if (x + this.controllerRadius > width) {
        this.dragTarget.style.left = `${width - this.controllerRadius}px`
      }

      if (y >= 0 && y + this.controllerRadius <= height) {
        this.dragTarget.style.top = `${y}px`;
      } else if (y < 0) {
        this.dragTarget.style.top = '0'
      } else if (y + this.controllerRadius > width) {
        this.dragTarget.style.top = `${height - this.controllerRadius}px`
      }

      let coordinate = [
        this.getDotCoords('a').x,
        this.getDotCoords('a').y,
        this.getDotCoords('b').x,
        this.getDotCoords('b').y,
        this.getDotCoords('c').x,
        this.getDotCoords('c').y,
        this.getDotCoords('d').x,
        this.getDotCoords('d').y,
      ];

      // 基于状态判断 dot 移动时选择执行的操作
      if (this.skewReady) {
        this.skew(this.originCoordinate, coordinate)
      } else {
        this.originCoordinate = coordinate
      }
    },
    getELemCoords(elem) {
      let box = elem.getBoundingClientRect();

      return {
        width: box.width,
        height: box.height,
        containerX: box.left + window.pageXOffset,
        containerY: box.top + window.pageYOffset,
      };
    },
    getDotCoords(dot) {
      let x = parseFloat(this.$refs[dot].style.left);
      let y = parseFloat(this.$refs[dot].style.top);
      // console.log(dot, x, y)
      return {
        x,
        y
      }
    },
    skew(originCoordinate, newCoordinate) {
      this.fxCanvas.draw(this.texture).perspective(originCoordinate, newCoordinate).update();
      this.imgTempSrc = this.fxCanvas.toDataURL();
    },
    skewToBoundary() {
      let { width, height } = this.getELemCoords(this.$refs.container)
      this.$refs.a.style.top = `0px`;
      this.$refs.a.style.left = `0px`;
      this.$refs.b.style.top = `0px`;
      this.$refs.b.style.left = `${width - this.controllerRadius}px`;
      this.$refs.c.style.top = `${height - this.controllerRadius}px`;
      this.$refs.c.style.left = `${width - this.controllerRadius}px`;
      this.$refs.d.style.top = `${height - this.controllerRadius}px`;
      this.$refs.d.style.left = `0px`;
      let coordinate = [
        this.getDotCoords('a').x,
        this.getDotCoords('a').y,
        this.getDotCoords('b').x,
        this.getDotCoords('b').y,
        this.getDotCoords('c').x,
        this.getDotCoords('c').y,
        this.getDotCoords('d').x,
        this.getDotCoords('d').y,
      ];
      // console.log(coordinate);
      this.skew(this.originCoordinate, coordinate)
    },
    restSkew() {
      this.$refs.a.style.left = `${this.originCoordinate[0]}px`;
      this.$refs.a.style.top = `${this.originCoordinate[1]}px`;
      this.$refs.b.style.left = `${this.originCoordinate[2]}px`;
      this.$refs.b.style.top = `${this.originCoordinate[3]}px`;
      this.$refs.c.style.left = `${this.originCoordinate[4]}px`;
      this.$refs.c.style.top = `${this.originCoordinate[5]}px`;
      this.$refs.d.style.left = `${this.originCoordinate[6]}px`;
      this.$refs.d.style.top = `${this.originCoordinate[7]}px`;
      this.skew(this.originCoordinate, this.originCoordinate);
    },
    cancelSkew() {
      if (this.skewReady) {
        this.skew(this.originCoordinate, this.originCoordinate)
      }
      this.finishSkew()
    },
    finishSkew() {
      this.texture = this.fxCanvas.texture(this.fxCanvas);
      this.dragTarget = null;
      this.startDrag = false;
      this.resetCoordinate();
      this.skewReady = false;
      this.showSkewController = false;
    },
    // Filerobot 图形编辑器
    imageEditor() {
      let vm = this;
      this.editor = new FilerobotImageEditor(
        {
          tools: ['rotate', 'crop'],
          language: 'chi_sim',
          translations: translations,
          colorScheme: 'light'
        },
        {
          onBeforeComplete({ status, canvas }) {
            // console.log(canvas);
            // console.log(vm.imgTempSrc);
            // vm.imgTempSrc = canvas.toDataURL();
            vm.initialFxCanvas(canvas);
            vm.imgTempSrc = vm.fxCanvas.toDataURL();
            return false;
          },
          onComplete() {
            console.log('edit complete');
          }
        }
      );
      this.editor.open(this.imgTempSrc)
    },
    // 重置所有编辑
    reset() {
      this.brightness = 0;
      this.contrast = 0;
      this.radius = 5;
      this.strength = 0;
      let img = new Image();
      img.src = this.image;
      img.onload = () => {
        this.initialFxCanvas(img);
        this.imgTempSrc = this.image;
      }
    },
    start() {
      this.$emit('start', this.imgTempSrc);
      this.$emit('next-step', 'tab-result');
    }
  },
});

Vue.component("tab-result", {
  props: {
    status: {
      type: String,
      default: ''
    },
    progress: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editing: false,
      text: '',
    }
  },
  computed: {
    progressPercent() {
      return `${(this.progress * 100).toFixed(2)}%`
    }
  },
  watch: {
    image() {
      this.setCanvas();
    },
  },
  template: `
    <div>
      <div v-if="status">
        <p>状态：{{ status }}</p>
        <div class="d-flex align-items-center">
          <p class="my-0">进度：</p>
          <div class="progress flex-grow-1">
            <div class="progress-bar" role="progressbar" :style="{width: progressPercent}"  aria-valuemin="0" aria-valuemax="1">{{ progressPercent }}</div>
          </div>
        </div>

      </div>
      <div class="mt-3 text-center">
        <canvas class="img-result mw-100" ref="result"></canvas>
      </div>
      <div v-show="!editing">
        <p class="text-center my-3 ">识别结果</p>
        <hr/>
        <p id="content">{{content}}</p>
        <button type="button" class="btn btn-primary mt-3" @click="editContent" :disabled="!content">编辑</button>
      </div>

      <div class="mt-3" v-show="editing">
        <textarea class="form-control" id="editing" v-model="text"></textarea>
      </div>
    </div>
  `,
  methods: {
    setCanvas() {
      if (this.image) {
        let img = new Image();
        img.src = this.image;
        img.onload = () => {
          let width = img.width;
          let height = img.height;
          console.log(width, height);
          this.$refs.result.width = width;
          this.$refs.result.height = height;
          let ctx = this.$refs.result.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
        }
      }
    },
    editContent() {
      this.editing = true;
      this.text = this.content;
    }
  },
  mounted() {
    this.setCanvas()
  }
});

new Vue({
  el: '#app',
  data: {
    imageSrc: '',
    status: '引擎未初始化',
    content: '',
    progress: 0,
    worker: null,
    initializing: false,
    engineReady: false,
    imageReady: false,
    currentTabComponent: 'tab-engine'
  },
  methods: {
    setTab(val) {
      this.currentTabComponent = val;
    },
    initWorker(language) {
      this.initializing = true;
      // OCR Worker
      this.worker = Tesseract.createWorker({
        logger: (msg) => {
          // Add logger here
          console.log(msg);
          if (msg.status) {
            this.status = msg.status
          };
          if (msg.progress) {
            this.progress = msg.progress;
          }
        }
      });
      this.worker.load()
        .then((result) => {
          return this.worker.loadLanguage(language);
        })
        .then(() => {
          return this.worker.initialize(language);
        })
        .then(() => {
          this.status = '引擎初始化结束';
          this.progress = 0;
          this.initializing = false;
          this.engineReady = true;
        })
        .catch(err => {
          console.log('oops!!!' + err)
        })
    },
    setImg(val) {
      this.imageSrc = val;
      this.imageReady = true;
    },
    clearImg() {
      this.imageSrc = null;
      this.imageReady = false;
    },
    startOCR(val) {
      this.imageSrc = val;
      this.progress = 0;
      this.content = '';
      this.worker.recognize(this.imageSrc)
        .then(result => {
          this.content = result.data.text.replace(/\s*/g, "");
          this.status = '识别完成';
        })
        .catch(err => {
          console.log('oops!!!' + err)
        })
    }
  },
})