export const is404 = (err) => {
    return err.response &&
        err.response.status &&
        err.response.status === 404;
}