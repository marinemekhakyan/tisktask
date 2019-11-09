export default {
  login: (username, password) => 
    fetch("/api/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }),
  register: (username, password) =>
    fetch("/api/auth/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
  ,
  logout: () => fetch("/api/auth/", { method: 'DELETE' }),
  validateCookie: sid => fetch(`/api/auth/session/${encodeURIComponent(sid)}`),
};
