# Google Drive Proxy Player (Educational Purpose only !!)

I wrote this in 2019, so I decided to publish it for **educational purpose**.

If you want to use it, you need to write get link function by yourself (Implement with your caching).

## Intro

- No **PHP**

- No **NodeJS**

- No **Other Language**

- No **NGINX+PHP** , **NGINX+NodeJS** , **NGINX+Curl** , **NGINX+Wget** or whatever !

- Only **NGINX** 

## Why NGINX ?

NGINX Proxy can handle a lot of concurrent for best performance.

I saw a lot of Proxy Player Scripts use curl or createReadStream so I decided to make it with only NGINX.

## Feature

- Video Streaming Proxy

- URL Encryption

## Installation

### For Ubuntu

NGINX Installation with njs module

```
sudo apt install curl gnupg2 ca-certificates lsb-release
echo "deb http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
echo "deb http://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
curl -fsSL https://nginx.org/keys/nginx_signing.key | sudo apt-key add -
sudo apt-key fingerprint ABF5BD827BD9BF62
sudo apt update
sudo apt install nginx
sudo apt-get install nginx-module-njs
service nginx start
```

Replace NGINX file

```
mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.old
cp /root/nginx.conf /etc/nginx/nginx.conf
cp /root/http.js /etc/nginx/http.js
/etc/init.d/nginx restart
```
