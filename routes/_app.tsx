import { type PageProps } from "$fresh/server.ts";
import ThemeToggle from "../islands/ThemeToggle.tsx";
import { theme } from "../signals/theme.ts";
import themes from "../theme-config.ts";
const { DARK: dark, LIGHT: light } = themes;

export default function App({ Component, state }: PageProps) {
  const themeState = state.theme === dark ? dark : light;
  theme.value = themeState;
  const currentTheme = theme.value;
  return (
    <html data-theme={currentTheme}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fresh</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="bg-base-100 navbar">
          <div class="flex-1">
            <a class="rounded text-xl btn btn-ghost">Fresh</a>
          </div>
          <div class="flex-none">
            <ThemeToggle />
          </div>
        </div>
        <Component />
      </body>
    </html>
  );
}
