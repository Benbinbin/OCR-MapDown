const languageMap = {
  'eng': '英文',
  'chi_sim': '简体中文',
  'chi_tra': '繁体中文'
}

new Vue({
  el: '#app',
  data: {
    worker: null,
    fxCanvas: null,
    texture: null,
    brightness: 0,
    contrast: 0,
    radius: 0,
    strength: 0,
    image: null,
    camera: false,
    status: 'unload',
    progress: 0,
    initReady: false,
    imageReady: false,
    loadedLang: ['eng', 'chi_sim', 'chi_tra'],
    selectedLang: ['eng', 'chi_sim'],
    content: '',
    front: true,
  },
  computed: {
    language() {
      return this.loadedLang.map((item) => {
        return {
          name: languageMap[item],
          value: item
        }
      })
    },
    ocrReady() {
      return this.initReady && this.imageReady;
    }
  },
  methods: {
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
      let vm = this;
      this.camera = true;
      var constraints = {
        video: {
          facingMode: "environment"
        },
        audio: false
      };
      navigator.mediaDevices.getUserMedia(constraints)
        .then(mediaStream => {
          vm.$refs.video.srcObject = mediaStream;
        })
        .catch(err => {
          console.log('oops!!!' + err)
        })
    },
    // changeFront() {
    //   this.front = !this.front;
    // },
    takeSnap() {
      this.initialFxCanvas(this.$refs.video)
    },
    initialFxCanvas(source) {
      // Initialize Image Editor
      try {
        this.fxCanvas = fx.canvas();
        this.texture = this.fxCanvas.texture(source);
        this.fxCanvas.draw(this.texture).update();
        this.image = this.fxCanvas.toDataURL();
        this.imageReady = true;
      } catch (e) {
        console.log('oops!!!' + e)
        return;
      }
    },
    editImage() {
      this.fxCanvas.draw(this.texture).brightnessContrast(this.brightness, this.contrast).unsharpMask(this.radius, this.strength).update();
      this.image = this.fxCanvas.toDataURL();
      this.imageReady = true;
    },
    initWorker() {
      let language = this.selectedLang.join('+');
      this.worker.initialize(language)
        .then(() => {
          this.status = 'initialized completed'
        })
        .catch(err => {
          console.log('oops!!!' + err)
        })
    },
    startOCR() {
      this.status = 'OCR starting'
      this.worker.recognize(this.image)
        .then(result => {
          this.content = result.data.text.replace(/\s*/g, "");
          this.status = 'finish';
        })
        // .then(() => {
        //   this.worker.terminate();
        //   this.status = 'finish'
        // })
        .catch(err => {
          console.log('oops!!!' + err)
        })
    }
  },
  created() {
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
        if (result.data.loaded) {
          this.status = 'OCR Engine loaded';
        }
        // OCR support language list: https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016
        // preload English, Chinese - Simplified, Chinese - Traditional data
        return this.worker.loadLanguage('eng+chi_sim+chi_tra');
      })
      .then((result) => {
        console.log(result)
        this.status = 'Language traineddata Loaded';
        this.initReady = true
      })
      .catch(err => {
        console.log('oops!!!' + err)
      })
  }
})