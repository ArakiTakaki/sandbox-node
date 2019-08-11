#include <nan.h>
#include <thread>
#include <iostream>
#include "sample.h"

using namespace std;

uint32_t count_ = 0;
uint32_t count_b = 0;

void ThreadA()
{
  for (int i = 0; i < 100000; ++i)
  {
    ++count_;
  }
}

void ThreadB()
{
  for (int i = 0; i < 100000; ++i)
  {
    ++count_b;
  }
}

NAN_METHOD(hello) {
    // 実行開始
    std::thread th_a(ThreadA);
    std::thread th_b(ThreadB);

    // 実行中数値
    printf("count_ : %d\n", count_);
    printf("count_ : %d\n", count_b);

    // 実行完了を待つ
    th_a.join();
    th_b.join();

    // 実行完了後数値
    printf("count_ : %d\n", count_);
    printf("count_ : %d\n", count_b);
    // 返り値を設定
    CSample sampleObj2;
    CSample sampleObj;
    int num = 0 , num2 = 2;

    sampleObj.set(num);
    sampleObj.set(num2);

    cout << sampleObj.get() << endl;  // メンバ変数の値を出力
    cout << sampleObj2.get() << endl;  // メンバ変数の値を出力

    info.GetReturnValue().Set(Nan::New("hello world").ToLocalChecked());
}

NAN_MODULE_INIT(init) {
    // hello 関数を外部に公開
    NAN_EXPORT(target, hello);
}

NODE_MODULE(my_extension, init);
