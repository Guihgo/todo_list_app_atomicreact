module.exports.onRender = function(atom) {
  console.log(atom);

  var inputList = Atomic.getSub(atom, 'inputList');
  var input = Atomic.getSub(inputList, 'input');
  var btnAddItem = Atomic.getSub(inputList, 'btn');

  btnAddItem.onclick = function(){
    Atomic.add(atom, 'Item', [{key:'itemName', value:input.value}]);
  };

}

module.exports.onAdded = function(atomAdded, atom){
  var btnRemove = Atomic.getSub(atomAdded, 'btnRemove');
  btnRemove.onclick = function() {
    Atomic.getNucleus(atom).removeChild(atomAdded);
  }
}
