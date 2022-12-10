export type modelNames = '' | 'more' | 'ahmed-daud' | 'mohamed-khayre' | 'nada-galow' | 'abdi-abees';
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
    readonly isFree: string;
    readonly page: string;
    readonly arrestedFor: string;
    readonly contentUrl: string;
    constructor(init?: Partial<StatementModel>) {
        Object.assign(this, init);
    }
}


