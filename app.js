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

Vue.component("tab-engine", {
  props: {
    status: {
      type: String,
      default: ''
    },
    progress: {
      type: Number,
      default: 0,
    },
    initialized: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      languageLists: languageLists,
      languageOptions: languageOptions,
      selectedLanguage: ['chi_sim'],
      initializing: false,
    }
  },
  watch: {
    initialized() {
      this.initializing = false;
    }
  },
  template: `
    <div>
      <h2 class="text-center mt-5 mb-3">选择语言</h2>
      <div class="d-flex justify-content-center">
        <p class="badge bg-secondary text-wrap lh-base">选择识别图片中所含文字的语言（可以多选），以下载相应的训练数据集，选择的语种越多所需下载的数据集越大。每次添加语音请初始化引擎。</p>
      </div>

      <div>
        <div class="form-check form-check-inline" v-for="item of languageOptions">
          <input :id="item.name" class="form-check-input" type="checkbox" :checked="selectedLanguage.includes(item.name)" :value="item.name" v-model="selectedLanguage">
          <label class="form-check-label" :for="item.name">{{ item.value }}</label>
        </div>

        <span>
          <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="add-options" data-bs-toggle="dropdown">
            添加语言选项
          </button>
          <ul class="dropdown-menu dropdown-menu-start h-50" style="overflow:auto">
            <li v-for="item of languageLists" class="form-check form-switch mx-3" :key="item.name">
              <input class="form-check-input" type="checkbox" :value="item" :id="item.name" :checked="languageOptions.includes(item)" v-model="languageOptions">
              <label class = "form-check-label" :for="item.name">{{ item.value }} </label>
            </li>
          </ul>
        </span>
      </div>

      <button type="button" class="btn btn-primary d-block mx-auto m-3" @click="init" :disabled="initializing">初始化引擎</button>

      <p class="text-center">状态：{{ status }}</p>

      <div v-if="status === '引擎初始化结束'">
        <button type="button" class="btn btn-success d-block mx-auto m-3" @click="$emit('next-step', 'tab-image')" >下一步</button>
      </div>

    </div>
  `,
  methods: {
    init() {
      let language = this.selectedLanguage.join('+');
      this.$emit('init-worker', language);
      this.initializing = true;
    },
  },
});

