// animated tab
const animation = [
  {
    emoji: "🌍",
    title: "AROUND the world",
  },
  {
    emoji: "🌏",
    title: "around THE world",
  },
  {
    emoji: "🌎",
    title: "around the WORLD",
  },
];

let tabAnimationStep = 0;
const favicon = document.querySelector("link[rel='icon']");
const updateTab = () => {
  const currentAnimation = animation[tabAnimationStep % animation.length];
  favicon.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${currentAnimation.emoji}</text></svg>`;
  document.title = currentAnimation.title;
  tabAnimationStep++;
  setTimeout(updateTab, 1000);
};

updateTab();
