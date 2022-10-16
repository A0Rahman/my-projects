let cName = document.querySelector('#c-name');
let cPrice = document.querySelector('#price');
let cCategory = document.querySelector('#creation-selector');
let cContainer = document.querySelector('#resault-container');
let cBtn = document.querySelector('#btn-create');
let card = document.querySelectorAll('.card');
let sName = document.querySelector('#s-name');
let sPriceFrom = document.querySelector('#price-from');
let sPriceTo = document.querySelector('#price-to');
let sContainer=document.querySelector('#aside-container')
let sCategory = document.querySelector('#search-selector');
let sBtn = document.querySelector('#btn-search');
    cName.value = '';
    cPrice.value = '';
    cCategory.value = '';
//buttons
cBtn.addEventListener('click', createMobile)
sBtn.addEventListener('click', search)
//functions
function createMobile(e) {
    let nameValue = cName.value.trim();
    let priceValue = Number(cPrice.value.trim());
    let categoryValue = cCategory.value;
    cContainer.appendChild(mobileModel.addMobile(nameValue, priceValue, categoryValue))
    sContainer.appendChild(mobileModel.addMobile(nameValue, priceValue, categoryValue))
    cName.value = '';
    cPrice.value = '';
    cCategory.value = '';
    let wait = false;
    wait == false ? e.preventDefault() : e;
}
function search(e) {
    let nameValue=sName.value.trim();
    let fromValue = Number(sPriceFrom.value.trim());
    let toValue = Number(sPriceTo.value.trim());
    let categoryValue=sCategory.value;
    console.log(mobileModel.searchByCategory(nameValue, categoryValue, fromValue, toValue));
    mobileModel.searchByCategory(nameValue,categoryValue,fromValue,toValue)
    sName.value = '';
    sCategory.value = '';
    sPriceFrom.value = '';
    sPriceTo.value = '';
    let wait = false;
    if (wait == false) {
        e.preventDefault()
    }
}
//class
class Mobile {
    constructor() {
        this.mobiles = [];
        // this.mobiles.dodo=document.createElement('div')
    }
    addMobile(name, price, category) {
        let div = document.createElement('div')
        div.innerHTML =
            `<h2 value="${cName.value.trim()}">${cName.value.trim()}</h2>
            <h2 value="${Number(cPrice.value.trim())}">${Number(cPrice.value.trim())}$</h2>`;
        div.classList.add('card');
        div.id = Date.now();
        div.name = name;
        div.price = price;
        div.category = category;
        this.mobiles.push(div)
        console.log(this.mobiles)
        console.log(div)
        return div;
    }
    searchByCategory(name, category, from, to) {
        let resault = this.mobiles.map((ele) => {
            if (ele.category === category) {
                ele.classList.add('active')
                return ele
            }
            else if (ele.name === name) {
                ele.classList.add('active')
                return ele
            }
            else if (ele.price >= from && ele.price < to + 1) {
                ele.classList.add('active')
                return ele
            } else {
                ele.classList.remove('active')
            }
        })
        return resault
    }
}
let mobileModel = new Mobile()























































// console.log(new Mobile().addMobile(1,1,1))

// class TodoApp{
//     constructor() {
//         const cards=[]
//     }
//     createCard(newcard) {
//         const card = new Card(newcard);
//         this.cards.push(card)
//     }
// }


// class Card{
//     constructor(name,price,category) {
//         this.name = cName.value.trim();
//         this.price = cPrice.value.trim();
//         this.category = cCategory.value;
//         }
// }
// cBtn.addEventListener('click',)











// class TodoApp {

//     constructor() {
//         this.todos = [];
//     }

//     addTodo(todo) {
//         const todoElement = new Vivodo(todo);
//         this.todos.push(todoElement)
//     }

//     completeTodo(todoId) {
//         this.todos = this.todos.filter((todo) => todo.id != todoId)
//     }

//     changeStatus(todoId) {
//         this.todos.find((todo) => todo.id ==todoId).status = true;
//     }
// }

// class Vivodo {
//     constructor(name) {
//         this.id = Date.now();
//         this.name = name;
//         this.status = false;
//     }

//     test() {
//         console.log('testing todo');
//     }
// }

// // let firstModel = new TodoApp();
// // let firstMModel=new Todo("google")
// // console.log(firstModel.addTodo())


// let testo = new TodoApp();
// let nimo = testo.addTodo(new Vivodo('nono'));

// console.log(testo.todos);