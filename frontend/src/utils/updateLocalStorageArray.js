export const updateLocalStorageArray = (key, track) => {
    const ls = localStorage.getItem(key);

    const tracks = ls ? JSON.parse(ls) : [];

    tracks.push(track);

    localStorage.setItem(key, JSON.stringify(tracks));
}
