const mapConstantsValue = obj =>
	Object.keys(obj).reduce((enumMap, key, idx) => (enumMap[key] = idx), {});

const state = {
	SENDING: "Odesila se",
	DRAFT: "Rozpracovana"
};

const folder = {
	UNIQUE: "Unikatni",
	REGULAR: "Pravidelne"
};

const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

const authors = {1: 'Bill Murray', 2: 'Leonardo Di Caprio', 3: 'Tom Hanks'};

export { state, folder, months, authors };
