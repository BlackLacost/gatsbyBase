---
title: Выпуск сертификата SSL для Nginx
url: nginx-ssl-cert
image: ../images/gatsby-astronaut.png
---

# [[Выпуск сертификата SSL для Nginx]]

Чтобы выпустить сертификат SSL достаточно установить certbot.

```bash
sudo apt install python3-certbot-nginx
```

И запустить:

```bash
sudo certbot --nginx -d <ваш_домен>,www.<ваш_домен>
```

---

Tags: [[Nginx]] - [[Веб сервер]] - [[SSL]]
Reference: [Modern APIs with FastAPI and Python Course -> 08 Deploying FastAPI on Linux with gunicorn and nginx -> 12-adding-ssl-for-https](https://cloud.mail.ru/public/Sb3X%2FysNiBBduV)
