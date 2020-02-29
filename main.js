// Common javascript //

// function constructor //
/*
function Person(name, age, nationality) {
  this.name = name;
  this.age = age;
  this.nationality = nationality;
}

Person.prototype.currentAddress = "Dubai";

const Aay = new Person("Ayaz khan", 21, "pakistani");

function Athlete(name, age, nationality, Wonsmedols) {
  Person.call(name, age, nationality);
  this.Wonsmedols = Wonsmedols;
}

var mark = new Athlete("mark miller", 21, "japani", "olympic");
console.log(mark);

//console.log(Aay.currentAddress);

// ES6 //

// Classes //

class Man {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
}

var jane = new Man("Jane smith", 21, 5.7);

console.log(jane);

class Women extends Man {
  constructor(name, age, height, job) {
    super(name, age, height);
    this.job = job;
  }
}

let mary = new Women("mary carlos", 23, 4.4, "designer");
console.log(mary);

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return response;
}

console.log(getData());

// promise //

const pro = new Promise((resolve, reject) => {
  let x = false;

  if (!x) {
    resolve("success");
  } else {
    reject("failed!");
  }
});

pro
  .then(m => {
    console.log("this is from thennnn " + m);
  })
  .catch(m => {
    console.log("this is from catch " + m);
  });

function watchingTutes() {
  const user = true;
  const watching = true;
  return new Promise((res, rej) => {
    if (watching) {
      res("please subscribe to my channel");
    } else {
      rej("user lefted :)");
    }
  });
}

watchingTutes()
  .then(m => console.log("please please " + m))
  .catch(m => console.log("the" + m));

// CallBacks //

const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post Two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(post => (output += `<li>${post.title}</li>`));
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, CallBacks) {
  setTimeout(() => {
    posts.push(post);
    CallBacks();
  }, 2000);
}

createPost({ title: "post three", body: "this is post three" }, getPosts);

const res = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
*/

// function createNode(element) {
//   return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

// const ul = document.getElementById("authors");
// const url = "https://randomuser.me/api/?results=10";
// fetch(url)
//   .then(resp => resp.json())
//   .then(function(data) {
//     let authors = data.results;
//     return authors.map(function(author) {
//       let li = createNode("li"),
//         img = createNode("img"),
//         span = createNode("span");
//       img.src = author.picture.medium;
//       span.innerHTML = `${author.name.first} ${author.name.last}`;
//       append(li, img);
//       append(li, span);
//       append(ul, li);
//     });
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// fetching API //

// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then(res => res.json())
//   .then(users => {
//     // let output = "<li>list of users</li>";
//     // output += "<ul>";
//     // users.forEach(user => {
//     //   output += `<li>
//     //   ${user.name}
//     //   </li>
//     //   `;
//     // });
//     // output += "</ul>";
//     // document.getElementById("response").innerHTML = output;
//   });

/*
const btn = document.getElementById("btn").addEventListener("click", loadData);

function createNode(el) {
  return document.createElement(el);
}
function append(parent, child) {
  return parent.appendChild(child);
}

function loadData() {
  const ul = document.getElementById("authors");
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      return data.map(function(user) {
        (li = createNode("li")), (span = createNode("span"));
        span.innerHTML = `${user.name}`;
        append(li, span);
        append(ul, li);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}


function loadData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(users => {
      console.log(users);

      let output = "";
      // output += "<h1>List of titles</h1>";
      // output += "</ul>";\
      let span = createNode("span");
      let h1 = createNode("h1");

      h1.innerHTML = "List of titles";
      append(span, h1);
      users.forEach(user => {
        // output += `<li>${user.title}</li>`;
        // output += `<img src=${user.thumbnailUrl}>`;
      });
      output += "</ul>";
      document.querySelector(".#response").innerHTML = output;
    });
}



 
*/

/**
 * :::NOTES FOR AXIOS:::
 * 1) You can defined the req. type explicitly,
 * without defining it also works.
 * eg: axios.get("path"), axios.post("path")
 *
 * 2) PUT AND PATCH
 * put is used to replace the entire record obiviously
 * a single one with a new record.
 * while patch updated the data with existing records.
 *
 * 3) CUSTOM HEADERS
 * It allows us to send headers (defined by developer), through headers we send
 * web tokens etc ,to access specfic routes and more.
 *
 * 3) TRANSFORM RESPONSE
 * the modification of request as well as response
 * which comes from server or an API.
 */

// -- AXIOS GLOBELS -- //
axios.defaults.headers.common["Auth-token"] =
  "ASDHF809A121JAD981CXADSDSDFASDF021E1LDJQ2Y4XL2U09E1QJUD0981";
