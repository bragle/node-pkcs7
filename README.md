## A super tiny library to apply and strip PKCS#7 padding.

Example using Crypto and node-pkcs7 to encrypt content with PKCS#7:

```javascript
function encrypt(content, algorithm, password, IV) {

	content = PKCS7.apply(content);

	const encrypt = Crypto.createCipheriv(algorithm, password, IV).setAutoPadding(false);

	let encryptedContent;

	encryptedContent  = encrypt.update(content, 'utf8', 'base64');
	encryptedContent += encrypt.final('base64');

	return encryptedContent;

}
```

Example using Crypto and node-pkcs7 to decrypt content with PKCS#7:

```javascript
function decrypt(encryptedContent, algorithm, password, IV) {

	const decrypt = Crypto.createDecipheriv(algorithm, password, IV).setAutoPadding(false);

	let content;

	content  = decrypt.update(encryptedContent, 'base64', 'utf8');
	content += decrypt.final('utf8');

	return PKCS7.strip(content);

}
```
