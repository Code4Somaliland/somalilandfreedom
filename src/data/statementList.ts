import { DetaineeStatus, StatementModel } from '../Models/statementModel';
export const statementList: StatementModel[] = [
    new StatementModel({
        modelName: "ahmed-daud",
        text: `As per Somaliland Human Right Centre, Ahmed Daud was arrested over a facebook post where he only said: the president fits a Khat dealer job than a president.`,
        url: `https://somalilandchronicle.com/2022/12/05/the-arbitrary-detention-of-ahmed-mohamed-abdi-in-hargeisa-somaliland/?fbclid=IwAR3K2RQqwuHugyB0msYjvgOCw5VedyAxwWTQtIgc_gfMtQfe0xzzbVxD91I`,
        title: `Ahmed Daud`,
        subtitle: `Opposition party member`,
        image: `/assets/img/forground/ahmed-daud.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Detained,
        arrestedFor: 'Since 24 Nov 2022',
        moreText: `Read News coverage`,
        contentUrl: `https://www.facebook.com/ahmed.daud2/posts/pfbid02xqFa25RwvBVLy1S7YivMwgppwdHPDCtdtr6SPfgRuyux1txsTovB5N4SaXKUnVLkl`

    }),
    new StatementModel({
        modelName: "nada-galow",
        text: `As per MP Mohamed Abib, Nada crime was expressing political opinion on social media`,
        url: `https://mobile.twitter.com/MohamedAbibMP/status/1594779141521690624`,
        title: `Nada Galow`,
        subtitle: `High school student`,
        image: `/assets/img/forground/nada-galow.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestedFor: '14 days (Nov 2022)',
        moreText: `Read News coverage`,
        contentUrl: `https://www.facebook.com/haldornada.galow/posts/pfbid0kihnUJUqJrxSV2Cj3FBzGoXxDkooT7CQ7HmtkKh6ZkBYofbTLZv5yR3W1iGjV6Vil`
    }),
    new StatementModel({
        modelName: "mohamed-khayre",
        text: `Mohamed was arrested over a Facebook image and post. All he mentioned was seeking justice for people killed in the Aug demonstrations`,
        url: `https://www.youtube.com/watch?v=P179_xxZYVw`,
        title: `Mohamed Khayre`,
        subtitle: `Opposition Supporter`,
        image: `/assets/img/forground/mohamed-khayre.png`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestedFor: '50 days (Aug 2022)',
        contentUrl: `https://www.facebook.com/maxamed.khayre.319/posts/pfbid02yUvqemB6NHN4BdWsgBMTuzHtrFjPnbffhSjJVw2x4MhduaSAFkqTMWiZFtfEnaHWl`,
        moreText: `Watch News coverage`
    }),
    new StatementModel({
        modelName: "abdi-abees",
        text: `At a poetry reading event convened at Hargeisa, the poet recited poems talking about “police brutality, “arbitrary detentions” and “poor leadership`,
        url: `https://www.oodweynemedia.com/2019/01/13/somaliland-arrests-poet-abdirahman-abees-in-relation-to-a-poetry-reading/`,
        title: `Abdirahman Abees`,
        subtitle: `Somaliland Poet`,
        image: `/assets/img/forground/abdi-abees.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.InExile,
        arrestedFor: `38 days (Jan 2019)`,
        moreText: `Read News coverage`,
        contentUrl: `https://www.youtube.com/watch?v=UrfvR2Wq5Yg`
    }),
    new StatementModel({
        modelName: "more",
        text: `Do you know opinion detainees that should be on this page? Please fill the form blow and we will be in touch`,
        url: `https://forms.gle/yvmPUpeYEvk8Aq27A`,
        title: `Add to Freedom List`,
        subtitle: ``,
        image: `/assets/img/forground/more.webp`,
        imageStyle: `max-width: 50%;"`,
        moreText: `Add to Freedom List`,
        contentUrl: ``
    }),

]
