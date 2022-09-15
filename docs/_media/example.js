/// [tag]
var rootElm = document.createElement('div');
rootElm.id = 'rootElm';
rootElm.innerHTML = '<div><p id="p1">p1</p><p id="p2">p2</p></div>'
$('div/p', rootElm);
/// [tag]
/// [id]
var rootElm = document.createElement('div');
rootElm.id = 'rootElm';
rootElm.innerHTML = '<p id="p1">p1</p><p id="p2">p2</p>'
$('#p1', rootElm);
/// [id]
/// [name]
var rootElm = document.createElement('div');
rootElm.id = 'rootElm';
rootElm.innerHTML = '<p id="p1" name="n1">p1</p><p id="p2">p2</p>'
$('$n1', rootElm);
/// [name]
/// [class]
var rootElm = document.createElement('div');
rootElm.id = 'rootElm';
rootElm.innerHTML = '<p id="p1" name="n1" class="nav">p1</p><p id="p2" class="nav warn">p2</p>'
$('.nav', rootElm);
/// [class]
/// [attrib]
var rootElm = document.createElement('div');
rootElm.id = 'rootElm';
rootElm.innerHTML = '<p id="p1" name="n1" class="nav">p1</p><p id="p2" class="nav warn">p2</p>'
$('@class=nav', rootElm);
/// [attrib]
/// [like]
var rootElm = document.createElement('div');
rootElm.id = 'rootElm';
rootElm.innerHTML = '<p id="p1" name="n1" class="nav">p1</p><p id="p2" class="nav warn">p2</p>'
$('%class=nav', rootElm);
/// [like]
/// [comb1]
var rootElm = document.createElement('div');
rootElm.id = 'rootElm';
rootElm.innerHTML = '<p id="p1" name="n1" class="nav">p1</p><p id="p2" class="nav warn">p2</p>'
console.log(rootElm.outerHTML);
$('p#p2', rootElm);
/// [comb1]
/// [comb2]
var rootElm = document.createElement('div');
rootElm.id = 'rootElm';
rootElm.innerHTML = '<p id="p1" name="n1" class="nav">p1</p><p id="p2" class="nav warn">p2</p>'
$('p.nav', rootElm);
/// [comb2]