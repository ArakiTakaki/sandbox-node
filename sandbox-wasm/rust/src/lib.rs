extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
mod game;

use game::Game;

fn main() {}

#[wasm_bindgen]
pub extern "C" fn update(len: usize, ptr: *mut bool, col: usize) {
    let row = len / col;
    let buf: &mut [bool] = unsafe { std::slice::from_raw_parts_mut(ptr, len) };
    let game: Vec<bool> = Game::new(buf, row, col).next();
    buf.clone_from_slice(game.as_slice())
}

#[wasm_bindgen]
pub fn greeting() -> String {
    "hello".to_string()
}
