import { surveyConstants } from "../Constants";

const movies = [
	"Krstný Otec",
	"12 Angry Men",
	"Forrest Gump",
	"Temný Rytier",
	"Cesta do fantázie",
	"Klub Bitkárov",
	"Počiatok",
	"Interstellar",
	"Mlčanie Jahniat",
	"One Flew Over the Cuckoo's Nest",
	"Mafiáni",
	"Shichinin no samurai",
	"Sedem",
	"Mesto bohov",
	"Život je krásný",
	"Zachránte vojaka Ryana",
	"The Usual Suspects",
	"Léon",
	"Zelená míla",
	"Psycho",
	"Kult Hákového Kríža",
	"Svetlá Veľkomesta",
	"Casablanca",
	"Vtedy na Západe",
	"Moderná Doba",
	"Pianista",
	"The Intouchables",
	"Na druhej strane",
	"Návrat do budúcnosti",
	"Terminator 2: Judgment Day",
	"Whiplash",
	"Rear Window",
	"Leví král"
];

const oneDay = 24 * 3600000;
let index = 0;

export default () => {
	const viewed = Math.floor(Math.random() * 8000);
	const ends = Math.floor(Math.random() * 20);
	return {
		ID: 50 + index,
		title: movies[index++ % movies.length],
		state: surveyConstants.state[Math.random() > 0.5 ? 'DRAFT' : 'SENDING'],
		viewed: viewed,
		answered: Math.floor(viewed * Math.random()),
		folder: surveyConstants.folder[Math.random() > 0.5 ? 'UNIQUE' : 'REGULAR'],
		created: +new Date() + Math.floor(ends * Math.random()) * oneDay,
		valid_until: +new Date() + ends * oneDay,
		created_by: 1 + Math.floor(Math.random() * 3)
	};
};


/*[
			{
				ID: 1,
				title: "Ucast na akci",
				state: surveyConstants.state.DRAFT,
				viewed: 325,
				answered: 210,
				folder: surveyConstants.folder.UNIQUE,
				created: +new Date() + 4 * oneDay,
				valid_until: +new Date() + 12 * oneDay,
				created_by: 1
			},
			{
				ID: 5,
				title: "Abcdef",
				state: surveyConstants.state.DRAFT,
				viewed: 592,
				answered: 207,
				folder: surveyConstants.folder.REGULAR,
				created: +new Date(),
				valid_until: +new Date() + 14 * oneDay,
				created_by: 1
			},
			{
				ID: 23,
				title: "Mind Blown",
				state: surveyConstants.state.SENDING,
				viewed: 105,
				answered: 100,
				folder: surveyConstants.folder.UNIQUE,
				created: +new Date() + 8 * oneDay,
				valid_until: +new Date() + 24 * oneDay,
				created_by: 2
			},
			{
				ID: 15,
				title: "Saint Parione",
				state: surveyConstants.state.DRAFT,
				viewed: 2208,
				answered: 550,
				folder: surveyConstants.folder.REGULAR,
				created: +new Date() + 8 * oneDay,
				valid_until: +new Date() + 12 * oneDay,
				created_by: 3
			},
			{
				ID: 7,
				title: "Grand opening of Budapest Hotel",
				state: surveyConstants.state.SENDING,
				viewed: 12500,
				answered: 7221,
				folder: surveyConstants.folder.UNIQUE,
				created: +new Date() + 5 * oneDay,
				valid_until: +new Date() + 7 * oneDay,
				created_by: 3
			},
			{
				ID: 4,
				title: "Groundhog Day",
				state: surveyConstants.state.DRAFT,
				viewed: 5345,
				answered: 2678,
				folder: surveyConstants.folder.UNIQUE,
				created: +new Date() + 5 * oneDay,
				valid_until: +new Date() + 15 * oneDay,
				created_by: 1
			}
		]*/