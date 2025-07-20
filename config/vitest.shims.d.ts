/// <reference types="@vitest/browser/providers/playwright" />

// Оставляем только объявления для обычных CSS-файлов, если они вам нужны.
// Декларации для *.module.css и *.module.scss УДАЛЕНЫ, так как они
// теперь предоставляются через "types": ["vite/client"] в tsconfig.
declare module "*.css";
declare module "*.scss";
