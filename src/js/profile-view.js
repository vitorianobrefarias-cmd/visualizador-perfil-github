export function renderLoading(container) {
    const loading = document.createElement('p');
    loading.className = 'loading';
    loading.setAttribute('role', 'status');
    loading.textContent = 'Carregando...';
    container.replaceChildren(loading);
}

export function renderProfile(container, userData) {
    const card = document.createElement('div');
    card.className = 'profile-card';

    const avatar = document.createElement('img');
    avatar.className = 'profile-avatar';
    avatar.src = userData.avatar_url;
    avatar.alt = `Avatar de ${userData.name || userData.login}`;

    const info = document.createElement('div');
    info.className = 'profile-info';

    const name = document.createElement('h2');
    name.textContent = userData.name || userData.login;

    const bio = document.createElement('p');
    bio.textContent = userData.bio || 'Não possui bio cadastrada.😢';

    info.append(name, bio);
    card.append(avatar, info);

    const counters = document.createElement('div');
    counters.className = 'profile-counters';
    counters.append(
        createCounter('followers', '👥 Seguidores', userData.followers),
        createCounter('following', '👥 Seguindo', userData.following)
    );

    container.replaceChildren(card, counters);
}

export function clearProfileResults(container) {
    container.replaceChildren();
}

function createCounter(className, label, value) {
    const counter = document.createElement('div');
    counter.className = className;

    const heading = document.createElement('h4');
    heading.textContent = label;

    const count = document.createElement('span');
    count.textContent = value;

    counter.append(heading, count);
    return counter;
}
