1. 访问EnterpriseDB提供的下载地址：https://www.enterprisedb.com/downloads/postgres-postgresql-downloads。

![](https://ask.qcloudimg.com/http-save/7256485/8bp1nosr7p.jpeg?imageView2/2/w/1620)

在此，选择需要的版本，进行下载。下载完成之后，双击postgresql-\*\*\*\*-osx.dmg 文件进行安装。

![](https://ask.qcloudimg.com/http-save/7256485/z32s80vdnl.jpeg?imageView2/2/w/1620)

双击postgresql-11.3-2.osx进行安装，此时需要输入本机密码（开机密码）。

![](https://ask.qcloudimg.com/http-save/7256485/pjboox1ydo.jpeg?imageView2/2/w/1620)

此后一路Next接口完成安装 

注意`stack builder`最好勾选 因为后面用这个装PostGIS比较方便

设置的项目包括

>  安装目录、扩展安装、[数据库](https://cloud.tencent.com/solution/database?from=10680)目录、用户密码、端口设置等

一般使用default值

2. 安装完成之后, 执行SQL Shell(psql), 启动PostgreSQL, 会出现

```
$ /Library/PostgreSQL/11/scripts/runpsql.sh ;exit
Server [localhost]: 
Database [postgres]: 
Port [5432]: 
Username [postgres]: 
Password for user postgres: 
psql (11.3)
Type "help" for help.

postgres=# 
```

以Server为例，命令中默认为“Server \[localhost\]: ”，表示Server的默认配置值为中括号内的localhost。除了其中的Password需要输入密码，其他选项如无特殊需要，采用默认即可

此时，再执行应用程序中图标为大象的pgAdmin 4, 即可打开web管理界面

![](https://ask.qcloudimg.com/http-save/7256485/cje819dxl8.jpeg?imageView2/2/w/1620)

在下图中输入密码, 即可进入管理界面进行相应的操作.

![](https://ask.qcloudimg.com/http-save/7256485/u6wx0w6z0a.jpeg?imageView2/2/w/1620)

**Attention** 密码要记牢 建议默认都写postgres

>  Ref: [](https://www.choupangxia.com/2020/06/03/mac-os-postgresql/)