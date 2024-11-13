const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Erro após 200ms'), 200);
});

console.time("PromiseTime");  

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
  console.timeEnd("PromiseTime");
}).catch((error) => {
  console.log('Erro capturado:', error);
});
