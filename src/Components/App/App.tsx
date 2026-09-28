import css from './App.module.css';
import { fetchNotes } from "../../services/noteService.ts";
import SearchBox from "../SearchBox/SearchBox.tsx";
import Pagination from "../Pagination/Pagination.tsx";

function App() {

    async function handleClick(){
        try
        {
            const data = await fetchNotes ();
            console.log(data);
        }
        catch (error)
        {
            console.error(error);
        }
    }

    return (
        <>
            <div className={css.app}>
                <header className={css.toolbar}>
                    <SearchBox />
                    <Pagination />
                    <button className={css.button}>Create note +</button>
                </header>
            </div>

        </>
    )
}

export default App
