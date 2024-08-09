function sendData() {
    let email = document.querySelector('input[name=email]').value;
    let password = document.querySelector('input[name=password]').value;
    let firstname = document.querySelector('input[name=firstname]').value;
    let lastname = document.querySelector('input[name=lastname]').value;
    let gender = document.querySelector('input[name=gender]:checked').value;
    let dob = document.querySelector('input[name=dob]').value;
    let info = document.querySelector('textarea[name=info]').value;
  
    let modalContent = `
    <div align="start">
      <b>Email: </b> <p class="badge badge-outline"> ${email} </p> <br> <br>
      <b>Password: </b> <p class="badge badge-outline"> ${password} </p> <br> <br>
      <b>Firstname: </b> <p class="badge badge-outline"> ${firstname} </p> <br> <br>
      <b>Lastname: </b> <p class="badge badge-outline"> ${lastname} </p> <br> <br>
      <b>Gender: </b> <p class="badge badge-outline"> ${gender} </p> <br> <br>
      <b>Birthdate: </b> <p class="badge badge-outline"> ${dob} </p> <br> <br>
      <b>Information: </b>   <p class="badge badge-outline"> ${info} </p> <br> <br>
      </div>
    `;
  
    const modalBody = document.querySelector('#my_modal_4 .modal-box p');
    if (modalBody) {
      modalBody.innerHTML = modalContent;
    } else {
      const modalBox = document.querySelector('#my_modal_4 .modal-box');
      const newContent = document.createElement('p');
      newContent.innerHTML = modalContent;
      modalBox.appendChild(newContent);
    }
  
    my_modal_4.showModal();
  }
  