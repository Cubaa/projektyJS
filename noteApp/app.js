class NotesMenu {
    constructor(){
        const menu = document.querySelector(".menu")
        const hiddenMenuBtn = document.querySelector('.hiddenMenu')
        const showMenuBtn = document.querySelector('.showMenu')
        const submitButton = document.querySelector('.buttonWrapper')
        this.hiddenMenuBtn = document.querySelector('.hiddenMenu').addEventListener("click", ()=>this.hiddenMenu(menu, showMenuBtn, hiddenMenuBtn))
        this.showMenuBtn = document.querySelector('.showMenu').addEventListener("click", ()=>this.showMenu(menu, hiddenMenuBtn, showMenuBtn))
        console.log(menu.clientHeight)
    }
showMenu(menu, hiddenMenuBtn, showMenuBtn, nameInput, contentInput, colorInput, submitButton){
    menu.style.display = "block"
    showMenuBtn.style.display ="none"
    hiddenMenuBtn.style.display ="block"
  
   
    
}
hiddenMenu(menu, showMenuBtn, hiddenMenuBtn, nameInput, contentInput, colorInput, submitButton){
    menu.style.display = "none"
    showMenuBtn.style.display ="block"
    hiddenMenuBtn.style.display ="none"

   

}
}
//closeEditMenu
class EditMenu{
    constructor(){
        const editPanel = document.querySelector('.editPanel')
        this.closeEditPanel=document.querySelector('.closeEditMenu').addEventListener("click", ()=>this.closeEditMenu(editPanel))
    }
    closeEditMenu(editPanel){
        console.log("klik")
        editPanel.style.display="none"
    }
}
class Memory {
    static addTolocalStorage(notes){
      const lsKey = 'notes';
    console.log(lsKey)
        localStorage.setItem(lsKey, JSON.stringify(notes));
    }
    static downloadFromLocalStorage(){
        const lsKey = 'notes';
        const notesFromLocalStorage = JSON.parse(localStorage.getItem(lsKey));
        return notesFromLocalStorage
    }
    static updateLocalStorage(){

    }
}

