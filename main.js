let data = {
  addRecord: function() {
    let dataSrc = {};
    for (let i = 0; i < arguments.length; i++) {
      let prop = arguments[i];
      for (let key in prop) {
        dataSrc[key] = prop[key];
      } 
    } return Object.assign(data, dataSrc);
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
