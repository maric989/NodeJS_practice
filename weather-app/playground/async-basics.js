console.log('Starting app');

setTimeout(() => {
  console.log('Inside callback');
}, 2000);

setTimeout(() => {
  console.log('Hey');
},0);

console.log('Finishing up');
