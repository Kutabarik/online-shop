import {toast} from "react-toastify";

export const toastSuccess = (message, time = 5000, id = 'toast', container = "Main") => {
    return toast.success(`🦄 ${message}`, {
        containerId: container,
        position: "top-center",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export const toastWarning = (message, container = "Main") => {
    return toast.warn(message, {
        containerId: container,
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

export const toastError = (message, container = "Main") => {
    return toast.error(message, {
        containerId: "Main",
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