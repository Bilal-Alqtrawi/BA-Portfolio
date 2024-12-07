export const TOGGLE_DARK_MODE = "theme/TOGGLE_DARK_MODE";

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

const initialState = {
  isDarkMode: JSON.parse(localStorage.getItem("isDarkMode")) || false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      const newMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode",JSON.parse(newMode));
      return {
        ...state,
        isDarkMode: newMode 
      };
    default:
      return state;
  }
}
