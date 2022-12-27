export type modelNames = '' | 'more' | 'ahmed-daud' | 'mohamed-khayre' | 'nada-galow' | 'abdi-abees' | 'abdi-malik' | 'ilig'
    | 'abdi-jabar' | 'sacad-fariid' | 'cukuse' | 'cade-gude' | '6x-burco' | 'wadani' | 'jeesto';
export enum DetaineeStatus { Detained = 1, InExile, Free }
export enum DetaineeType { All = 1, Journalist, Political }
export class MoreLinks {
    readonly text: string;
    readonly url: string;
}
export class StatementModel {
    readonly text: string;
    readonly url: string;
    readonly url2: string;
    readonly image: string;
    readonly imageStyle: string;
    readonly title: string;
    readonly moreText: string;
    readonly subtitle: string;
    readonly modelName: modelNames;
    readonly arrestStart: Date;
    readonly arrestEnd: Date;
    readonly contentUrl: string;
    readonly detaineeStatus: DetaineeStatus;
    readonly caseHighlight: string
    readonly type: DetaineeType
    readonly moreLinks: MoreLinks[]
    constructor(init?: Partial<StatementModel>) {
        Object.assign(this, init);
    }

    public getColorStyle(): string {
        const colorStyle = {
            [DetaineeStatus.Detained]: 'red',
            [DetaineeStatus.InExile]: 'tomato',
            [DetaineeStatus.Free]: 'green',
        }
        return colorStyle[this.detaineeStatus]
    }

    public getStatusText(): string {
        const statusText = {
            [DetaineeStatus.Detained]: 'Detained',
            [DetaineeStatus.InExile]: 'In Exile',
            [DetaineeStatus.Free]: 'Free',
        }
        return statusText[this.detaineeStatus]
    }

    public getArrestPeriod(): number {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        return Math.round(Math.abs((Number(this.arrestEnd) - Number(this.arrestStart)) / oneDay));
    }
}


