export function  criarItem(label, valor) {
    if (!valor) return '';
    return `
    <li class="list-group-item d-flex justify-content-between">
    <strong>${label}:</strong>
    <span class="text-end">${valor}</span>
    </li>
    `;
}

export function captalizar(texto){
    if (!texto) return '';
    return texto.charAt(0).toUpperCase() + texto.slice(1);
};