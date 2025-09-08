import { Provider } from 'react-redux'
import { store } from './store/app.store'
import NotesPage from './pages/notes-page'
import { ToastProvider } from './components/shared/toast/toast-hook'
import APIErrorHandler from './components/shared/error-handler'

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <div className="min-h-screen p-4">
          <NotesPage />
        </div>
        <APIErrorHandler />
      </ToastProvider>
    </Provider>
  )
}
