/** 
 * Initial active tab will be "home".
 */
 export const ActiveNavbarTabInitialState = {
    active: "home",
  };
  
  /**
   * 
   * @param {*} state => Previous state of saved variables
   * @param {*} action => Dispatched payload and value is passed through action
   * @returns => If no any case matches with the dispatch request previous state is returned
   */
  const ActiveNavbarTabReducer = (state, action) => {
    switch (action.type) {
      case "SET_ACTIVE_NAVBAR_TAB":
        return {
          active: action.activeTab,
        };
  
      default:
        return state;
    }
  };
  
  export default ActiveNavbarTabReducer;