---
title: git提交信息规范
date: 2016-09-22 6:09:01
tags:
- git
---

1. 使用现在时
Use the present tense ("Add feature" not "Added feature")
<!-- more -->
2. 使用祈使句
Use the imperative mood ("Move cursor to..." not "Moves cursor to...")

3. 提交信息的第一行要少于72个字符
Limit the first line to 72 characters or less

4. 引用issues和pull requests
Reference issues and pull requests liberally

5. 当仅仅修改了文档时，使用[ci skip]标签
When only changing documentation, include [ci skip] in the commit description

6. 使用emoji，让提交记录更加直观
Consider starting the commit message with an applicable emoji:
🎨 :art: when improving the format/structure of the code
🐎 :racehorse: when improving performance
🚱 :non-potable_water: when plugging memory leaks
📝 :memo: when writing docs
🐧 :penguin: when fixing something on Linux
🍎 :apple: when fixing something on macOS
🏁 :checkered_flag: when fixing something on Windows
🐛 :bug: when fixing a bug
🔥 :fire: when removing code or files
💚 :green_heart: when fixing the CI build
✅ :white_check_mark: when adding tests
🔒 :lock: when dealing with security
⬆️ :arrow_up: when upgrading dependencies
⬇️ :arrow_down: when downgrading dependencies
👕 :shirt: when removing linter warnings

参考：
https://github.com/electron/electron/blob/master/CONTRIBUTING.md


