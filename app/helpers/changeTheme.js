export default function changeTheme(tones) {
  let { color, fill, boxFill } = tones;

  document.documentElement.style.setProperty("--Lcolor", `${color}%`);
  document.documentElement.style.setProperty(
    "--fill",
    `hsl(220, 13%, ${fill}%)`
  );
  document.documentElement.style.setProperty(
    "--boxFill",
    `220, 13%, ${boxFill}%`
  );
}
