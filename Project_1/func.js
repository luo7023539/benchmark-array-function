Array.prototype.remove = function (from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
let arr_1 = new Array(10000).fill(0)
let arr_2 = new Array(10000).fill(0)

module.exports = {
  splice(num) {
    arr_1.splice(0)
    arr_1.splice(0)
    arr_1.splice(0)
    arr_1.splice(0)
    arr_1.splice(0)
  },
  remove() {
    arr_2.remove(0)
    arr_2.remove(0)
    arr_2.remove(0)
    arr_2.remove(0)
    arr_2.remove(0)
  }
}



