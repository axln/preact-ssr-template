export function increment({ counter }, by = 1) {
    return { counter: counter + by };
}
