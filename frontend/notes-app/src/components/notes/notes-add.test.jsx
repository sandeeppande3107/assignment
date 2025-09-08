import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import { addNote } from '../../store/notes/notes-actions';
import { useToast } from '../shared/toast/toast-hook';
import AddNoteForm from './notes-add';
import { createTestStore } from '../../store/test/mock-store';

vi.mock('../../store/notes/notes-actions', () => ({
    addNote: vi.fn((payload) => ({ type: 'ADD_NOTE', payload })),
}));

vi.mock('../shared/toast/toast-hook', () => ({
    useToast: vi.fn(),
}));

describe('AddNoteForm (Vitest)', () => {
    let mockShowToast;

    beforeEach(() => {
        mockShowToast = vi.fn();
        useToast.mockReturnValue({ showToast: mockShowToast });
        vi.clearAllMocks();
    });

    const renderWithStore = (store) =>
        render(
            <Provider store={store}>
                <AddNoteForm />
            </Provider>
        );

    it('shows validation error when title is empty and does not dispatch', () => {
        const store = createTestStore();
        const dispatchSpy = vi.spyOn(store, 'dispatch');

        renderWithStore(store);

        fireEvent.click(screen.getByRole('button', { name: /add/i }));

        expect(screen.getByText(/title is required/i)).toBeInTheDocument();
        expect(dispatchSpy).not.toHaveBeenCalled();
    });

    it('dispatches addNote when title provided and clears inputs', () => {
        const store = createTestStore();
        const dispatchSpy = vi.spyOn(store, 'dispatch');

        renderWithStore(store);

        const titleInput = screen.getByPlaceholderText(/title/i);
        const contentInput = screen.getByPlaceholderText(/content/i);
        const addButton = screen.getByRole('button', { name: /add/i });

        fireEvent.change(titleInput, { target: { value: 'My Note' } });
        fireEvent.change(contentInput, { target: { value: 'Some content' } });
        fireEvent.click(addButton);

        expect(addNote).toHaveBeenCalledWith({ title: 'My Note', content: 'Some content' });
        expect(dispatchSpy).toHaveBeenCalledWith({
            type: 'ADD_NOTE',
            payload: { title: 'My Note', content: 'Some content' },
        });

        expect(titleInput.value).toBe('');
        expect(contentInput.value).toBe('');
    });

    it('shows toast when isNoteAdded is true', () => {
        const store = createTestStore({
            notes: {
                addNotes: { loading: false, isNoteAdded: true },
            },
        });

        renderWithStore(store);

        expect(mockShowToast).toHaveBeenCalledWith('Note added successfully', 'success');
    });
});
