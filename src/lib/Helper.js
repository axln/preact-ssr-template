export function setJSONCookie(name, value, days) {
    //let cookies = `${name}=${escape(JSON.stringify(value))}`;
    let cookie = `${name}=${JSON.stringify(value)}`;
    if (days) {
        const now = new Date();
        const expireTime = now.setDate(now.getDate() + days);
        cookie += `;expires=${new Date(expireTime).toUTCString()}`
    }
    return cookie;
}

export function getStateFromCookies({ s }) {
    try {
        return s && JSON.parse(s) || null;
    } catch (_) {
        return null;
    }
}

export const htmlShell = (content = '', state = {}) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>webpack learn</title>
    <script>window.__STATE__=${JSON.stringify(state)}</script>
    <script src="/bundle.js"></script>
</head>
<body>
    <div id="root">${content}</div>
</body>
</html>`;

