function removeAccent(str) {
    const comAcento = `ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ`;
    const semAcento = `AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr`;

    return output = [...str].map(letra => {
        const idx = comAcento.indexOf(letra);
        const letraSemAcento = idx > -1 ? semAcento[idx] : letra;
        return letraSemAcento;
    }).join('');
}

removeAccent('filipé á é í');

module.exports = removeAccent;