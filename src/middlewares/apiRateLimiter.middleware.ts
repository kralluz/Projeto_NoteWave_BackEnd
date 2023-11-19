const rateLimit = require('express-rate-limit');

// Cria uma instância de Rate Limit
export const apiRateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // Janela de tempo de 15 minutos
    max: 100, // Limite de 100 requisições por janela de tempo por IP
    message: 'Excedido o limite de requisições! Tente novamente mais tarde.',
    headers: true, // Mostra os cabeçalhos de limite de taxa
});

