let initialState = { contactList: [], keyword: "" };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };

    case "SEARCH_BY_USERNAME":
      return {
        ...state,
        keyword: payload.keyword,
      };

    default:
      return { ...state };
  }
};

export default reducer;
