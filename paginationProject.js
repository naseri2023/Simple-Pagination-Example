const data = [
  { id: 1, name: "Alice", family: "Moray" },
  { id: 2, name: "Bob", family: "Smith" },
  { id: 3, name: "Charlie", family: "Johnson" },
  { id: 4, name: "Diana", family: "Williams" },
  { id: 5, name: "Eve", family: "Brown" },

  { id: 6, name: "Frank", family: "Jones" },
  { id: 7, name: "Grace", family: "Garcia" },
  { id: 8, name: "Hank", family: "Martinez" },
  { id: 9, name: "Ivy", family: "Rodriguez" },
  { id: 10, name: "Jack", family: "Lee" },

  { id: 11, name: "Karen", family: "Walker" },
  { id: 12, name: "Leo", family: "King" },
  { id: 13, name: "Maya", family: "Wright" },
  { id: 14, name: "Nick", family: "Lopez" },
  { id: 15, name: "Olivia", family: "Hill" },

  { id: 16, name: "Paul", family: "Scott" },
  { id: 17, name: "Quincy", family: "Green" },
  { id: 18, name: "Rose", family: "Adams" },
  { id: 19, name: "Sam", family: "Baker" },
  { id: 20, name: "Tina", family: "Gonzalez" },

  { id: 21, name: "Uma", family: "Nelson" },
  { id: 22, name: "Vince", family: "Carter" },
];

let listElem = document.getElementById("list")
let paginationElem = document.getElementById("pagination")

let currentPage = 1;
const itemsPerPage = 5;

let totalItems = Math.ceil(data.length/itemsPerPage)

function updateData(page) {
  listElem.textContent = ""

  let startIndex = (page - 1) * itemsPerPage
  let endIndex = startIndex + itemsPerPage
  let pages = data.slice(startIndex,endIndex)

  pages.forEach(function (lists) {
    
    let divElem = document.createElement("div")
    divElem.className = "item"
    divElem.textContent = lists.name + " " + lists.family
    listElem.appendChild(divElem)
    
      }
  )
}

function setupPagination() {
  
  paginationElem.textContent = ""
  
  for( let i = 1 ; i <= totalItems ; i++){
    
    let btnElem = document.createElement("button")
    btnElem.innerHTML = i
    if ( i === currentPage) btnElem.classList.add("active")

    btnElem.addEventListener("click",function () {
      currentPage = i
      updateData(currentPage)
      setupPagination()
    })
    paginationElem.appendChild(btnElem)
  }
}

updateData(currentPage)
setupPagination()