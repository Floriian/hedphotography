export default async function serverFetch(endpoint: string, [...args]: any[]) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}` + endpoint,
    ...args,
  );
}
