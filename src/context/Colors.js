export const colorThemes = { turquoise: "turquoise", crimson: "crimson" };

const AppTheme = {
  [colorThemes.turquoise]: {
    BackgroundColor: "#00a3a8",
    PokemonCardBackgroundColor: "#00b58c",
    ListBackgroundColor: "#d9f9d9",
    LinkBackgroundColor: "#265fa5",
    LinkColor: "#ffdc83",
    PokemonNameColor: "#2f4858",
    ThemeTogglerIcon: "🌞",
  },

  [colorThemes.crimson]: {
    BackgroundColor: "#c25e5e",
    PokemonCardBackgroundColor: "#93656e",
    ListBackgroundColor: "#ffe4e1",
    LinkBackgroundColor: "#530004",
    LinkColor: "#f3eed9",
    PokemonNameColor: "#574240",
    ThemeTogglerIcon: "🌙",
  },
};

export default AppTheme;
