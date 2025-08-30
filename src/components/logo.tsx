import { cn } from "@/lib/utils";

type LogoProps = {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("h-8", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        fill="none"
        viewBox="0 0 32 32"
      >
        <circle
          cx="16"
          cy="16"
          r="15"
          fill="text-white dark:text-black"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          fill="currentColor"
          d="M24.934 22.66a.96.96 0 0 1-.6-.2l-5.86-4.58v3.78q0 .38-.3.68-.28.3-.68.3a1 1 0 0 1-.7-.28 1 1 0 0 1-.28-.7V10a.95.95 0 0 1 .28-.7q.3-.28.7-.28t.68.28q.3.28.3.7v3.92l5.46-4.68q.28-.24.64-.24.38 0 .66.32.3.3.3.68 0 .44-.34.74l-6.04 5.18 6.38 4.98q.38.3.38.78 0 .42-.3.7a.93.93 0 0 1-.68.28M9.78 22.64q-1.3 0-2.16-.52-.84-.54-1.24-1.36A4.2 4.2 0 0 1 6 19.02q0-.44.26-.74.28-.3.74-.3.42 0 .7.3.3.28.3.7 0 1.66 1.78 1.66.82 0 1.24-.38.42-.4.42-1.04V11.3H9.62q-.42 0-.72-.28-.3-.3-.3-.72 0-.4.3-.68.3-.3.72-.3h3.82q.4 0 .68.3.3.28.3.68t-.28.7a.84.84 0 0 1-.64.28h-.06v7.94q0 1.5-1 2.46-.98.96-2.66.96"
        />
      </svg>
    </div>
  );
}
