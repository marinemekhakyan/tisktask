// import { runInNewContext } from "vm";

export default {
  login: (username, password) =>
    fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    }),
  register: (username, password) =>
    fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    }),

  logout: () => fetch("/api/auth/", { method: "DELETE" }),
  validateCookie: sid => fetch(`/api/auth/session/${encodeURIComponent(sid)}`),

  findAllTickets: unitId => fetch(`/api/unit/${unitId}/tickets/`),
  updateTicket: (unitId, id, update) =>
    fetch(`/api/unit/${unitId}/ticket/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update)
    })
};
