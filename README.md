# Калькулятор

<!-- Бейджи статуса CI/CD -->
<!-- Замените <username> и <repository> на ваши значения после публикации на GitHub -->
<!--
![CI](https://github.com/<username>/<repository>/workflows/CI/badge.svg)
![Deploy](https://github.com/<username>/<repository>/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
![CodeQL](https://github.com/<username>/<repository>/workflows/CodeQL%20Security%20Analysis/badge.svg)
-->

Это упрощенная версия калькулятора с чистой архитектурой.


## Установка

```bash
npm install
```

## Запуск

### Веб-версия
```bash
npm run web
```

### CLI-версия
```bash
npm run cli
```

### Сборка
```bash
npm run build
```

## 🚀 CI/CD

Проект настроен с GitHub Actions для автоматизации:

- **CI** - автоматическая проверка кода при каждом push/PR
- **Deploy** - автоматический деплой на GitHub Pages при push в main
- **CodeQL** - анализ безопасности кода
- **Dependency Review** - проверка зависимостей в PR
- **Dependabot** - автоматические обновления зависимостей

## 📦 Структура проекта

```
calculator-pure/
├── src/
│   ├── core/              # Бизнес-логика
│   ├── adapters/          # Связующий слой
│   └── infrastructure/    # Детали реализации
├── .github/
│   ├── workflows/         # GitHub Actions
│   └── SETUP.md          # Инструкции по настройке CI/CD
└── package.json
```
