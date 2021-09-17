// localStorage
export function getStorage(key) {
    return localStorage.getItem(key);
}

export function setStorage(key, val) {
    return localStorage.setItem(key, val);
}

export function removeStorage(key) {
    return localStorage.removeItem(key);
}

// sessionStorage
export function setSessionStorage(name, value) {
    return sessionStorage.setItem(name, value);
}
