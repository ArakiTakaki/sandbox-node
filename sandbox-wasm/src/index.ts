import('../rust/pkg/index').then((wasm) => {
  console.log(wasm);
  wasm.hello();
  console.log(wasm.hello());
});
