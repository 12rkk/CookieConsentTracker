// Base URL para o backend
const API_BASE_URL = 'https://api.suaempresa.com'; // Substitua pelo endpoint real

// Função para gerar ou obter o userId do Local Storage ou Cookie
function getOrCreateUserId() {
    let userId = localStorage.getItem('user_id');
    
    // Se o userId não existir, cria um novo UUID
    if (!userId) {
        userId = crypto.randomUUID(); // Gera um novo UUID
        localStorage.setItem('user_id', userId);
        document.cookie = `user_id=${userId}; path=/; domain=suaempresa.com; Secure; SameSite=Strict; max-age=31536000`;
    }
    return userId;
}

// Função para gerar e armazenar o fingerprint do usuário
async function generateFingerprint() {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const fingerprint = result.visitorId;

    // Armazenar o fingerprint no Local Storage
    localStorage.setItem('fingerprint', fingerprint);
    console.log('Fingerprint gerado:', fingerprint);

    return fingerprint;
}

// Função para enviar o consentimento ao backend automaticamente
async function sendConsentAutomatically() {
    const userId = getOrCreateUserId();
    const fingerprint = await generateFingerprint();

    // Enviar o consentimento para o backend via fetch
    await fetch(`${API_BASE_URL}/api/consent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId, fingerprint: fingerprint, status: 'accepted' }) // Consentimento automático como "accepted"
    });

    console.log('Consentimento enviado automaticamente.');
}

// Enviar consentimento automaticamente ao carregar a página
sendConsentAutomatically();
