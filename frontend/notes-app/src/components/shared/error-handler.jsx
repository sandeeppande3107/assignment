import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectErrorVisible, selectErrorMessage } from "../../store/error/error-selector"
import { hideApiError } from "../../store/error/error-actions"
import { useToast } from "./toast/toast-hook"

const APIErrorHandler = () => {
    const dispatch = useDispatch()
    const visible = useSelector(selectErrorVisible)
    const message = useSelector(selectErrorMessage)
    const { showToast } = useToast()

    useEffect(() => {
        if (visible && message) {
            showToast(message, "error")
            dispatch(hideApiError())
        }
    }, [visible, message])

    return null;
}

export default APIErrorHandler;