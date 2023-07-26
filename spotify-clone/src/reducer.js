export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // set null when finished
    token: "BQBCfA6EKqP6wekiee81svB38n-lhammMzDxLwoW1zt7dyuwDB0vwNESERkXRxk3ZIEgibSNfD37ONCXjy02S7_v-Binorf0Gk9kSABySrit5SzEBfy2z-1ZsfD5-oler_UcYnh23eaLJxVUioLUEXh_S2rrh7Jc9udA3g0cYaz0iIUNs5iAg3iJm7VBK4QbrU8WW3qbKNvvowvt6cRO",
}

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        default:
            return state;
    }
}

export default reducer;