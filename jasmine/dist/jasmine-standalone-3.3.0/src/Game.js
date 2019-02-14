// function BowlingScores() {
//   this.frames = [{a: 0, b: 0}, {a: 0, b: 0}, {a: 0, b: 0}, {a: 0, b: 0}, {a: 0, b: 0}, {a: 0, b: 0}, {a: 0, b: 0}, {a: 0, b: 0}, {a: 0, b: 0}, {a: 0, b: 0, c: 0}];
//   this.pending = false
// };
//
// BowlingScores.prototype._calculate = function(frame) {
//
//   if(frame['a'] + frame['b'] === 10) {
//     this._switchPendingStatus()
//   } else {
//     return frame['a'] + frame['b']
//   };
// };
//
// BowlingScores.prototype._switchPendingStatus = function() {
//   this.pending ? this.pending = false : this.pending = true;
// };
