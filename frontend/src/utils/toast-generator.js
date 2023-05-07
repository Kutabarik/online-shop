import {toast} from "react-toastify";

export const toastSuccess = (message) => {
    return toast.success(`🦄 ${message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export const toastWarning = (message) => {
    return toast.warn(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export const toastError = (message) => {
    return toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export const toastPromise = (promise, onSuccess, onRejected, onPending) => {
    return toast.promise(promise, {
        pending: onPending,
        success: onSuccess,
    })
}