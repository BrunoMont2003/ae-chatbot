export interface CreateSchoolDTO {
	name: string;
	information?: string;
	period: {
		year: string;
		start: Date;
		end: Date;
		semester: number;
		cycles: {
			name: string;
			subjects: {
				name: string;
				credits: number;
				professor?: {
					name: string;
					profession: string;
				};
				summary?: string;
			}[];
		}[];
	}[];
}
