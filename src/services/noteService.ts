import axios from 'axios';

const api = axios.create({
    baseURL: 'https://notehub-public.goit.study/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
});

interface NoteParams {
    page: number;
    perPage: number;
}

const defaultParams: NoteParams = {
    page: 1,
    perPage: 12
}

async function fetchNotes(params: NoteParams = defaultParams): Promise<any> {
    try {
        const response = await api.get('/notes', {params});
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        console.log('Request completed');
    }
}

async function createNote(note) {
    try {
        const response = await api.post('/notes', note);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function deleteNote(id) {
    try {
        const response = await api.delete(`/notes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export {fetchNotes, createNote, deleteNote}