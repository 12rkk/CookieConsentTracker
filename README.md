# Cookie Consent Tracker

O **Cookie Consent Tracker** é um protótipo de plugin para WordPress desenvolvido para rastrear e armazenar o consentimento de cookies dos usuários. Ele utiliza fingerprints gerados no JavaScript para identificar usuários de forma única, permitindo persistir informações de consentimento, incluindo a versão dos cookies aceitos.

> **Nota**: Este projeto foi criado para uma situação específica e não foi totalmente testado nem levado adiante. Ele serve como demonstração de conceito e pode requerer ajustes para uso em produção.

---

## Como usar

### 1. Faça o download do repositório
Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/12rkk/CookieConsentTracker.git


2. Instale o plugin no WordPress
Acesse o painel administrativo do WordPress.
Vá até Plugins > Adicionar Novo > Enviar Plugin.
Selecione o diretório do projeto ou crie um arquivo .zip do diretório CookieConsentTracker/ para upload.
Ative o plugin após a instalação.

3. Configuração adicional
API Base URL: Atualize a variável API_BASE_URL no arquivo js/app.js com o endpoint do backend que processará os dados de consentimento.
Banco de Dados: Certifique-se de que o backend está configurado para persistir os dados enviados, como userId, fingerprint, e status (exemplo de status: accepted ou rejected).

Exemplo de Uso
O script gera um userId único e o armazena no localStorage e em um cookie.
Um fingerprint é gerado utilizando a biblioteca FingerprintJS para identificar o usuário de forma persistente.
Sempre que a página é carregada, o consentimento do usuário é enviado ao backend.

Limitações
Este plugin é um protótipo, não testado em ambientes reais.
A integração com o backend Flask e o banco de dados para salvar as informações de consentimento deve ser configurada manualmente.
Não inclui suporte para alterações no consentimento diretamente pela interface do WordPress.

Tecnologias Utilizadas
PHP: Base do plugin para integração com WordPress.
JavaScript: Geração de fingerprints e comunicação com o backend via fetch.
FingerprintJS: Biblioteca para geração de fingerprints únicos.
Flask (backend): Para persistência dos dados de consentimento (não incluso neste repositório, mas necessário para funcionamento completo).
Considerações Finais
O Cookie Consent Tracker foi criado como um protótipo experimental e não está pronto para produção. Ele pode ser utilizado como base para projetos semelhantes e ajustado conforme as necessidades. Contributions são bem-vindas! 😊

Autor: Rafael Cavalheiro (Hallow33n 12rkk)
GitHub: https://gist.github.com/12rkk

