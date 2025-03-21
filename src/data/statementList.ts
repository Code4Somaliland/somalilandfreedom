import { DetaineeStatus, DetaineeType, StatementModel } from '../Models/statementModel';
export const statementList: StatementModel[] = [
    new StatementModel({
        modelName: "more",
        text: `Do you know Political Prisoners that should be on this page? Please fill the form blow and we will be in touch`,
        url: `https://forms.gle/yvmPUpeYEvk8Aq27A`,
        title: `Add to Freedom List`,
        subtitle: ``,
        image: `/assets/img/forground/more.webp`,
        imageStyle: `max-width: 50%;"`,
        moreText: `Add to Freedom List`,
        contentUrl: ``,
        type: DetaineeType.All
    }),
    new StatementModel({
        modelName: "nada-galow",
        text: `As per MP Mohamed Abib, Nada crime was expressing political opinion on social media`,
        url: `https://www.facebook.com/hamse.khaire/videos/460370726221425`,
        title: `Nada Galow`,
        subtitle: `University student`,
        image: `/assets/img/forground/nada-galow.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2022-11-13'),
        arrestEnd: new Date('2022-11-27'),
        moreText: `Read News coverage`,
        contentUrl: `https://www.facebook.com/haldornada.galow/posts/pfbid0kihnUJUqJrxSV2Cj3FBzGoXxDkooT7CQ7HmtkKh6ZkBYofbTLZv5yR3W1iGjV6Vil`,
        caseHighlight: `No Warrants. Accused of inciting protests`,
        type: DetaineeType.Political
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
        arrestStart: new Date('2022-08-21'),
        arrestEnd: new Date('2022-10-10'),
        contentUrl: `https://www.facebook.com/maxamed.khayre.319/posts/pfbid02yUvqemB6NHN4BdWsgBMTuzHtrFjPnbffhSjJVw2x4MhduaSAFkqTMWiZFtfEnaHWl`,
        moreText: `Watch News coverage`,
        caseHighlight: `Physical attack. No Warrants. Accused of inciting protests & Defamation`,
        type: DetaineeType.Political
    }),
    new StatementModel({
        modelName: "abdi-abees",
        text: `At a poetry reading event convened at Hargeisa, the poet recited poems talking about “police brutality, “arbitrary detentions” and “poor leadership`,
        url: `https://www.bbc.com/news/world-africa-47306065`,
        title: `Abdirahman Abees`,
        subtitle: `Somaliland Poet`,
        image: `/assets/img/forground/abdi-abees.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2019-01-12'),
        arrestEnd: new Date('2019-02-19'),
        moreText: `Read News coverage`,
        contentUrl: `https://www.youtube.com/watch?v=UrfvR2Wq5Yg`,
        caseHighlight: `Physical attack. No Warrants. Accused of government Defamation`,
        type: DetaineeType.Political
    }),
    new StatementModel({
        modelName: "ahmed-daud",
        text: `As per Somaliland Human Right Centre, Ahmed Daud was arrested over a facebook post where he only said: the president fits a Khat dealer job than a president.`,
        url: `https://kaahparty.org/ahmeddaud/`,
        title: `Ahmed Daud`,
        subtitle: `Opposition party member`,
        image: `/assets/img/forground/ahmed-daud.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2022-11-24'),
        arrestEnd: new Date('2023-02-09'),
        moreText: `Read News coverage`,
        contentUrl: `https://www.facebook.com/ahmed.daud2/posts/pfbid02xqFa25RwvBVLy1S7YivMwgppwdHPDCtdtr6SPfgRuyux1txsTovB5N4SaXKUnVLkl`,
        caseHighlight: `Physical attack. No Warrants. Accused of President Defamation using Somali Penal Code`,
        type: DetaineeType.Political
    }),
    new StatementModel({
        modelName: "ilig",
        text: `Mohamed Abdi Ilig and Abdijabar Mohamed Hussein should never have been arrested for simply covering a breaking news story in real time`,
        url: `https://cpj.org/2022/05/two-somali-journalists-sentenced-to-16-months-in-jail-for-false-news/`,
        title: `Mohamed Abdi Ilig`,
        subtitle: `Journalist`,
        image: `/assets/img/forground/ilig.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2022-04-13'),
        arrestEnd: new Date('2022-07-02'),
        moreText: `Read News coverage`,
        caseHighlight: `Physical attack. No Warrants. Accused of “subversive or anti-national propaganda” or publishing false news`,
        type: DetaineeType.Journalist
    }),
    new StatementModel({
        modelName: "abdi-jabar",
        text: `Mohamed Abdi Ilig and Abdijabar Mohamed Hussein should never have been arrested for simply covering a breaking news story in real time`,
        url: `https://cpj.org/2022/05/two-somali-journalists-sentenced-to-16-months-in-jail-for-false-news/`,
        title: `Abdijabar Mohamed Hussein`,
        subtitle: `Journalist`,
        image: `/assets/img/forground/abdi-jabar.png`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2022-04-13'),
        arrestEnd: new Date('2022-07-02'),
        moreText: `Read News coverage`,
        caseHighlight: `Physical attack. No Warrants. Accused of “subversive or anti-national propaganda” or publishing false news`,
        type: DetaineeType.Journalist
    }),
    new StatementModel({
        modelName: "sacad-fariid",
        text: `Nearly 30 police and security sector officers nightly raided his home terrorizing family without due process and infringed privacy rights since he wasn't armed`,
        url: `https://www.facebook.com/ali.yussuf.92/posts/pfbid04x5ZRvvSQySc8uT7G1tQXgDJ2caqi8D54KNhsRSjfhGpH8pKqR2bZ842ngZGputil`,
        title: `Sacad Fariid Cali`,
        subtitle: `Diver`,
        image: `/assets/img/forground/sacad-fariid.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2022-12-12'),
        arrestEnd: new Date('2022-12-30'),
        moreText: `Read News coverage`,
        caseHighlight: `Physical attack. No Warrants. Accused of “subversive or anti-national propaganda” or publishing false news`,
        contentUrl: `https://www.facebook.com/sacad.algaddidi/posts/pfbid0VzuEt2AJWfbZF4CQq7VC35NzLnwyomRZKTBCjynoBecceJgXhj7U3dWfkEK7KQaul`,
        type: DetaineeType.Political
    }),
    new StatementModel({
        modelName: "cukuse",
        text: `Police arrested Cukuse and 11 other politicians during an anti-government protest in Hargeisa, the capital of Somaliland.`,
        url: `https://www.hiiraan.com/news4/2022/July/186897/somaliland_releases_twelve_imprisoned_opposition_figures.aspx`,
        title: `Abdullahi Mohamed (Cukuse)`,
        subtitle: `Politician`,
        image: `/assets/img/forground/cukuse.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2022-06-09'),
        arrestEnd: new Date('2022-07-05'),
        moreText: `Read News coverage`,
        caseHighlight: `No Warrants. Accused of <not known> Cukuse is a senior official in Wadani opposition party`,
        type: DetaineeType.Political
    }),
    new StatementModel({
        modelName: "cade-gude",
        text: `Sultan Ade Gude, one of Somaliland's traditional leaders, has been arrested in Hargeysa for sympathizing with an opposition party.`,
        url: `https://hadhwanaagnews.ca/mobile/articles/34302/Suldan-Ade-Gude-Was-Hijacked-By-Dictators-Son-Abdi-Shotaly`,
        title: `Suldaan Ahmed Ade-Gude`,
        subtitle: `Traditional leader`,
        image: `/assets/img/forground/cade-gude.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2022-08-21'),
        arrestEnd: new Date('2022-09-26'),
        moreText: `Read News coverage`,
        caseHighlight: `No Warrants or charges. Accused of <not known> Cade is a member of Wadani opposition party`,
        type: DetaineeType.Political
    }),
    new StatementModel({
        modelName: "6x-burco",
        text: `62 mostly teen demonstrators have been detained in Burco and sent to Mandheera Prison`,
        url: `https://www.youtube.com/watch?v=QiqSi2rGvbk`,
        title: `62 Burco Youth`,
        subtitle: `Demonstrators agaist delayed elections`,
        image: `/assets/img/forground/6x-burco.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2022-11-13'),
        arrestEnd: new Date('2022-12-02'),
        moreText: `Read News coverage`,
        caseHighlight: `Physical attack. No Warrants. Accused of conducting protests`,
        type: DetaineeType.Political,
        moreLinks: [{
            text: 'Release link',
            url: 'https://www.youtube.com/watch?v=LB4NPweo41Y'
        }]
    }),
    new StatementModel({
        modelName: "wadani",
        text: `Somaliland government released Khadar Hussein Abdi, Secretary of Waddani party and Barkhad Jama Hersi, the spokesperson of the same Party. The government also released Abdi Ibrahim Abduleh, the man who coined the widely used satirical word “Ila Meerayso”.`,
        url: `https://somalilandstandard.com/somaliland-releases-imprisoned-opposition-officials`,
        title: `Khadar Abdi & Barkhad Hersi`,
        subtitle: `Opposition Leaders`,
        image: `/assets/img/forground/barkhad-khadar.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2019-11-17'),
        arrestEnd: new Date('2019-11-28'),
        moreText: `Read News coverage`,
        caseHighlight: `No Warrants. Accused of conducting protests`,
        type: DetaineeType.Political,
        contentUrl: `https://twitter.com/Somaliweyn_/status/1196307471582806016`,
        moreLinks: [{
            text: 'Release link',
            url: 'https://www.somalilandcurrent.com/somaliland-detained-wadani-officials-released/'
        }]
    }), new StatementModel({
        modelName: "busharo",
        text: `Bushaaro Baanday, reports on Somaliland politics and posts critical commentary on her Facebook page.`,
        url: `http://hrcsomaliland.org/2023/05/25/the-arbitrary-detention-of-bushaaro-ali-mohammed/`,
        title: `Bushaaro Baanday`,
        subtitle: `Freelancer`,
        image: `/assets/img/forground/busharo.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2023-04-17'),
        arrestEnd: new Date('2023-08-24'),
        moreText: `Read News coverage`,
        caseHighlight: `No Warrants. Accused of seditious act against Somaliland government`,
        type: DetaineeType.Journalist,
        contentUrl: `https://www.facebook.com/profile/100044336713911/search/?q=ssc`
    }),
    new StatementModel({
        modelName: "jeesto",
        text: `He was arrested after a comparison he made between Somaliland police force and Somalia police force. He is a social activist who uses social media to cast light on issues in Somaliland, including the comparison he made where the suggestion was the Somalia police force is more qualified than the Somaliland police force`,
        url: `http://hrcsomaliland.org/the-human-rights-centre-condoms-the-arrest-and-detention-of-mahamoud-mohamed-haji-ibrahim-aka-jeesto/`,
        title: `Mohamoud Jeesto`,
        subtitle: `Graphic design artist`,
        image: `/assets/img/forground/jeesto.jpg`,
        imageStyle: `max-width: 50%;"`,
        detaineeStatus: DetaineeStatus.Free,
        arrestStart: new Date('2022-04-12'),
        arrestEnd: new Date('2022-06-19'),
        moreText: `Read News coverage`,
        caseHighlight: `No Warrants. Accused of President Defamation using Somali Penal Code`,
        type: DetaineeType.Political,
        contentUrl: `https://www.facebook.com/permalink.php?story_fbid=1910025879196703&id=100005679285178`,
        moreLinks: [{
            text: 'still arrested',
            url: 'https://twitter.com/hrcsomaliland/status/1531904965844811777'
        }, {
            text: 'Charges',
            url: 'https://www.facebook.com/AbdisalaamGermany/posts/warcusub-maxamuud-jeesto-oo-ka-mida-dhalinyarada-burco-54-cisho-oo-uu-xidhnaa-ka/3335344486677824/'
        }, {
            text: 'Release link',
            url: 'https://www.facebook.com/permalink.php?story_fbid=1960672647465359&id=100005679285178'
        }, {
            text: 'Release link',
            url: 'https://www.facebook.com/permalink.php?story_fbid=1961497547382869&id=100005679285178'
        }]
    })
]
