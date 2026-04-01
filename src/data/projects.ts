export interface Project {
	title: string;
	description: string;
	tags: string[];
	github?: string;
	live?: string;
	featured?: boolean;
}

export interface ComingSoon {
	title: string;
	description: string;
	tags: string[];
}

export const comingSoon: ComingSoon[] = [
	{
		title: 'StepDx',
		description:
			'A USMLE Step 1 study tool built on a hand-curated knowledge graph (4,600+ nodes, 12,800+ edges). Auto-generates comparison tables, reverse lookups ("what presents with painless jaundice?", curated for Step 1 knowledge so you avoid noisy Google results), and concept traversal chains. Saves med students hours of manual table-building during dedicated study.',
		tags: ['TypeScript', 'Knowledge Graphs', 'Medical Education'],
	},
];

export const projects: Project[] = [
	{
		title: 'GuildInit',
		description:
			'A gamified coding companion that turns your GitHub activity into a creature-raising RPG. Earn XP from commits, PRs, and reviews to raise and evolve digital creatures called gitlings. Features guilds, quests from real open-source repos, daily missions, and competitive leaderboards.',
		tags: ['React', 'TypeScript', 'Supabase', 'Vite', 'Tailwind CSS'],
		live: 'https://guildinit.com',
		featured: true,
	},
	{
		title: 'Toolwright',
		description:
			'Claude Code plugins for automated code auditing and multi-agent coordination. Agentwright runs structured audits, planning, debugging, and testing pipelines. Wrightward prevents conflicting edits when multiple AI agents work on the same repo and injects context so agents are aware of what others are doing.',
		tags: ['JavaScript', 'Claude Code', 'MCP', 'AI Agents'],
		github: 'https://github.com/Joys-Dawn/toolwright',
		featured: true,
	},
	{
		title: 'Ephys Automated Analysis',
		description:
			'A Python GUI application for automated patch clamp electrophysiology data analysis. Extracts action potential metrics from ABF files, runs appropriate statistical tests based on experimental design, and generates publication-style plots and PowerPoint result tables. Used to publish 4+ papers and is the Mattis Lab\'s standard analysis tool.',
		tags: ['Python', 'Tkinter', 'NumPy', 'SciPy', 'Statsmodels'],
		github: 'https://github.com/Joys-Dawn/EphysAutomatedAnalysis',
		featured: true,
	},
	{
		title: 'Fiber Photometry + ECoG Analysis',
		description:
			'An integrated analysis platform for fiber photometry, EEG, and EMG data from live behaving mice during seizures. Handles data loading, preprocessing (filtering, detrending, baseline correction), neural event detection, and seizure-period analysis across multiple recording modalities.',
		tags: ['Python', 'SciPy', 'NumPy', 'Matplotlib', 'Tkinter'],
		github: 'https://github.com/Joys-Dawn/Fiber-Photometry-ECoG',
		featured: true,
	},
];