class Notes {
    constructor(){
        this.notes = []
        this.forPinnedNotes = []
        this.pinnedNotes = []
        this.unpinnedNotes = []
        this.allNotes= []
        this.removeBtns
        this.editBtns
        this.notes2 = "htgrfedws"
        let noteNumber
        this.editNoteIndex
        this.pinnedNoteIndex
        this.divNotesName
        this.divNotesColor 
        this.divNotesContent
        this.divTitleName
        this.divNotesContentColor
       const editNameInput = document.querySelector(".editName")
      const editColorInput = document.querySelector('.editColor')
       const editTxtArea = document.querySelector('.editTxtArea')
        const noteName = document.querySelector('.noteName')
        const noteColor=document.querySelector('.noteColor')
        const noteContent=document.querySelector('.noteContent')
        const notesWrapper = document.querySelector('.notesWrapper')
        this.editPanel = document.querySelector('.editPanel')
        this.pinnedBtns
        this.editPanelBtn = document.querySelector('.editBtn').addEventListener("click", (e)=>this.editingNote(e, editNameInput, editColorInput, editTxtArea, noteName, noteColor, noteContent))
        this.submitBtn = document.querySelector('button.addNote').addEventListener("click", ()=>this.addNote(noteName, noteColor, noteContent, noteNumber, notesWrapper))
        console.log(this.notes)
        /*this.removeBtn = function(){
        const btnToremoveNote = document.querySelector('.removeNote').addEventListener("click", ()=>this.removeNote())
        }*/
   
      
    }
    addNote(noteName, noteColor, noteContent, noteNumber, notesWrapper){
  
       const date = new Date()
        let noteNameValue=noteName.value
        let noteColorValue=noteColor.value
        let noteContentValue=noteContent.value
        noteNumber=this.notes.length
        let noteNumberForHTMLAddTask=this.notes.length
        console.log(noteNameValue, noteColorValue, noteContentValue)
        if(noteNameValue==="")
            return alert("Wpisz nazwę notatki")
        else {
        if(noteColorValue==="")
            noteColorValue='white'
        console.log(noteNumber)
        this.notes.push({
            noteNumber:++noteNumber,
            noteNameValue,
            noteColorValue,
            noteContentValue,
            isPinned:false,
            createDate:date.toLocaleString()
        })
        this.allNotes.push({
            noteNumber:++noteNumber,
            noteNameValue,
            noteColorValue,
            noteContentValue,
            isPinned:false,
            createDate:date.toLocaleString()
        })
       
        console.log(this.notes)
        const cardDiv = document.createElement('div')
        
     cardDiv.setAttribute("class", "col s3 m3")
          cardDiv.innerHTML = `
           <div class = "card" style="background-color: ${noteColorValue}" data-number="${noteNumberForHTMLAddTask--}">
              <div class = "card-image waves-effect waves-block waves-light">
                 <img class = "activator" src = "https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_960_720.jpg">      
                 <p class="center" style="font-size: 20px;">${noteNameValue}</p>          
              </div>
              
              <div class = "card-content activator">             
                 <p>Kliknij w zdjęcie, by dowiedzieć się więcej</p>
              </div>
              
              
              <div class = "card-reveal" style="background-color: ${noteColorValue}">
                 <span class = "card-title grey-text text-darken-4 style="font-size: 20px;">${noteNameValue}
                    <i class = "material-icons right">close</i></span>
                 <p>${noteContentValue}</p>
              </div>
              
              <div class = "card-action">

                 <button class = "btn waves-effect waves-light red removeNote">Usuń</button>
                <button class = "btn waves-effect waves-light blue editNote">Edytuj
                </button>
                <button class = "btn waves-effect waves-light green pinnedUnpinnedNote">Przypnij
                </button>
              </div>
           </div>
        
     `
     notesWrapper.appendChild(cardDiv)
     this.removeBtns =  document.querySelectorAll('.removeNote')
     this.editBtns =  document.querySelectorAll('.editNote')
     this.pinnedBtns = document.querySelectorAll('.pinnedUnpinnedNote')
     if(this.notes.length>0){
         for (let m = 0; m < 1; m++) {
           
             this.removeBtns[this.removeBtns.length-1].addEventListener("click", (e)=>this.removeNote(e, notesWrapper, noteNumber))
             this.editBtns[this.editBtns.length-1].addEventListener("click", (e)=>this.editNote(e, notesWrapper, noteNumber))
             this.pinnedBtns[this.pinnedBtns.length-1].addEventListener("click", (e)=>this.pinnedBtn(e, notesWrapper, noteNumber))
         }
    
    
     }
     this.allNotes.forEach((note, index)=>{
        this.allNotes[index].noteNumber=index+1
    })
        Memory.addTolocalStorage(this.allNotes)
        this.allNotes = Memory.downloadFromLocalStorage()
        
    }
    }
    removeNote(e, notesWrapper, noteNumber){
        console.log("usunales notatke")
     
    
      
        let removeIndex = e.target.parentElement.parentElement.dataset.number
        console.log(e.target.parentElement.parentElement.dataset.number)
        console.log(removeIndex)
        this.notes.splice(removeIndex, 1)
     
        this.notes.forEach((note, index)=>{
            this.notes[index].noteNumber=index+1
        })
        console.log(this.notes)
        e.target.parentElement.parentElement.parentElement.remove()
        const allNotes = document.querySelectorAll('.notesWrapper>div>div')
        console.log(allNotes)
        allNotes.forEach((note, index)=>{
            console.log(index)
            
            note.removeAttribute("data-number")
            note.setAttribute("data-number", `${--index}`)
        })

        Memory.addTolocalStorage(this.notes)
  
            
    }
    
