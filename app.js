// const exampleImage = './eng_bw.png';
const exampleImage = './source.jpg';

document.querySelector('#source').src = exampleImage;
const text = document.querySelector('#text');

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');

const snap = document.querySelector('.snap')


// OCR
const worker = Tesseract.createWorker({
  logger: m => console.log(m)
});
Tesseract.setLogging(true);
work();

async function work() {
  await worker.load();
  await worker.loadLanguage('eng+chi_sim');
  await worker.initialize('eng+chi_sim');

  let result = await worker.detect(exampleImage);
  console.log('Detect Data: ', result.data);
  console.log('---');

  result = await worker.recognize(exampleImage);
  if (result.data.text) {
    let trimText = result.data.text.split(" ").join("")
    text.innerHTML = trimText;
  }
  console.log(result.data);


  await worker.terminate();
}