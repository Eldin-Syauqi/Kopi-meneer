import type { User } from "@/types";

interface BackendlessUser {
  objectId?: string;
  email?: string;
  name?: string;
}

const SESSION_KEY = "kopi-meneer-session";

function markSession(active: boolean) {
  try {
    if (active) localStorage.setItem(SESSION_KEY, "1");
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    return;
  }
}

function hasSession() {
  try {
    return localStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

async function getBackendless() {
  const { default: Backendless } = await import("@/api/backendless");
  return Backendless;
}

function toUser(raw: BackendlessUser): User {
  return {
    objectId: String(raw.objectId),
    email: raw.email ?? "",
    name: raw.name,
  };
}

export async function login(email: string, password: string): Promise<User> {
  const Backendless = await getBackendless();
  const user = await Backendless.UserService.login<BackendlessUser>(email, password, true);
  markSession(true);
  return toUser(user);
}

export async function logout(): Promise<void> {
  const Backendless = await getBackendless();
  try {
    await Backendless.UserService.logout();
  } finally {
    markSession(false);
  }
}

export async function getCurrentUser(): Promise<User | null> {
  if (!hasSession()) return null;
  const Backendless = await getBackendless();
  const user = await Backendless.UserService.getCurrentUser<BackendlessUser | null>();
  if (!user) markSession(false);
  return user ? toUser(user) : null;
}
