# openf

openf是一个支持mac和ubuntu的，从终端内打开某些目录非常好用，

Artwork by [i5ting](http://www.github.com/i5ting/).

[![Deps](https://david-dm.org/i5ting/openf.svg)](https://david-dm.org/i5ting/openf) 
[![npm](https://img.shields.io/npm/v/openf.svg)](https://www.npmjs.com/package/openf)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/i5ting/openf/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/openf.svg)](https://www.npmjs.com/package/openf)


## Install

    [sudo]npm install -g openf

## Usage 

exec in terminal

- o
- openf

```
o .
```

or 

```
openf .
```

### ubuntu 

openf使用的是浏览文件命令`nautilus`

它也支持

- 显示地址栏，Ctrl+l
- 显示隐藏文件，Ctrl+h
- computer:/// – 全部挂载的设备和网络
- network:/// – 浏览可用的网络
- burn:/// – 一个刻录 CDs/DVDs 的数据虚拟目录
- smb:/// – 可用的 windows/samba 网络资源
- x-nautilus-desktop:/// – 桌面项目和图标
- file:/// – 本地文件
- trash:/// – 本地回收站目录
- ftp:// – FTP 文件夹
- ssh:// – SSH 文件夹
- fonts:/// – 字体文件夹，可将字体文件拖到此处以完成安装
- themes:/// – 系统主题文件夹
- 显示隐藏文件: Ctrl+h
- 显示地址栏: Ctrl+l
- 查看已安装字体: 在nautilus的地址栏里输入”fonts:///“，就可以查看本机所有的fonts


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