    editNote(e, notesWrapper, noteNumber){
console.log("edit")
this.editNoteIndex = e.target.parentElement.parentElement.dataset.number
console.log(this.editNoteIndex)
this.editPanel.style.display="block"
this.divNotesName = document.querySelector(`div[data-number="${this.editNoteIndex}"] .card-image p`)
this.divNotesColor = document.querySelector(`div[data-number="${this.editNoteIndex}"]`)
this.divNotesContent = document.querySelector(`div[data-number="${this.editNoteIndex}"] .card-reveal p`)
this.divNotesContentColor = document.querySelector(`div[data-number="${this.editNoteIndex}"] .card-reveal`)
this.divTitleName = document.querySelector(`div[data-number="${this.editNoteIndex}"] .card-title`)
//card-title
console.log(this.divNotesName, this.divNotesColor, this.divNotesContent)


    }
    editingNote(e, editNameInput, editColorInput, editTxtArea, noteName, noteColor, noteContent){
        console.log(editNameInput, editColorInput, editTxtArea)
        console.log(this.editNoteIndex)
        console.log("klik")
        console.log(editNameInput.value)
        console.log(this.notes)
        let nameColor
        let nameNote
        let nameContent
       
     
        this.notes.forEach((note, index)=>{
            if(index===parseInt(this.editNoteIndex)){
               nameColor=this.notes[parseInt(this.editNoteIndex)].noteColorValue
               nameNote=this.notes[parseInt(this.editNoteIndex)].noteNameValue
               nameContent=this.notes[parseInt(this.editNoteIndex)].noteContentValue
               this.divNotesColor.style.backgroundColor=this.notes[parseInt(this.editNoteIndex)].noteColorValue
               this.divNotesName.textContent=this.notes[parseInt(this.editNoteIndex)].noteNameValue
               this.divNotesContent.textContent=this.notes[parseInt(this.editNoteIndex)].noteContentValue
               this.divTitleName.textContent = this.notes[parseInt(this.editNoteIndex)].noteNameValue
               this.divNotesContentColor.style.backgroundColor = this.notes[parseInt(this.editNoteIndex)].noteColorValue
            }
        })
        console.log(nameNote, nameColor, nameContent)
        const editedNote = this.notes.forEach((note, index)=>{
            console.log(index, parseInt(this.editNoteIndex))
         noteName=nameNote
         noteContent=nameContent
         noteColor=nameColor
            if(index===parseInt(this.editNoteIndex)){
                if(editNameInput.value!==""){
                    this.notes[parseInt(this.editNoteIndex)].noteNameValue=editNameInput.value
                    this.divNotesName.textContent = editNameInput.value
                    this.divTitleName.textContent = editNameInput.value
                }
                if(editColorInput.value!==""){
                    this.notes[parseInt(this.editNoteIndex)].noteColorValue=editColorInput.value
                    this.divNotesColor.style.backgroundColor = editColorInput.value
                    this.divNotesContentColor.style.backgroundColor = editColorInput.value
                    
                }
                if(editTxtArea.value!==""){
                    console.log("txt")
                    this.notes[parseInt(this.editNoteIndex)].noteContentValue=editTxtArea.value
                    this.divNotesContent.textContent = editTxtArea.value
                }
            }
        })
        console.log(editedNote)
        editTxtArea.value=""
        editNameInput.value=""
        editColorInput.value=""
        Memory.addTolocalStorage(this.notes)
    }
    pinnedBtn(e, notesWrapper, noteNumber){
       
        const notesPinnedWrapper = document.querySelector('.notesPinnedWrapper')
        notesPinnedWrapper.innerHTML = ""
        //this.unpinnedNotes.length=0
        this.pinnedNoteIndex = e.target.parentElement.parentElement.dataset.number

        console.log(this.pinnedNoteIndex)
     
        this.notes.forEach((note, index)=>{
            if(this.notes[index].isPinned===false){
                this.unpinnedNotes.push(this.notes[index])
              
            }
          
        })
      
        this.unpinnedNotes.forEach((note, index)=>{
            if(index===parseInt(this.pinnedNoteIndex)){
              
                this.unpinnedNotes[index].isPinned=true
                this.allNotes[index].isPinned=true
                this.notes[index].isPinned=true
                this.pinnedNotes.push(this.unpinnedNotes[index])
                this.forPinnedNotes.push(this.unpinnedNotes[index])
             

            }
            
            
        })
        
       this.forPinnedNotes.forEach((el, index)=>{
            this.allNotes.forEach((note, index)=>{  
                
            })
            if(this.forPinnedNotes[index].isPinned===true)
                this.allNotes[index].isPinned=true
        })
        
    
        this.notes.forEach((note, index)=>{
            if(this.notes[index].isPinned===false)
                this.unpinnedNotes.push(this.notes[index])
        })

    const notesPinnedWrapper2 = document.querySelector('.notesPinnedWrapper')
      
        
        this.forPinnedNotes.forEach((note)=>{
            const cardDiv = document.createElement('div')
     cardDiv.setAttribute("class", "col s3 m3")
            let noteNumberForHTMLLocalStorage = note.noteNumber
          cardDiv.innerHTML = `
            
           <div class = "card" style="background-color: ${note.noteColorValue}" data-number=" ${--noteNumberForHTMLLocalStorage}">
              <div class = "card-image waves-effect waves-block waves-light">
                 <img class = "activator" src = "https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_960_720.jpg">      
                 <p class="center" style="font-size: 20px;">${note.noteNameValue}</p>          
              </div>
              
              <div class = "card-content activator">             
                 <p>Kliknij w zdjęcie, by dowiedzieć się więcej</p>
              </div>
              
              
              <div class = "card-reveal" style="background-color: ${note.noteColorValue}">
                 <span class = "card-title grey-text text-darken-4 style="font-size: 20px;">${note.noteNameValue}
                    <i class = "material-icons right">close</i></span>
                 <p>${note.noteContentValue}</p>
              </div>
              
              <div class = "card-action">

                 <button class = "btn waves-effect waves-light red removeNote"> Usuń</button>
                <button class = "btn waves-effect waves-light blue editNote">Edytuj
                </button>
                <button class = "btn waves-effect waves-light green pinnedUnpinnedNote">${note.isPinned===false ? "Przypnij" : "Odepnij"}
                </button>
              </div>
           </div>
        
     `

     notesPinnedWrapper.appendChild(cardDiv)
     
        })
        
      this.notes.splice(this.pinnedNoteIndex, 1)
     
        /*this.forPinnedNotes.forEach((note, index)=>{
            this.forPinnedNotes[index].noteNumber=index+1
        })*/
         
        this.allNotes.forEach((note, index)=>{
            this.allNotes[index].noteNumber=index+1
        })
        
        console.log(this.notes)
        e.target.parentElement.parentElement.parentElement.remove()
        const allNotes = document.querySelectorAll('.notesWrapper>div>div')
        //console.log(allNotes)
        allNotes.forEach((note, index)=>{
            console.log(index)
            
            note.removeAttribute("data-number")
            note.setAttribute("data-number", `${--index}`)
        })
        this.allNotes.forEach((note, index)=>{
            this.forPinnedNotes.forEach((el, index2)=>{
              if(this.allNotes[index].noteNumber===this.forPinnedNotes[index2].noteNumber)
                  this.allNotes[index].isPinned=true
            })
            
          })
        this.unpinnedNotes.length=0
       // this.forPinnedNotes.length=0
       //this.notes = this.forPinnedNotes
       Memory.addTolocalStorage(this.allNotes)
       /*if(this.unpinnedNotes.length===0)
        this.forPinnedNotes.length=0*/
    }
    addTaskFromLocalStorage(noteName, noteColor, noteContent, noteNumber){
  
    
        console.log(this.notes)
        
        const notes = Memory.downloadFromLocalStorage()
       
        const mappedNotes = notes.map(note => {
            note.createDate = new Date(note.createDate);
            return note;
        });
        console.log(mappedNotes)
        this.notes=mappedNotes
        const notesWrapper = document.querySelector('.notesWrapper')
       
        mappedNotes.forEach((note)=>{
            const cardDiv = document.createElement('div')
     cardDiv.setAttribute("class", "col s3 m3")
            let noteNumberForHTMLLocalStorage = note.noteNumber
          cardDiv.innerHTML = `
            
           <div class = "card" style="background-color: ${note.noteColorValue}" data-number=" ${--noteNumberForHTMLLocalStorage}">
              <div class = "card-image waves-effect waves-block waves-light">
                 <img class = "activator" src = "https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_960_720.jpg">      
                 <p class="center" style="font-size: 20px;">${note.noteNameValue}</p>          
              </div>
              
              <div class = "card-content activator">             
                 <p>Kliknij w zdjęcie, by dowiedzieć się więcej</p>
              </div>
              
              
              <div class = "card-reveal" style="background-color: ${note.noteColorValue}">
                 <span class = "card-title grey-text text-darken-4 style="font-size: 20px;">${note.noteNameValue}
                    <i class = "material-icons right">close</i></span>
                 <p>${note.noteContentValue}</p>
              </div>
              
              <div class = "card-action">

                 <button class = "btn waves-effect waves-light red removeNote"> Usuń</button>
                <button class = "btn waves-effect waves-light blue editNote">Edytuj
                </button>
                <button class = "btn waves-effect waves-light green pinnedUnpinnedNote">${note.isPinned===false ? "Przypnij" : "Odepnij"}
                </button>
              </div>
           </div>
        
     `

     notesWrapper.appendChild(cardDiv)
     
        })
        
        if(this.notes.length>0){
           
            console.log("loadRemoveBtn, editBtns")
            this.removeBtns =  document.querySelectorAll('.removeNote')
            this.editBtns =  document.querySelectorAll('.editNote')
            this.pinnedBtns = document.querySelectorAll('.pinnedUnpinnedNote')
            console.log(this.removeBtns, this.editBtns)
            this.removeBtns.forEach((btn)=>{
                btn.addEventListener("click", (e)=>this.removeNote(e, notesWrapper, noteNumber))
              
            })
            this.editBtns.forEach((btn)=>{
                btn.addEventListener("click", (e)=>this.editNote(e, notesWrapper, noteNumber))
               
            })
            this.pinnedBtns.forEach((btn)=>{
                btn.addEventListener("click", (e)=>this.pinnedBtn(e, notesWrapper, noteNumber))
               
            })
           
        }
    }
}



const notesMenu = new NotesMenu()
const notes2 = new Notes()
const memory = new Memory()
const editMenu  = new EditMenu()
notes2.addTaskFromLocalStorage()