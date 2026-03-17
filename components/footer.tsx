export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p>
        Construit avec{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-foreground hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        et{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-foreground hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        , deploye sur{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-foreground hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
        . Le code source est disponible sur{" "}
        <a
          href="https://github.com"
          className="font-medium text-foreground hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
