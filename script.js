// For Time value in milliseconds & Update
const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeElement.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);
//  For User Image
const uploadInput = document.getElementById('userUpload');
const userPhoto = document.getElementById('userPhoto');

uploadInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    userPhoto.src = imageURL;
  }
});