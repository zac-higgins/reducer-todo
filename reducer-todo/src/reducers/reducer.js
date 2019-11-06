export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, { task: action.payload, id: Date.now(), completed: false }]
            };
        case "TOGGLE_TODO":
            return {
                todos: state.todos.map((item, index) => index === action.index ? { ...item, completed: !item.completed } : item)
            };
        case "CLEAR_COMPLETED":
            return {
                todos: state.todos.filter((item) => {
                    if (item.completed === false) {
                        return item;
                    }
                })
            }
        default:
            throw new Error("No action matched!");
    }

};

export const initialState = {
    todos: [
        {
            task: 'Code All The Things!!',
            id: 1528817077286,
            completed: false
        },
        {
            task: 'Get Some Sleep',
            id: 1528817084358,
            completed: false
        }
    ]
}