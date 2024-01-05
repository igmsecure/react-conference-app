import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Author {
    id: number;
    middle_name: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    status: string;
    country: string | null;
    city: string | null;
    affiliation: string | null;
    biography: string;
    image: string;
    time_create: string;
    last_modified: string;
}

interface Article {
    id: number;
    title: string;
    annotation: string;
    description: string;
    status: string;
    review: number;
    user: number;
    moderator: number;
    creation_date: string;
    approving_date?: string;
    publication_date?: string;
    authors: Author[]; // Массив идентификаторов объектов
}

interface ArticlesState {
    articles: Article[];
}

const initialState: ArticlesState = {
    articles: [],
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles(state, action: PayloadAction<Article[]>) {
            state.articles = action.payload;
        },

    },
});

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;