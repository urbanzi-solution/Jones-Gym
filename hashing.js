const bcrypt = require('bcrypt');

async function textToBcrypt(text, saltRounds = 10) {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(saltRounds);
        
        // Hash the text with the salt
        const hash = await bcrypt.hash(text, salt);
        
        return hash;
    } catch (error) {
        console.error('Error generating bcrypt hash:', error);
        throw error;
    }
}

// Example usage
(async () => {
    const plainText = 'password123'; // Replace with your text
    try {
        const hash = await textToBcrypt(plainText);
        console.log('Original Text:', plainText);
        console.log('Bcrypt Hash:', hash);
    } catch (error) {
        console.error('Failed to generate hash:', error);
    }
})();