import { getMovies } from "@/service/movieService";

export const actionTypes = {
    setDatas: "movies/setDatas",
    fetchMovies: "movies/fetchMovies"
};

export function setDatas(datas) {
    return { type: actionTypes.setDatas, payload: datas };
}

export function fetchMovies(page = 1, limit = 10) {
    return async function (dispatch) {
        const res = await getMovies(page, limit)
        dispatch(setDatas(res.data))
    }
}