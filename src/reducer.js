export const initialState = {
	user: null,
	OrderData: [],
	newOrder: false,
	editOrder: null,
	// token:
	// 	"BQCKWcwjJpvab3HqgoBWUGAELiYZQ-c",
};

export const reducer = (state, action) => {
	// console.log(action);
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_ORDERDATA":
			return {
				...state,
				OrderData: action.OrderData,
			};
		case "SET_NEWORDER":
			return {
				...state,
				newOrder: action.newOrder,
			};
		case "SET_EDITORDER":
			return {
				...state,
				editOrder: action.editOrder,
			};
		default:
			return state;
	}
};
