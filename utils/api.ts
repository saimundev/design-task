const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export async function api<T>(url: string): Promise<T> {
  const res = await fetch(BASE_URL + url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch: ${url}`);
  return res.json() as Promise<T>;
}
