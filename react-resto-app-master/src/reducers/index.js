const initialState = {
  menu: [],
  items: [],
  loading: true,
  error: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false
      }
    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false
      }
    case 'MENU_ERROR':
      return {
        ...state,
        menu: [],
        loading: false,
        error: true
      }
    
    case 'ITEM_ADD_TO_CART':

      const id = action.payload;

      const item = state.menu.find(item => item.id === id);
      const newItem = {
        ...item
      }
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ]
      }

    case 'ITEM_REMOVE_FROM_CART':

      const idx = action.payload;

      const itemIndex = state.items.findIndex(item => item.id === idx);

      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ]
      }

    case 'ITEM_ADD_SAME_TO_CART':

      const myId = action.payload;
      const findItemIndx = state.items.findIndex(item => item.id === myId);
      
      return {
        ...state,
        items: [
          ...state.items.slice(),
          ...state.items.slice(findItemIndx, findItemIndx + 1)
        ]
      }

    case 'REMOVE_ALL_SAME_FROM_CART':

      const idz = action.payload;
      const itemsWithoutExactId = state.items.filter(item => item.id !== idz);

      return {
        ...state,
        items: [
          ...itemsWithoutExactId
        ]
      }

    default:
      return state;
  }
}
export default reducer;