const URL = 'https://api.github.com';
async function githubfetch(path) {
  const response = await fetch(`${URL}${path}`);
  if (response.status === 404) throw new Error("User Not Found ! Check The Username")
  if (response.status === 403) throw new Error("Api Limit exceded")
  const data = await response.json()
  return data;
}
export const getRepos = ((username) =>
  githubfetch(`/users/${username}/repos`)
);
export const getProfile = ((username) =>
  githubfetch(`/users/${username}`)
)