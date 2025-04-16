// Show message for 15 seconds
function showMessage(text, color = 'red') {
  const messageBox = document.getElementById('message');
  messageBox.innerText = text;
  messageBox.style.color = color;
  messageBox.style.opacity = 1;

  // Clear previous timeout if any
  if (messageBox.timeoutId) {
    clearTimeout(messageBox.timeoutId);
  }

  // Set timeout to clear message after 15 seconds
  messageBox.timeoutId = setTimeout(() => {
    messageBox.innerText = '';
  }, 15000);
}

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const college = document.getElementById('college').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const addNewBtn = document.getElementById('addNewBtn');
  addNewBtn.style.display = 'none';

  if (!name) {
    showMessage('Name cannot be empty!');
    return;
  }

  if (password !== confirmPassword) {
    showMessage('Passwords do not match!');
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/users', true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      const userExists = users.some(user => user.username === username);

      if (userExists) {
        showMessage('Username already exists!');
      } else {
        const newUser = {
          name,
          college,
          username,
          password
        };

        const xhrPost = new XMLHttpRequest();
        xhrPost.open('POST', 'http://localhost:3000/users', true);
        xhrPost.setRequestHeader('Content-Type', 'application/json');

        xhrPost.onload = function () {
          if (xhrPost.status === 201) {
            // Disable form fields FIRST
            document.querySelectorAll('#registerForm input, #registerForm button[type="submit"]').forEach(el => {
              el.disabled = true;
            });

            // Then show message with slight delay for safety
            setTimeout(() => {
              showMessage('✅ Successfully Registered!', 'green');
              addNewBtn.style.display = 'inline-block';
            }, 100);
          } else {
            showMessage('Something went wrong!');
          }
        };

        xhrPost.send(JSON.stringify(newUser));
      }
    } else {
      showMessage('Failed to fetch users!');
    }
  };

  xhr.onerror = function () {
    showMessage('Network error occurred!');
  };

  xhr.send();
});

// Reset form on Add New button click
document.getElementById('addNewBtn').addEventListener('click', function () {
  document.getElementById('registerForm').reset();
  document.getElementById('message').innerText = '';
  this.style.display = 'none';

  // Re-enable form fields
  document.querySelectorAll('#registerForm input, #registerForm button[type="submit"]').forEach(el => {
    el.disabled = false;
  });
});

// Auto-suggest college names
const collegeNames = ["VESIT", "DJ Sanghvi", "Sardar Patel", "KJ Somaiya", "VJTI"];
const datalist = document.getElementById('collegeList');

collegeNames.forEach(college => {
  const option = document.createElement('option');
  option.value = college;
  datalist.appendChild(option);
});
