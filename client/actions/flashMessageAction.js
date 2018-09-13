import { ADD_FLASH_MESSAGE } from './Types.js';
// Create Action Creator for add flash message
const addFlashMessage = (message) => {
    return {
        type: ADD_FLASH_MESSAGE,
        message
    };
};

export { addFlashMessage };

