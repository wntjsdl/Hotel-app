function Hotel(guest) {
  this.guest = guest;
  this.checkIn = function(name) {
    if(name === '' || name === undefined)
      return '이름을 다시 입력하세요';
    var index = guest.indexOf(name);
    if(index !== -1)
      return '이미 체크인 하셨습니다'
    guest.push(name);
    return '안녕하세요.' + name + '님 반갑습니다';
  }
  this.getStatus = function() {
    if (guest.length === 0)
      return '체크인 한 사람이 없습니다.'
    else
      return guest.toString() + '님이 체크인했습니다.';
  }
  this.checkOut = function(name) {
    if(name === '' || name === undefined)
      return '이름을 다시 입력하세요';
    var index = guest.indexOf(name);
    if(index === -1)
      return '그런 사람이 없습니다.'
    else {
      if (index !== -1) guest.splice(index, 1);
      return name + '님 감사합니다. 안녕히 가세요';
    }
  }
}

const hotel = new Hotel(['미미']);
let name = '';
document.querySelector('.getStatus-btn').addEventListener('click', function(){
  document.querySelector('.description').textContent = '';
  document.querySelector('.description').textContent = hotel.getStatus();
});
document.querySelector('.checkin-btn').addEventListener('click', function(){
  name = document.querySelector('#name').value;
  console.log(name);
  document.querySelector('.description').textContent = '';
  document.querySelector('.description').textContent = hotel.checkIn(name);
});
document.querySelector('.checkout-btn').addEventListener('click', function(){
  name = document.querySelector('#name').value;
  document.querySelector('.description').textContent = '';
  document.querySelector('.description').textContent = hotel.checkOut(name);
});
