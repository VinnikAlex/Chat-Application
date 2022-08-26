/** @format */

const express = require("express");
const cors = require("cors");
const app = express();

// enabled permissions for client to send requests to this server
app.use(express.json());
app.use(cors());

app.use(express.static("build"));

//more specific permissions to allow only connections from localhost:3000
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

// collection of units
let data = [
  {
    id: 0,
    code: "COMP1010",
    title: "Fundamentals of Computer Science",
    offering: ["S1", "S2"],
  },
  {
    id: 1,
    code: "COMP1750",
    title: "Introduction to Business Information Systems",
    offering: ["S1"],
  },
  {
    id: 2,
    code: "COMP2110",
    title: "Web Technology",
    offering: ["S1", "S2"],
  },
  {
    id: 3,
    code: "COMP2750",
    title: "Applications Modelling and Development",
    offering: ["S1"],
  },
  {
    id: 4,
    code: "MMCC2045",
    title: "Interactive Web Design",
    offering: ["S2"],
  },
  {
    id: 5,
    code: "COMP3120",
    title: "Advanced Web Development",
    offering: ["S2"],
  },
  {
    id: 6,
    code: "COMP3130",
    title: "Mobile Application Development",
    offering: ["S1"],
  },
];

app.get("/", (request, response) => {
  console.log(request);
  response.send("<h1>Hello World</h1>");
});

app.get("/api/units", (request, response) => {
  console.log(request);
  response.json(data);
});

app.get("/api/units/:id", (request, response) => {
  const id = Number(request.params.id);

  const unit = data.find((unit) => unit.id === id);

  if (unit) {
    response.json(unit);
  } else {
    response.status(404).end();
  }
});

app.post("/api/units/:id", (request, response) => {
  const id = Number(request.params.id);

  let found = false;

  data.find((unit) => {
    if (unit.id === id) {
      unit.code = "6054";
      found = true;
      response.json(unit);
    }
  });
  if (!found) {
    response.send("Not Found");
  }
});

app.post("/api/units", (request, response) => {
  const newUnit = request.body;
  newUnit.id = data.length;

  data.push(newUnit);

  response.json(newUnit);
});

app.delete("/api/units/:id", (request, response) => {
  const id = Number(request.params.id);

  newUnits = [];
  result = { status: "not found" };

  data.map((unit) => {
    if (unit.id === id) {
      result = { status: "success" };
    } else {
      newUnits.push(unit);
    }
  });
  data = newUnits;
  response.json(result);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("server running on PORT:", PORT));
