extern crate rulinalg;
extern crate wasm_bindgen;
use rulinalg::matrix::Matrix;
use rulinalg::vector::Vector;
// use std::io::{stdout, Write};
use wasm_bindgen::prelude::*;
mod game;

use game::Game;

fn main() {
    // let out = stdout();
    // let mut out = out.lock();
    // Create a 2x2 matrix:
    // 
    let a = Matrix::new(3, 2, vec![1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);
    let b = Matrix::new(3, 2, vec![6.0, 5.0, 4.0, 3.0, 2.0, 1.0]);
    let d = Vector::new(vec![1.0, 1.0]);

    let c = a + b;
    // writeln!(out, c).unwrap();
    println!("The origin is: {:?}", c);
    println!("The origin is: {:?}", d);
}

#[wasm_bindgen]
pub extern "C" fn update(len: usize, ptr: *mut bool, col: usize) {
    let row = len / col;
    let buf: &mut [bool] = unsafe { std::slice::from_raw_parts_mut(ptr, len) };
    let game: Vec<bool> = Game::new(buf, row, col).next();
    buf.clone_from_slice(game.as_slice())
}

#[wasm_bindgen]
pub fn hello()  {
    let a = Matrix::new(3, 2, vec![1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);
    println!("The origin is: {:?}", a);
}

#[wasm_bindgen]
pub fn greeting() -> String {
    "hello".to_string()
}

#[test]
fn it_works() {
    main();
}
