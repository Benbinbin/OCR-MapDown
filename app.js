const languageMap = {
  'eng': '英文',
  'chi_sim': '简体中文',
  'chi_tra': '繁体中文'
}
new Vue({
  el: '#app',
  data: {
    worker: null,
    image: null,
    snapshot: null,
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
        const reader = new FileReader();
        reader.onload = (e) => {
          console.log(e);
          this.image = e.target.result;
          this.imageReady = true;
        };
        reader.readAsDataURL(file);
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
    changeFront() {
      this.front = !this.front;
    },
    takeSnap() {
      let width = this.$refs.video.videoWidth;
      let height = this.$refs.video.videoHeight;
      this.$refs.canvas.width = width;
      this.$refs.canvas.height = height;
      console.log(width, height);
      let ctx = this.$refs.canvas.getContext('2d');
      ctx.drawImage(this.$refs.video, 0, 0, width, height);
      this.image = this.$refs.canvas.toDataURL();
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
    // let vm = this;
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


// const imageSource = './images/test/source.jpg';

// document.querySelector('#source').src = imageSource;
// const text = document.querySelector('#text');

// const video = document.querySelector('.player');
// const canvas = document.querySelector('.photo');
// const ctx = canvas.getContext('2d');

// const snap = document.querySelector('.snap')


// OCR
// const worker = Tesseract.createWorker({
//   logger: m => console.log(m)
// });
// Tesseract.setLogging(true);
// work();

// async function work() {
//   await worker.load();
//   await worker.loadLanguage('eng+chi_sim');
//   await worker.initialize('eng+chi_sim');

//   let result = await worker.detect(exampleImage);
//   console.log('Detect Data: ', result.data);
//   console.log('---');

//   result = await worker.recognize(exampleImage);
//   if (result.data.text) {
//     let trimText = result.data.text.split(" ").join("")
//     text.innerHTML = trimText;
//   }
//   console.log(result.data);


//   await
// }