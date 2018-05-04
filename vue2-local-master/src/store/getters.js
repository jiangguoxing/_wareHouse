const getters = {
    evenOrOdd: state => {
        return state.count % 2 === 0 ? "even" : "odd";
    },
    getCount: state => {
        return state.count;
    },
    getContent: state => {
        return state.content;
    }
};

export default getters;