import { useContext, useState, useCallback, useEffect } from "react"
import { ToastContext } from "./toast-context"

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState(null)

    const showToast = useCallback((message, type = "info") => {
        setToast({ message, type, visible: true })
    }, [])

    useEffect(() => {
        if (toast && toast.visible) {
            const timer = setTimeout(() => setToast(null), 2000)
            return () => clearTimeout(timer)
        }
    }, [toast])

    const Toast = () =>
        toast && toast.visible ? (
            <div
                className={`
          fixed top-6 right-6 z-50 px-4 py-2 rounded-xl shadow-lg
          text-white font-medium
          ${toast.type === "error" ? "bg-red-600" : toast.type === "success" ? "bg-green-600" : "bg-blue-600"}
          transition-all
        `}
            >
                {toast.message}
            </div>
        ) : null

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast />
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext)