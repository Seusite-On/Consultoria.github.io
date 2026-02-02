function showSection(section) {
    const content = document.getElementById("main-content");

    if (section === "intro") {
        content.innerHTML = `
            <h2>Introdução</h2>
            <p>Bem-vindo ao manual! Aqui você encontra instruções passo a passo.</p>
        `;
    }

    if (section === "instalar") {
        content.innerHTML = `
            <h2>Instalar Sistema</h2>
            <p>Explicação de como baixar e instalar o sistema.</p>
        `;
    }

    if (section === "estoque") {
        content.innerHTML = `
            <h2>Estoque</h2>
            <p>Informações e exemplos sobre o módulo de estoque.</p>
        `;
    }

    if (section === "comercial") {
        content.innerHTML = `
            <h2>Comercial</h2>
            <p>Detalhes das funções comerciais.</p>
        `;
    }

    if (section === "financeiro") {
        content.innerHTML = `
            <h2>Financeiro</h2>
            <p>Explicações sobre o módulo financeiro.</p>
        `;
    }
}
