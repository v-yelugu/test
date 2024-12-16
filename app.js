let ip = document.getElementById("ip");
let ul = document.querySelector("#list_box>ul");

function addTask() {
    let new_li = document.createElement("li");

    let text_div = document.createElement("div");
    let new_div = document.createElement("div");

    let btn_del = document.createElement("button");
    let btn_edit = document.createElement("button");

    btn_del.innerText = "REMOVE";
    btn_del.id = "del_id";
    btn_edit.innerText = "EDIT";
    btn_edit.id = "edit_id";

    text_div.innerText = ip.value+"  ";

    new_div.appendChild( btn_edit );
    new_div.appendChild( btn_del );

    new_li.appendChild( text_div );
    new_li.appendChild( new_div );

    new_li.classList.add( "flexer" );
    new_li.classList.add( "flexer-space-between" );


    ul.appendChild( new_li );

    ip.value = "";
}

ul.addEventListener( "click" , ( event )=>{
     let clicked_el = event.target;

     if( clicked_el.id=="del_id" ) {
        ul.removeChild( clicked_el.parentElement.parentElement );
     }
     else if( clicked_el.id=="edit_id" ) {
        let edited = prompt("Enter updated task ");
        clicked_el.parentElement.parentElement.childNodes[0].innerText = edited;
     }
} )