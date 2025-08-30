import { Logo } from "./logo";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  return (
    <header className="flex h-12 w-full items-center justify-between p-2">
      <Logo className="h-5" />
      <ThemeSwitcher />
    </header>
  );
}
