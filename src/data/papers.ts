export interface Paper {
	title: string;
	authors: string;
	journal: string;
	year: number;
	citations?: number;
	url?: string;
}

export const papers: Paper[] = [
	{
		title: 'Allele-Specific Editing of a Dominant SCN8A Epilepsy Variant Protects against Seizures and Lethality in a Murine Model',
		authors: 'W Yu, SF Hill, Y Huang, L Zhu, Y Demetriou, J Ziobro, F Reger, X Jia, et al.',
		journal: 'Annals of Neurology 96(5), 958–969',
		year: 2024,
		citations: 13,
		url: 'https://doi.org/10.1002/ana.27049',
	},
	{
		title: 'Dentate gyrus granule cells are a locus of pathology in Scn8a developmental encephalopathy',
		authors: 'W Yu, SF Hill, L Zhu, Y Demetriou, F Reger, J Mattis, MH Bhatt',
		journal: 'Neurobiology of Disease 199, 106591',
		year: 2024,
		citations: 5,
		url: 'https://doi.org/10.1016/j.nbd.2024.106591',
	},
	{
		title: 'Medial septum parvalbumin-expressing inhibitory neurons are impaired in a mouse model of Dravet syndrome',
		authors: 'L Zhu, Y Demetriou, J Barden, J Disla, M Zhao, J Mattis',
		journal: 'Epilepsia 66(10), 4053–4065',
		year: 2025,
		citations: 1,
		url: 'https://doi.org/10.1111/epi.18224',
	},
	{
		title: 'Training Spatial Ability in Virtual Reality',
		authors: 'Y Demetriou, M Parikh, S Eskandari, W Weimer, M Endres',
		journal: 'arXiv preprint arXiv:2508.10195',
		year: 2025,
		citations: 1,
		url: 'https://arxiv.org/abs/2508.10195',
	},
];
