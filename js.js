// j'appelle le bouton du formulaire. Quand je clique dessus les ids auront la valeur '' (blanc)
document.getElementsByName('button')[0].addEventListener('click',function(){
  document.getElementById('lastname').value='';
  document.getElementById('firstname').value='';
  document.getElementById('city').value='';
})
