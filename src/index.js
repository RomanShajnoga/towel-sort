
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  return matrix.reduce((acumulator,current,index)=>{
  if(index%2===0) return [...acumulator, ...current];
  return [...acumulator, ...current.reverse()];
  },[]);
}
