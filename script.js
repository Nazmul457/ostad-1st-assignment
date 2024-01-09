function checkAge() {
  var age = document.getElementById('age').value;
  var resultContainer = document.getElementById('result');

  if (age >= 18) {
      resultContainer.innerHTML = '<div class="card"><div class="card-body"><h5 class="card-title">You are an adult</h5></div></div>';
  } else {
      resultContainer.innerHTML = '<div class="card"><div class="card-body"><h5 class="card-title">You are a child</h5></div></div>';
  }
}

function toggleNavbar() {
  var navbar = document.getElementById('navbarNav');
  navbar.classList.toggle('show');
}