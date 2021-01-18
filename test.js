const data = [
    {
      "inventory_id": 9382,
      "name": "Brown Chair",
      "type": "furniture",
      "tags": [
        "chair",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190471,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 9380,
      "name": "Big Desk",
      "type": "furniture",
      "tags": [
        "desk",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190642,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 2932,
      "name": "LG Monitor 50 inch",
      "type": "electronic",
      "tags": [
        "monitor"
      ],
      "purchased_at": 1579017842,
      "placement": {
        "room_id": 3,
        "name": "Lavender"
      }
    },
    {
      "inventory_id": 232,
      "name": "Sharp Pendingin Ruangan 2PK",
      "type": "electronic",
      "tags": [
        "ac"
      ],
      "purchased_at": 1578931442,
      "placement": {
        "room_id": 5,
        "name": "Dhanapala"
      }
    },
    {
      "inventory_id": 9382,
      "name": "Alat Makan",
      "type": "tableware",
      "tags": [
        "spoon",
        "fork",
        "tableware"
      ],
      "purchased_at": 1578672242,
      "placement": {
        "room_id": 10,
        "name": "Rajawali"
      }
    }
  ]


// no 1
const test1 = data
const resultTest1 = []
test1.forEach(
    (raws) => {
        if (raws.placement.name === "Meeting Room") {
            resultTest1.push(raws.name)
        }
    }
)
console.log("result: ", resultTest1)
console.log("total: ", resultTest1.length)

console.log("------------------------")

// no 2
const test2 = data
const resultTest2 = []
test2.forEach(
    (raws) => {
        if (raws.type === "electronic") {
            resultTest2.push(raws.name)
        }
    }
)
console.log("result: ", resultTest2)
console.log("total: ", resultTest2.length)

console.log("------------------------")

// no 3
const test3 = data
const resultTest3 = []
test3.forEach(
    (raws) => {
        if (raws.type === "furniture") {
            resultTest3.push(raws.name)
        }
    }
)
console.log("result: ", resultTest3)
console.log("total: ", resultTest3.length)

console.log("------------------------")

// no 4
const test4 = data
const resultTest4 = []
test4.forEach(
    (raws) => {
        if (new Date(raws.purchased_at).toDateString() === new Date("16 Januari 2020").toDateString()) {
            resultTest4.push(raws)
        }
    }
)
console.log("result: ", resultTest4)
console.log("total: ", resultTest4.length)

console.log("------------------------")

// no 5
const test5 = data
const resultTest5 = []
test5.forEach(
    (raws) => {
        if (raws.tags.includes("brown")) {
            resultTest5.push(raws)
        }
    }
)
console.log("result: ", resultTest5)
console.log("total: ", resultTest5.length)
