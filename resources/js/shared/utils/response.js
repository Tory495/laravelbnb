export const is404 = (err) => {
    return isErrorResponseAndStatus(err) &&
        err.response.status === 404;
}

export const is422 = (err) => {
    return isErrorResponseAndStatus(err) &&
        err.response.status === 422;
}

function isErrorResponseAndStatus(err) {
    return err.response &&
        err.response.status;
}