
/** 插入排序 */

// 循环不变式思想
// 1. p 指向下一个要比较的元素
// 2. p + 1 指向腾出来的空位置

/**
 * 整体过程， 类比打牌时我们对自己的牌进行整理的过程
 * 
 * 1. 遍历当前数组，如果当前元素比要插入的元素大，则当前元素往后移动一位，
 * 然后继续往前比较，直到找到一个比要插入的值小
 * 2. 腾出来的位置插入要插入的元素
 * 
 */

 // 循环不变形式的过程函数
 /**
  * 
  * @param {*} array 
  * @param {*} x // 要插入的元素
  */
 function insertDemo(array, x){
   let p  = array.length - 1;
  while(p > 0 && array[p] > x){
    array[p+1] = array[p];
    p--;
  }
  array[p+1] = x;
 }

 function insertSort(array){
   for(let i = 1; i < array.length; i++){
      insert(array, i, array[i]);
   }
 }

 /**
  * 
  * @param {*} array  // 需要排序的数组
  * @param {*} i // 当前元素
  * @param {*} x  // 要插入的元素
  */
 function insert(array, i, x){
   // 整体过程跟insertDemo 同
   let p = i - 1;
   while(p > 0 && array[p] > x){
     array[p+1] = array[p];
     p--;
   }
   array[p+1] = x;
 }

 /**
  * 总结
  * 1. 最坏的情况：
  * 数组完全逆序， 插入第2个元素，要考虑前1个元素，插入第3个元素，要考虑前2个元素，...
  * 插入第N个元素N-1个元素， 即最坏的情况：1 + 2 + 3 + ... + (N-1)，
  * 等差数列求和，结果：N^2/2， 即最坏的情况复杂度为o(N^2)
  * 2. 最好的情况： 
  * 数组已经是有序的，每插入一个元素，只需要考虑前一个元素，因此最好的情况是：o(N)
  */
