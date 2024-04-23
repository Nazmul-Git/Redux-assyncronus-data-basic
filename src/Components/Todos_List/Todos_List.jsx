import { useDispatch, useSelector } from "react-redux"
import store from "../../Store/Store"
import { useEffect } from "react";
import { getAllTodos } from "../../Services/Actions/Actions";

function Todos_List() {

    const { isLoading, error, todos } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos(store));
    }, [])

    return (
        <div>
            <h2 className="text-blue-600 font-extrabold text-4xl text-center">TODOS APP</h2>

            {
                isLoading && <h3>Loading...</h3>
            }
            {
                error && <h3>{error}</h3>
            }
            <section>
                {
                    todos &&
                    todos.map(t => {
                        return (
                            <article key={t.id}>
                                <h4>{t.id}</h4>
                                <h4>{t.title}</h4>
                            </article>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Todos_List;