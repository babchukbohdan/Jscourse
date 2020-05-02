const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
}

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED'
  }
}

const menuError = () => {
  return {
    type: 'MENU_ERROR'
  }
}

const addedToCart = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payload: id
  }
}

const deleteFromCart = (id) => {
  return {
    type: 'ITEM_REMOVE_FROM_CART',
    payload: id
  }
}

const addSameToCart = (id) => {
  return {
    type: 'ITEM_ADD_SAME_TO_CART',
    payload: id
  }
}

const removeCategoryFromCart = (category) => {
  return {
    type: 'REMOVE_CATEGORY_FROM_CART',
    payload: category
  }
}

export {
  menuLoaded,
  menuRequested,
  menuError,
  addedToCart,
  deleteFromCart,
  addSameToCart,
  removeCategoryFromCart
};