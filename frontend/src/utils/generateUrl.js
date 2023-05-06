/**
 * Generate Url From Object
 * @param obj
 * @returns {string}
 */
export const generateUrl = (obj) => {
    const searchParams = new URLSearchParams();

    Object.keys(obj).forEach((key) => {
        if (!obj[key]) {
            return;
        }

        searchParams.append(key, obj[key]);
    })

    return searchParams.toString();
}