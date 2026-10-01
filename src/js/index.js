const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const username = inputSearch.value;

    if (username) {
        profileResults.innerHTML = '<p class="loading">Carregando...</p>';

        try {
            const response = await fetch(`${BASE_URL}/users/${username}`);

            if (!response.ok) {
                alert("Usuario não encontrado. Por favor, verifique o nome de usuario e tente novamente.");
                profileResults.innerHTML = '';
                return;
            }

            const userData = await response.json();
            console.log(userData);

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || 'Não possui bio cadastrada.😢'}</p>
                    <p>Seguidores: ${userData.followers}</p>
                    <p>Seguindo: ${userData.following}</p>
                </div>
            </div>
            `;

        } catch (error) {
            console.error('Erro ao buscar perfil do usuário:', error);
            alert('Ocorreu um erro ao buscar perfil do usuário. Por favor, tente novamente.');
            profileResults.innerHTML = '';
        }
    } else {

        alert('Por favor, digite um nome de usuário do GitHub.');
        profileResults.innerHTML = '';
    }
});

