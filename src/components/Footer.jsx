import footer from '../content/footer.json';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Designed &amp; developed by {footer.name} — {footer.year}{' · '}<a href={`mailto:${footer.email}`}>{footer.email}</a></p>
    </footer>
  );
}
