const BASE_URL = 'https://api.github.com';

export async function getUserByUsername(username) {
    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(username)}`);

    if (response.status === 404) {
        throw new Error('USER_NOT_FOUND');
    }

    if (!response.ok) {
        throw new Error('Usuário não encontrado.');
    }

    return response.json();
}
