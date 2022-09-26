## Installation

1.  确认已经安装了JRE环境. GeoServer 需要 **Java 8** 环境, 详见 [instructions for installing Oracle Java on OS X](http://java.com/en/download/faq/java_mac.xml).
    
2.  到官网站下载页 [Download](http://geoserver.org/download).
    
3.  选择稳定版本 [Stable](http://geoserver.org/release/stable).
    
4.  选择Packages-Platform Independent Binary.
    
5.  下载后解压缩到你想要使用的位置
    
    建议使用： `/usr/local/geoserver`.
    
6.  通过Terminal添加环境变量:
    
    ```
    echo "export GEOSERVER_HOME=/usr/local/geoserver" >> ~/.profile
    . ~/.profile
    ```
    
7.  通过命令行给文件夹添加用户权限:
    
    > ```
    > sudo chown -R ssd4wilbur /usr/local/geoserver/
    > 
    > ```
    
    其中 `ssd4wilbur` 是当前Mac的名称.
    
8.  进入到安装目录，我的是`geoserver-2.21.1-bin/bin` 并执行 `startup.sh 脚本：`
    
    > ```
    > cd geoserver/bin
    > sh startup.sh
    > ```
    > 

打开浏览器输入网址： `http://localhost:8080/geoserver`.

> 看到geoserver的logo，说明安装成功。![../_images/success.png](https://docs.geoserver.org/stable/en/user/_images/success.png)
> 

若要关闭GeoServer, 可以通过关闭当前命令行窗口，也可以通过执行bin文件夹下的 `shutdown.sh`.