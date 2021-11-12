---
title: Domain (в программирование)
url: domain-in-programming
image: ../images/gatsby-astronaut.png
---

# [[Domain (в программирование)]]

**Domain** - код который ближе всего бизнесу и с большой вероятностью будет меняться, поэтому важно чтобы был легко понятен и легко изменяем.

Данные могут быть двух типов:

- [[Entity Object]]
- [[Value Object]]

В домене могут быть не только объекты, но и например сервисы, которые обслуживают домен (domain service).

Exceptions тоже могут быть частью Домена.

Следуя принципу [[SOLID]] [[Принцип инверсии зависимостей (The Dependency Inversion Principle)]]. Нам нужно разделить Domain Layer от Data Layer с помощью [[Паттерн Repository]].

---

Tags:
Reference: [Architecture Patterns with Python -> Domain Modeling](https://www.cosmicpython.com/book/chapter_01_domain_model.html)
