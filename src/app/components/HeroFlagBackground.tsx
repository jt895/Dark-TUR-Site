import flagHtmlRaw from "../assets/tur-flag.html?raw";

const flagHtml = flagHtmlRaw
  .replace(
    /\.stage\{width:min\(96vw,1100px\);aspect-ratio:1221\/864;[\s\S]*?overflow:hidden;\}/,
    '.stage{width:100vw;height:100vh;aspect-ratio:auto;overflow:hidden;}'
  )
  .replace(
    /#demo\{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;\}/,
    '#demo{position:absolute;inset:0;display:block;}'
  )
  .replace(/<div id="badge"[\s\S]*?<\/div>/, '');

export function HeroFlagBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <iframe
        title="The United Republic animated page background"
        srcDoc={flagHtml}
        className="absolute inset-0 h-full w-full border-0 opacity-40 mix-blend-screen scale-125"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,111,83,0.06),rgba(6,10,10,0.74)_58%,rgba(6,10,10,0.88)_100%)]" />
    </div>
  );
}
