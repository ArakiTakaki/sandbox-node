#include <nan.h>
#include <iostream>
#include "sample.h"
using namespace std;

NAN_METHOD(hello) {
    // 返り値を設定
    CSample sampleObj;
    int num;
    cin >> num;
    sampleObj.set(num);
    cout << sampleObj.get() << endl;  // メンバ変数の値を出力
    info.GetReturnValue().Set(Nan::New("hello world").ToLocalChecked());
}

NAN_MODULE_INIT(init) {
    // hello 関数を外部に公開
    NAN_EXPORT(target, hello);
}

NODE_MODULE(my_extension, init);
