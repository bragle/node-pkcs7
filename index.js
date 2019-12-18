const PKCS7 = {

	apply: string => {

		const buffer = Buffer.from(string, 'utf8'),
			padding = 16 - buffer.length % 16;

		return Buffer.concat([buffer, Buffer.alloc(padding, padding)]).toString();

	},

	strip: string => {

		const buffer = Buffer.from(string, 'utf8');

		return buffer.slice(0, buffer.length - buffer[buffer.length - 1]).toString();

	}

};

module.exports = PKCS7;
