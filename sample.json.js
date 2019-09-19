var user = {
    //name: "松本キノコ",　//firebaseを使う場合は、nameはauthenticationの中にあります
    age: "28",
    part: "alto",
    //・・・
    selfIntroductions: [
        {
            questionID: 1,
            question: "好きな作曲家",
            answer: "千原英喜",
            attachment: {
                url: "url",
                contentType: "img/jpg",
            },
        },
        {
            questionID: 3,
            question: "通勤時間",
            answer: "0秒",
            attachment: {
                url: "url",
                contentType: "img/jpg",
            },
        },
        {
            questionID: 4,
            question: "〜",
            answer: "〜",
            attachment: {
                url: "url",
                contentType: "img/jpg",
            },
        }
    ],
    introductions: [
        {
            userID: "autocreatedUIDofMenber", //紹介者のID
            description: "このひとはあたまおかしいです",
            attachment: {
                    url: "url",
                    contentType: "img/jpg",
            },
        },
        {
            userID: "autocreatedUIDofMenber", //紹介者のID
            description: "このひとはあたまおかしいです",
            attachment: {
                url: "url",
                contentType: "img/jpg",
            },
        },
        {
            userID: "autocreatedUIDofMenber", //紹介者のID
            description: "このひとはあたまおかしいです",
            attachment: {
                url: "url",
                contentType: "img/jpg",
            },
        },
        //・・・
    ],
}

var db = {
    settings: {
    },
    2019: {
        questions: [
            {
                questionID: 1,
                question: "好きな作曲家"
            },
            {
                questionID: 3,
                question: "通勤時間"
            },
            {
                questionID: 4,
                question: "フリースペース"
            },
        ],
        users: [
            {
                userID: {/*上記のuserが入る*/}
            },
            {
                userID: {/*上記のuserが入る*/}
            },
            {
                userID: {/*上記のuserが入る*/}
            },
            {
                userID: {/*上記のuserが入る*/}
            },
        ]
    },
    2020: {
        questions: [
            {
                questionID: 5,
                question: "好きな食べ物"
            },
            {
                questionID: 7,
                question: "通勤時間"
            },
            {
                questionID: 8,
                question: "フリースペース"
            },
        ],
        users: [
            {
                userID: {/*上記のuserが入る*/}
            },
            {
                userID: {/*上記のuserが入る*/}
            },
            {
                userID: {/*上記のuserが入る*/}
            },
            {
                userID: {/*上記のuserが入る*/}
            },
        ]
    },
}


