# HandyBox

HandyBox 是一个放在手机里的轻量工具箱，支持离线使用，适合作为 PWA 安装到手机桌面。

项目采用纯前端实现，无需后端服务，打开网页即可使用。

## 功能列表

目前包含以下小工具：

| 工具 | 说明 |
| --- | --- |
| Guan Dan | 记录红蓝队等级，适合掼蛋等牌局计分 |
| Card Box | 抽牌、随机卡牌、简单桌游辅助 |
| Random Pick | 随机数、随机选择 |
| Dice | 随机掷骰，适合桌游和临时决策 |
| Pomodoro | 番茄钟，专注计时、休息提醒 |
| ... | ... |

## 特性

- 支持离线使用
- 支持手机横屏和竖屏
- 支持安装到手机桌面
- 无需服务器和数据库
- 页面简洁，适合移动端使用
- 使用 Service Worker 缓存静态资源
- 适合个人日常、桌游、学习和工作辅助

## 技术栈

- HTML
- CSS
- JavaScript
- PWA
- Service Worker

## 项目结构

```text
HandyBox/
├── index.html              # 首页
├── guandan.html            # Guan Dan 工具
├── cardBox.html            # Card Box 工具
├── randomPick.html         # Random Pick 工具
├── dice.html               # Dice 工具
├── qr.html                 # QR 工具
├── bmiCalc.html            # BMI 工具
├── pomodoro.html           # Pomodoro 工具
├── russianRoulette.html    # 俄罗斯转盘
├── manifest.webmanifest    # PWA 配置
├── sw.js                   # Service Worker
├── icons/                  # 应用图标
├── README.md               # 项目说明
└── LICENSE                 # 使用许可
```

## PWA 使用说明
在支持 PWA 的浏览器中打开项目页面后，可以选择：

添加到主屏幕
安装应用
离线访问
首次访问后，Service Worker 会缓存必要资源。之后即使没有网络，也可以继续使用已缓存的功能页面。

## 使用限制
本项目源码公开，允许个人学习、研究、修改和非商业使用。

未经作者明确书面授权，禁止将本项目或其修改版本用于商业用途，包括但不限于：

作为商业产品或商业服务的一部分
付费销售、转售或打包分发
用于广告变现、会员服务、SaaS 服务
用于公司、机构或商业项目内部生产环境
去除作者信息后重新发布
以本项目为基础制作商业闭源产品
如需商业授权，请联系项目作者。




## LICENSE

```text
HandyBox Non-Commercial License

Copyright (c) 2025 Orlando Rong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to use, copy, modify, and
distribute the software for personal, educational, research, and other
non-commercial purposes only, subject to the following conditions:

1. Non-Commercial Use Only

You may use, copy, modify, and distribute this software only for non-commercial
purposes.

Commercial use is strictly prohibited without prior written permission from the
copyright holder.

Commercial use includes, but is not limited to:

- Selling or sublicensing the software
- Using the software as part of a paid product or service
- Using the software in a commercial SaaS, web service, or application
- Using the software for advertising, monetization, or revenue-generating purposes
- Using the software in a company, organization, or commercial production environment
- Repackaging, rebranding, or redistributing the software for commercial benefit
- Creating derivative works for commercial distribution

2. Modification and Distribution

You may modify the software for non-commercial purposes.

If you distribute modified versions of the software, you must:

- Keep this license file included
- Clearly state that changes were made
- Retain the original copyright notice
- Not imply that the original author endorses your modified version

3. Attribution

You must retain the original project name, copyright notice, and license notice
in all copies or substantial portions of the software.

4. No Warranty

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.

IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR
OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.

5. Commercial Licensing

For commercial use, please contact the copyright holder to obtain a separate
commercial license.

Contact: 772766964@qq.com
```