export const routes = {
    home: "/",
    faq: "/faq",
    addPawn: "/add-pawn"
}

export const goToPreviousLocation = (navigate, location, addReferrer, path) => {
    window.history.state && window.history.state.idx > 0
        ? (addReferrer && path ? navigate(path) : navigate(-1)) // navigate(path, { referrer: location.pathname })
        : navigate(routes.home);
}