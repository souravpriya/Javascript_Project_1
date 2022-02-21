console.log("welcome to RadheNote");
showNotes();

// IF USER ADDS A NOTE ADD IT TO THE LOCAL STORAGE
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(e) {
    let addTxt=document.getElementById("addTxt")
    let notes=localStorage.getItem("notes")
    if(notes == null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    // console.log(notesObj);


    showNotes();
})


// FUNCTIONS TO SHOW ELEMENTS FOR LOCAL STORAGE-----------
function showNotes() {
    let notes=localStorage.getItem("notes")
    if(notes == null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html +=`
        <div id="notes" class="row container-fluid">
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Node</button>
            </div>
        </div>
    </div>

        `
    });


    let notesElm=document.getElementById('notes');
    if(notesObj.length !==0)
    {
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`NOTHING TO SHOW ! USE <h5>ADD A NOTE</h5> FOR INSERTION`
    }
}



// FUCNTIONS TO DELETE A NOTE-------
function deleteNotes(index) {
    // console.log("I am deleting",index);
    let notes=localStorage.getItem("notes")
    if(notes == null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }


    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}




let search=document.getElementById('searchTxt');
search.addEventListener("input",function () {
    let inputVal=search.value;
    // console.log("input event fired",inputVal);

    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal))
        {
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
        console.log(cardTxt);
    })
})