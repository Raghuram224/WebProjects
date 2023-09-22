
// function anyBaseToDecimal(binary,base=2){
//     const hexToBinaryMap = {
//         '0': '0000',
//         '1': '0001',
//         '2': '0010',
//         '3': '0011',
//         '4': '0100',
//         '5': '0101',
//         '6': '0110',
//         '7': '0111',
//         '8': '1000',
//         '9': '1001',
//         'A': '1010',
//         'B': '1011',
//         'C': '1100',
//         'D': '1101',
//         'E': '1110',
//         'F': '1111',
//       };
    
//     let sum=0;
//     if(base!=16){
//         for(let i=binary.length-1, j=0;i>=0;i--,j++){
//             sum+=(parseInt(binary[i])*Math.pow(base,j));
//           }
         
//     }else{
//         for(let i=binary.length-1, j=0;i>=0;i--,j++){
//             sum+=(parseInt(hexToBinaryMap[binary[i]])*Math.pow(base,j));
//           }
//     }
    
//     return sum;
// }

// console.log(anyBaseToDecimal("1010",16));

// // function anyBase(num,base=2){
// //     if(num==0){
// //         return "0";
// //     }
// //     else if(base!=16){
// //         let str="";
// //         while(num>0){
// //             str=(num%base)+str;
// //             num=parseInt(num/base);
    
// //         }
// //         return str;
// //     }
// //     else{
   
// //         let str="";
// //         const hexChars="0123456789ABCDEF";
// //         while(num>0){          
// //             str=(hexChars[(num%base)])+str;
// //             num=parseInt(num/base);
    
// //         }
// //         return str;
// //     }
   

// // }
// // anyBase()

// function hexadecimalToDecimal(input){
  
//     const hexValues={'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15,'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15};
//     let decimalNumber=0;
//     let j=0;
    
//     for(let i=input.length-1;i>=0;i--){
//       let number=hexValues[input[i]];
//       console.log(number);
//       decimalNumber+=number*Math.pow(16,j);
//       j++;
//     }
//   return decimalNumber;
//   }

//   function anyBaseToDecimal(binary,base=2){
//     let sum=0
// 	const hexa={'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15,'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15};
//     if(base!=16){
// 		for(let i=binary.length-1, j=0;i>=0;i--,j++){
	
// 			sum+=(parseInt(binary[i])*Math.pow(base,j))
			
// 		}
// 		return sum;
// 	}
// 	for(let i=binary.length-1, j=0;i>=0;i--,j++){
// 		let value=hexa[binary[i]];
// 		sum+=(parseInt(value)*Math.pow(base,j))
// 	}

//     return sum;
//  }

//  console.log(anyBaseToDecimal("f",16));


function anyBaseToDecimal(binary,base=2){
    let sum=0
	const hexa={'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15,'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15};
    
	for(let i=binary.length-1, j=0;i>=0;i--,j++){
		let value=hexa[binary[i]];
		sum+=(parseInt(value)*Math.pow(base,j));
	}

    return sum;
 }
console.log(anyBaseToDecimal("12",8));