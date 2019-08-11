#include <thread>
#include <cstdio>
#include <cstdint>
#include <unistd.h>

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

int main()
{
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

  return 0;
}