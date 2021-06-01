export default function Footer() {
  return (
    <footer className="fixed w-screen bottom-0 flex justify-between">
      <img
        className="h-8 m-4"
        src="/Poweredby_100px-White_VertText.png"
        alt="Powered by Giphy"
      />
      <a href="https://www.github.com/simalicrum/coolcatgifs">
        <img
          className="h-8 m-4 w-8 opacity-50"
          src="/Octicons-mark-github.svg"
          alt="Github"
        />
      </a>
    </footer>
  );
}
