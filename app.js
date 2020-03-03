

// Connection variables

let btn_submit = document.querySelector('.btn');
let taskList = document.querySelector('.list-group');


loadUI();

function loadUI(){
  btn_submit.addEventListener('click',addToList);
  taskList.addEventListener('click',removeElement)
}


// Function to add Tasks in List

function addToList(){
  let list_group_colors = ['success','primary','secondary','warning','info','dark'];
  let input_field = document.querySelector('.form-control');
  let input_field_text = input_field.value;
  let error_prompt_div = document.getElementById('error');
  if(input_field_text === ''){
    // if(!error_prompt_div.firstElementChild){
      error_prompt_div.classList = 'alert alert-danger zoom';
      let textElement = document.createTextNode('Please Enter a task...')
      error_prompt_div.appendChild(textElement);
    //   let delete_link = document.createElement('a');
    //   delete_link.classList = 'delete-item secondary-content';
    //   delete_link.innerHTML = '<i class="fa fa-remove float-right"></i>';
    //   error_prompt_div.appendChild(delete_link);
    //   // error_prompt_div.addEventListener('click', removeLinkElement);
    //   delete_link.addEventListener('click',removeLinkElement);
    //   input_field.className += ' border-danger';
    // // }else{
    //     error_prompt_div.style.display = 'block';
    //     setTimeout(() => {
    //       document.querySelector('.alert').remove();
    //     }, 3000);
    // // }
    document.querySelector('.alert').style.display = 'block';
    setTimeout(() => {
      let targetElement = document.querySelector('.alert');
      targetElement.style.display = 'none';
      targetElement.textContent = '';
    }, 3000);

  }else{
    console.log(input_field_text);
    // Making a li Element
    let li_element_to_be_added = document.createElement('li');
    let index_for_color = getRandomInt(0,6);
    console.log(index_for_color);
    li_element_to_be_added.classList = `list-group-item list-group-item-${list_group_colors[index_for_color]} mt-2`;
    document.querySelector('.card').classList = `card shadow-lg p-4 mb-4 bg-white border-${list_group_colors[index_for_color]}`;
    document.getElementById('nested-card').classList = `card border-${list_group_colors[index_for_color]}`;
    document.querySelector('.btn').classList = `btn btn-light btn-outline-${list_group_colors[index_for_color]} mt-3 btn-sm`
    document.getElementsByTagName('h2')[0].classList = ` text-white`;
    input_field.classList = `form-control  form-control-lg mt-3 border-${list_group_colors[index_for_color]}`;
    document.querySelector('.card-header').classList = `card-header text-center p-3 bg-${list_group_colors[index_for_color]}`
    li_element_to_be_added.appendChild(document.createTextNode(input_field_text));
    // Making a delete link!
    let delete_link = document.createElement('a');
    delete_link.classList = 'delete-item secondary-content ';
    delete_link.innerHTML = '<i class="fa fa-remove float-right"></i>';
    li_element_to_be_added.appendChild(delete_link);
    document.querySelector('.list-group').appendChild(li_element_to_be_added);
    input_field.value = '';
    // console.log(taskList);
    
  }
}

// Function on Ul to get delete link

function removeElement(e){
  if(e.target.parentElement.classList.contains('delete-item'))
    e.target.parentElement.parentElement.remove();
}



// Generic function to remove connected link
function removeLinkElement(e){
  if(e.target.parentElement.classList.contains('delete-item'))
    this.parentElement.style.display = 'none';
}


// Function to get a random number to chage colors of List items 

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}