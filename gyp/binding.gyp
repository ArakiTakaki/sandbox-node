{
  "targets": [
    {
      "target_name": "my_extension",
      "sources": ["my_extension.cpp", "sample.cpp"], # -Wall 的なやつ？
      "include_dirs": ["<!(node -e \"require('nan')\")"]
    }
  ]
}