Vue.component("tab-image", {
  data() {
    return {
      isDropping: false,
      snapshot: null,
      imageReady: false,
      loadingCamera: false,
      camera: false,
      front: true,
      fxCanvas: null,
      texture: null,
      brightness: 0,
      contrast: 0,
      radius: 5,
      strength: 0,
      // skew: false,
      // top: {
      //   top: '25%'
      // },
      // bottom: {
      //   bottom: '25%'
      // },
      // left: {
      //   left: '25%'
      // },
      // right: {
      //   right: '25%'
      // },
    }
  },
  template: `
  <div>
    <div v-show="!snapshot">
      <div class="input-container border-secondary" :class="{dropping: isDropping}" @dragover="drag" @drop="drop" @dragleave="drop">
        <p class="fw-bold">拖放文件或点击此处添加图片</p>
        <input id="image_upload" type="file" accept="image/*" @change="inputChange">
      </div>

      <button type="button" class="btn btn-primary d-block mx-auto" @click="openCamera" :disabled="loadingCamera">{{ loadingCamera ? "开启中" : "使用摄像头" }}</button>

      <div v-show="camera">
        <div class="video-container d-flex flex-column justify-content-center align-items-center">
          <video class="border border-3 rounded-3" autoplay ref='video'></video>
          <div class="btn-group mt-3">
            <button type="button" class="btn btn-primary btn-lg" @click="takeSnap">拍摄</button>
            <button type="button" class="btn btn-danger btn-lg" @click="cancelSnap">取消</button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="snapshot">
      <div class="mt-3">
        <button type="button" class="btn btn-danger my-2 d-block mx-auto" @click="removeImage">删除图片</button>
        <img class="thumb border border-3 rounded-3 mx-auto" :src="snapshot" alt="" ref="thumb">
      </div>

      <div class="image-controllers m-3 row">
        <div class="col-sm-6">
          <label for="brightness" class="form-label">亮度：{{ brightness }}</label>
          <input type="range" id="brightness" class="form-range" min="-1" max="1" step="0.01" v-model:value.number="brightness" @change="editImage">
        </div>
        <div class="col-sm-6">
          <label for="contrast" class="form-label">对比度：{{ contrast }}</label>
          <input type="range" id="contrast" class="form-range" min="-1" max="1" step="0.01" v-model:value.number="contrast" @change="editImage">
        </div>
        <div class="col-sm-6">
          <label for="radius" class="form-label">锐化半径：{{ radius }}</label>
          <input type="range" id="radius" class="form-range" min="0" max="200" v-model:value.number="radius" @change="editImage">
        </div>
        <div class="col-sm-6">
          <label for="strength" class="form-label">锐化强度：{{ strength }}</label>
          <input type="range" id="strength" class="form-range" min="0" max="5" step="0.01" v-model:value.number="strength" @change="editImage">
        </div>
        <!-- <button class="skew" @click="skewImage">扭曲矫正</button> -->
      </div>

      <div class="d-flex justify-content-center">
        <div class="btn-group">
          <button type="button" class="btn btn-primary" @click="start">开始识别</button>
          <button type="button" class="btn btn-danger" @click="reset">重置参数</button>
        </div>
      </div>
      <p class="fw-light fst-italic mt-5">调整参数让文字突出清晰，背景简洁噪点较少，提高识别率。</p>
    </div>
  </div>
  `,
  methods: {
    drag() {
      this.isDropping = true
    },
    drop() {
      this.isDropping = false
    },
    inputChange(event) {
      if (event.target.files) {
        let file = event.target.files[0];
        console.log(file);
        const reader = new FileReader();
        // read file to canvas
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          let img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            this.initialFxCanvas(img);
          }
        };
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
    // changeFront() {
    //   this.front = !this.front;
    // },
    takeSnap() {
      // 将视频帧输入到 canvas
      this.initialFxCanvas(this.$refs.video);

      // 取消视频流，关闭摄像头
      const stream = this.$refs.video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(function (track) {
        track.stop();
      });
      this.$refs.video.srcObject = null;
      this.camera = false;
    },
    cancelSnap() {
      // 取消视频流，关闭摄像头
      const stream = this.$refs.video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(function (track) {
        track.stop();
      });
      this.$refs.video.srcObject = null;
      this.camera = false;
    },
    initialFxCanvas(source) {
      // 初始化图形编辑器
      try {
        this.fxCanvas = fx.canvas();
        this.texture = this.fxCanvas.texture(source);
        this.fxCanvas.draw(this.texture).update();
        this.snapshot = this.fxCanvas.toDataURL();
        this.imageReady = true;
      } catch (e) {
        console.log('oops!!!' + e)
        return;
      }
    },
    removeImage() {
      this.snapshot = null;
    },
    editImage() {
      this.fxCanvas.draw(this.texture).brightnessContrast(this.brightness, this.contrast).unsharpMask(this.radius, this.strength).update();
      this.snapshot = this.fxCanvas.toDataURL();
      this.imageReady = true;
    },
    reset() {
      this.brightness = 0;
      this.contrast = 0;
      this.radius = 0;
      this.strength = 0;
      this.editImage();
    },
    // move(event) {
    //   console.log(event);
    // },
    // skewImage() {
    // },
    start() {
      this.$emit('start', this.snapshot);
      this.$emit('next-step', 'tab-result');
    }
  }
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

    }
  },
  computed: {
    progressPercent() {
      return `${(this.progress * 100).toFixed(2)}%`
    }
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
      <div class="mt-3">
        <img class="thumb border border-3 rounded-3 mx-auto" :src="image">
      </div>
      <h2 class="text-center my-3">识别结果</h2>
      <hr/>
      <p id="content">{{content}}</p>

    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    image: null,
    status: '引擎未初始化',
    content: '',
    progress: 0,
    worker: null,
    engineReady: false,
    imageReady: false,
    currentTabComponent: 'tab-result'
  },
  computed: {
    ocrReady() {
      return this.initReady && this.imageReady;
    }
  },
  methods: {
    setTab(val) {
      this.currentTabComponent = val;
    },
    initWorker(language) {
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
          return this.worker.initialize(language)
        })
        .then(() => {
          this.status = '引擎初始化结束';
          this.engineReady = true;
        })
        .catch(err => {
          console.log('oops!!!' + err)
        })
    },
    startOCR(snapshot) {
      this.imageReady = true;
      this.image = snapshot;
      this.progress = 0;
      this.worker.recognize(snapshot)
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