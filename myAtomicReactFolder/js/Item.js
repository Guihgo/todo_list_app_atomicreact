module.exports.onRender = function(atom){
  let btnAction = Atomic.getSub(atom, 'btnAction');
  let name = Atomic.getSub(atom, 'name');

  let markAsDone = "Mark as done";
  let markAsUnDone = "Mark as undone";

  btnAction.innerHTML = markAsDone;

  btnAction.onclick = function(){
    if(name.classList.contains('done')) {
      name.classList.remove('done');
      btnAction.innerHTML = markAsDone;
    } else {
      name.classList.add('done');
      btnAction.innerHTML = markAsUnDone;
    }
  }
};
