let data = {
  addRecord: function() {
    for (let i = 0; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        data[key] = arguments[i][key];
      } 
    } return this;
  },     
  p: 600,
  str: 'hello',
  y: -50
};

console.log(data);

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
console.log(data.x); 
console.log(data.y); 
console.log(data.z);
console.log(data.p); 
console.log(data.str); 
