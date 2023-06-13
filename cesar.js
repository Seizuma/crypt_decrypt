/**
 * Crypte la chaîne de caractères donnée en utilisant le chiffrement de César.
 *
 * @param {string} texte - La chaîne de caractères à crypter.
 * @param {number} decalage - Le nombre de positions à décaler chaque caractère.
 * @returns {string} - La chaîne de caractères cryptée.
 */
const crypterCesar = (texte, decalage) => {
    let texteCrypte = "";

    for (let i = 0; i < texte.length; i++) {
        const caractereOriginal = texte[i];

        // Vérifie si le caractère est une lettre de l'alphabet
        if (caractereOriginal.match(/[a-z]/i)) {
            // Détermine le code ASCII du caractère original
            const codeCaractereOriginal = texte.charCodeAt(i);

            // Détermine le code ASCII de base (65 pour majuscule, 97 pour minuscule)
            const base = (codeCaractereOriginal >= 65 && codeCaractereOriginal <= 90) ? 65 : 97;
            // Détermine le caractère crypté en fonction du code ASCII de base
            const caractereCrypte = String.fromCharCode(((codeCaractereOriginal - base + decalage) % 26) + base);
            // Ajoute le caractère crypté au texte crypté
            texteCrypte += caractereCrypte;
        } else {
            // Ajoute le caractère original au texte crypté
            texteCrypte += caractereOriginal;
        }
    }

    return texteCrypte;
};

/**
 * Décrypte une chaîne de caractères qui a été cryptée en utilisant le chiffrement de César.
 *
 * @param {string} texte - La chaîne de caractères à décrypter.
 * @param {number} decalage - Le nombre de positions qui a été utilisé pour décaler chaque caractère lors du cryptage.
 * @returns {string} - La chaîne de caractères décryptée.
 */
const decrypterCesar = (texte, decalage) => {
    let texteDecrypte = "";

    for (let i = 0; i < texte.length; i++) {
        const caractereOriginal = texte[i];

        // Vérifie si le caractère est une lettre de l'alphabet
        if (caractereOriginal.match(/[a-z]/i)) {
            // Détermine le code ASCII du caractère original
            const codeCaractereOriginal = texte.charCodeAt(i);

            // Détermine le code ASCII de base (65 pour majuscule, 97 pour minuscule)
            const base = (codeCaractereOriginal >= 65 && codeCaractereOriginal <= 90) ? 65 : 97;
            // Détermine le caractère décrypté en fonction du code ASCII de base
            const caractereDecrypte = String.fromCharCode(((codeCaractereOriginal - base - decalage + 26) % 26) + base);
            // Ajoute le caractère décrypté au texte décrypté
            texteDecrypte += caractereDecrypte;
        } else {
            // Ajoute le caractère original au texte décrypté
            texteDecrypte += caractereOriginal;
        }
    }

    return texteDecrypte;
};