// - METHODS - //

// ~ GET
function getData() {
  // ~ 1)
  // axios({
  //   method: "get",
  //   url: "https://jsonplaceholder.typicode.com/todos",
  //   params: {
  //     _limit: 5
  //   }
  // })
  //   .then(res => showUp(res))
  //   .catch(err => console.error(err));

  // ~ 2)
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(res => showUp(res))
    .catch(err => console.error(err));
}

// ~ POST
function postData() {
  // ~ 1)

  // axios({
  //   method: "post",
  //   url: "https://jsonplaceholder.typicode.com/todos",
  //   data: {
  //     title: "Buy slippers",
  //     completed: false
  //   }
  // })
  //   .then(res => showUp(res))
  //   .catch(err => console.error(err));

  // ~ 2)

  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "Any thing",
      completed: false
    })
    .then(res => showUp(res))
    .catch(err => console.error(err));
}

// ~ DELETE
function deleteData() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => showUp(res))
    .catch(err => console.error(err));
}

// ~ PUT / PATCH
function putPatch() {
  // ~ PUT
  // axios
  //   .put("https://jsonplaceholder.typicode.com/todos/1", {
  //     title: "Any thing",
  //     completed: false
  //   })
  //   .then(res => showUp(res))
  //   .catch(err => console.error(err));

  // ~ PATCH
  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "Any thing",
      completed: false
    })
    .then(res => showUp(res))
    .catch(err => console.error(err));
}

// ~ SIMALTENOUS REQUESTS
function simRequests() {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=5"),
      axios.post("https://jsonplaceholder.typicode.com/posts/?_limit=5")
    ])
    .then(
      //res => {
      // console.log(res[0]);
      // console.log(res[1]);
      //}

      // :Using the axios.spread()
      axios.spread((todos, post) => {
        console.log(todos, post);
        showUp(todos);
      })
    )
    .catch(err => console.error(err));
}

// ~ CUSTOM HEADERS
function customHeader() {
  const config = {
    headers: {
      "Content-type": "application / json",
      authorization: "JWTtoken ETC"
    }
  };
  axios
    .post("https://jsonplaceholder.typicode.com/todos", config)
    .then(res => showUp(res))
    .catch(err => console.error(err));
}

// ~ TRANSFORM
function transform() {
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "this is a title"
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };
  axios(options) // we can pass directly.
    .then(res => showUp(res))
    .catch(err => console.log(err));
}

// ~ ERROR HANDLING
function errorHandling() {
  axios
    .get("https://jsonplaceholder.typicode.com/todoss", {
      // validateStatus: function(status) {
      //   return status < 500; // Reject only if status is greater or equal to 500
      // }
    })
    .then(res => showOutput(res))
    .catch(err => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
          alert("Error: Page Not Found");
        }
      } else if (err.request) {
        // Request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// ~ CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();

  axios
    .get("https://jsonplaceholder.typicode.com/todos", {
      cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log("Request canceled", thrown.message);
      }
    });

  if (true) {
    source.cancel("Request canceled!");
  }
}

// ~ INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  config => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// -- UPDATEING UI -- //
function showUp(res) {
  document.querySelector(".response").innerHTML = `
  <div class="card card-body mt-4 bg-success text-white">
  <h5>status: ${res.status}</h5>
</div>

<div class="card mt-3">
  <div class="card-header">
    Headers
  </div>
  <div class="card-body">
    <pre>${JSON.stringify(res.headers, null, 2)}</pre>
  </div>
</div>
<div class="card mt-3">
  <div class="card-header">
    Data
  </div>
  <div class="card-body">
    <pre>${JSON.stringify(res.data, null, 2)}</pre>
  </div>
</div>
<div class="card mt-3">
  <div class="card-header">
    Config
  </div>
  <div class="card-body">
    <pre>${JSON.stringify(res.config, null, 2)}</pre>
  </div>
</div>`;
}

// -- EVENT LISTENER -- //
document.querySelector(".get").addEventListener("click", getData);
document.querySelector(".post").addEventListener("click", postData);
document.querySelector(".delete").addEventListener("click", deleteData);
document.querySelector(".putPatch").addEventListener("click", putPatch);
document.querySelector(".simRequrests").addEventListener("click", simRequests);
document.querySelector(".customHeader").addEventListener("click", customHeader);
document.querySelector(".transform").addEventListener("click", transform);
document
  .querySelector(".errorHandling")
  .addEventListener("click", errorHandling);
document.querySelector(".cancle").addEventListener("click", cancle);
