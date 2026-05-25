export const TOGGLE_DARK_MODE = "theme/TOGGLE_DARK_MODE";

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

function readStoredDark() {
  try {
    const raw = localStorage.getItem("isDarkMode");
    if (raw === null) return false;
    return JSON.parse(raw) === true;
  } catch {
    return false;
  }
}

const initialState = {
  isDarkMode: readStoredDark(),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE: {
      const newMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", JSON.stringify(newMode));
      return {
        ...state,
        isDarkMode: newMode,
      };
    }
    default:
      return state;
  }
}
