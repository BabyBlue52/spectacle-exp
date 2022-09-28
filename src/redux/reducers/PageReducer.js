const initialState = {
    currentPage: 1
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHAPTER_1' :
            return {
                ...state,
                currentPage: 0
            }
        case 'CHAPTER_2' :
            return {
                ...state,
                currentPage: 1
            }
        case 'CHAPTER_3' :
            return {
                ...state,
                currentPage: 2
            }
                    
        case 'CHAPTER_4' :
            return {
                ...state,
                currentPage: 3
            }

        case 'CHAPTER_5' :
        return {
            ...state,
            currentPage: 4
        }
        default: 
            return state;
    }
}

export default { pageReducer }