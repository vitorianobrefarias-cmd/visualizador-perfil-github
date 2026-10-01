import { getUserByUsername } from './github-api.js';
import {
    clearProfileResults,
    renderLoading,
    renderProfile
} from './profile-view.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

async function searchUser() {
    const username = inputSearch.value.trim();

    if (!username) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        clearProfileResults(profileResults);
        return;
    }

    renderLoading(profileResults);

    try {
        const userData = await getUserByUsername(username);
        renderProfile(profileResults, userData);
    } catch (error) {
        console.error('Erro ao buscar perfil do usuário:', error);

        if (error.message === 'USER_NOT_FOUND') {
            alert('Usuário não encontrado. Verifique o nome de usuário e tente novamente.');
        } else {
            alert('Ocorreu um erro ao buscar o perfil do usuário. Tente novamente.');
        }

        clearProfileResults(profileResults);
    }
}

btnSearch.addEventListener('click', searchUser);

