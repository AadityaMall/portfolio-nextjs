export default function Footer() {
  return (
    <footer
      className="relative z-10 py-6 text-center"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <p
        className="text-sm font-medium"
        style={{ color: "var(--color-text-muted)" }}
      >
        Aaditya Mall · © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
