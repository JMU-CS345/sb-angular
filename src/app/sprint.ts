import { Project } from './project';

export interface Sprint {
	id:number;
	title:string;
	description:string;
	project: Project;
	burndownData?: any;
	goal?: string;
	startDate?:Date;
	endDate?:Date;
	started?:boolean;
}
