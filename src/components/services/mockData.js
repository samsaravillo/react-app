export const modelsData = [
  {
    woNum: "WO12345",
    subsystem: "DOR",
    location: "sample",
    reportedDate: "date",
    description: "During PM found DM2 Dorr",
    reliability: 50,
  },
  {
    woNum: "WO12367",
    subsystem: "ACV",
    location: "sample2",
    reportedDate: "date",
    description: "Emergency damper feedback",
    reliability: 60,
  },
  {
    woNum: "WO23465",
    subsystem: "ACV",
    location: "sample3",
    reportedDate: "date",
    description: "Sample description",
    reliability: 90,
  },
];


export const optionData = [
  {
    "optionId": 1, 
    "optionName": "Option 1",
    "optionStatus": "RENEW",
    "line": "ABC",
    "system": "SYS",
    "username": "sam",
    "intvData": [{
      "id": 1,
      "scope": "SYS",
      "subSystem": "SUBSYS",
      "type": "TYPE01",
      "subType": "SUBTYPE01",
      "ÿear": 2021,
      "status": "DRAFT",
      "list": [{
        "year": "2021",
        "amount": 500,
      },
      {
        "year": "2022",
        "amount": 600,
      }]
    }, {
      "id": 2,
      "scope": "SYS",
      "subSystem": "SUBSYS2",
      "type": "TYPE02",
      "subType": "SUBTYPE02",
      "ÿear": 2023,
      "status": "DRAFT",
      "list": [{
        "year": "2021",
        "amount": 800,
      },
      {
        "year": "2022",
        "amount": 300,
      }]
    }, {
      "id": 3,
      "scope": "SYS",
      "subSystem": "SUBSYS3",
      "type": "TYPE03",
      "subType": "SUBTYPE03",
      "ÿear": 2025,
      "status": "DRAFT",
      "list": [{
        "year": "2021",
        "amount": 200,
      },
      {
        "year": "2022",
        "amount": 100,
      }]
    }]
  }
]





