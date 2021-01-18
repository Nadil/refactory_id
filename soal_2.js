const data = [
    {
      "id": 323,
      "username": "rinood30",
      "profile": {
        "full_name": "Shabrina Fauzan",
        "birthday": "1988-10-30",
        "phones": [
          "08133473821",
          "082539163912"
        ]
      },
      "articles:": [
        {
          "id": 3,
          "title": "Tips Berbagi Makanan",
          "published_at": "2019-01-03T16:00:00"
        },
        {
          "id": 7,
          "title": "Cara Membakar Ikan",
          "published_at": "2019-01-07T14:00:00"
        }
      ]
    },
    {
      "id": 201,
      "username": "norisa",
      "profile": {
        "full_name": "Noor Annisa",
        "birthday": "1986-08-14",
        "phones": []
      },
      "articles:": [
        {
          "id": 82,
          "title": "Cara Membuat Kue Kering",
          "published_at": "2019-10-08T11:00:00"
        },
        {
          "id": 91,
          "title": "Cara Membuat Brownies",
          "published_at": "2019-11-11T13:00:00"
        },
        {
          "id": 31,
          "title": "Cara Membuat Brownies",
          "published_at": "2019-11-11T13:00:00"
        }
      ]
    },
    {
      "id": 42,
      "username": "karina",
      "profile": {
        "full_name": "Karina Triandini",
        "birthday": "1986-04-14",
        "phones": [
          "06133929341"
        ]
      },
      "articles:": []
    },
    {
      "id": 201,
      "username": "icha",
      "profile": {
        "full_name": "Annisa Rachmawaty",
        "birthday": "1987-12-30",
        "phones": []
      },
      "articles:": [
        {
          "id": 39,
          "title": "Tips Berbelanja Bulan Tua",
          "published_at": "2019-04-06T07:00:00"
        },
        {
          "id": 43,
          "title": "Cara Memilih Permainan di Steam",
          "published_at": "2019-06-11T05:00:00"
        },
        {
          "id": 58,
          "title": "Cara Membuat Brownies",
          "published_at": "2019-09-12T04:00:00"
        }
      ]
    }
  ]

// no 1
const resultTest1 = []
const test1 = data
test1.map(
    (raws) => {
        if (raws.profile.phones.length === 0) {
            resultTest1.push(raws)
        }
    }
)
console.log("hasil array json:",resultTest1)
console.log("total array json:",resultTest1.length)

console.log("------------------------------")
// no 2
const resultTest2 = []
const test2 = data
test2.map(
    (raws) => {
        if (raws['articles:'].length !== 0) {
            resultTest2.push(raws)
        }
    }
)
console.log("hasil array json:",resultTest2)
console.log("total array json:",resultTest2.length)

console.log("------------------------------")
// no 3
const resultTest3 = []
const test3 = data
test3.map(
    (raws) => {
        if (raws.profile.full_name.toLowerCase().includes("annis")) {
            resultTest3.push(raws)
        }
    }
)
console.log("hasil array json:",resultTest3)
console.log("total array json:",resultTest3.length)

console.log("------------------------------")
// no 4
const resultTest4 = []
const test4 = data
test4.map(
    (raws) => {
        raws['articles:'].map(
            (raw) => {
                if (new Date(raw.published_at).getFullYear() === 2020) {
                    resultTest4.push(raws)
                }
            }

        )
    }
)
console.log("hasil array json:",resultTest4)
console.log("total array json:",resultTest4.length)

console.log("------------------------------")
// no 5
const resultTest5 = []
const test5 = data
test5.map(
    (raws) => {
        if (new Date(raws.profile.birthday).getFullYear() === 1986) {
            resultTest5.push(raws)
        }
    }
)
console.log("hasil array json:",resultTest5)
console.log("total array json:",resultTest5.length)



console.log("------------------------------")
// no 6
const resultTest6 = []
const test6 = data
test6.map(
    (raws) => {
        raws['articles:'].map(
            (raw) => {
                if (raw.title.toLowerCase().includes("tips")) {
                    resultTest6.push(raw)
                }
            }

        )
    }
)
console.log("hasil array json:",resultTest6)
console.log("total array json:",resultTest6.length)

console.log("------------------------------")
// no 7
const resultTest7 = []
const test7 = data
test7.map(
    (raws) => {
        raws['articles:'].map(
            (raw) => {
                if (new Date(raw.published_at) < new Date('August 2019')) {
                    resultTest7.push(raw)
                }
            }

        )
    }
)
console.log("hasil array json:",resultTest7)
console.log("total array json:",resultTest7.length)
