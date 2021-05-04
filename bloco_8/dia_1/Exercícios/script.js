/**------------------------------01---------------------------------- */
const employeesDatas = (nomeCompleto) => { 
	const obj = {
		fullName: nomeCompleto,
		email:`${nomeCompleto.replace(' ','').toLowerCase()}@trybe.com`,
	}
	return obj;	
 }


const newEmployees = (employeeData) => {
    const employees = {
      id1: employeeData('Pedro Guerra'),
      id2: employeeData('Luiza Drumond'),
      id3: employeeData('Carla Paiva'),
    }
    return employees;
  };

console.log(newEmployees(employeesDatas));

/**------------------------------02---------------------------------- */
const checkNumbers = (number, drawNumber) => number === drawNumber ? true : false;

const drawResult = (number, checkNumbersFunction) => {
	const randomNumber = Math.floor(Math.random() * 5 + 1);
	if(checkNumbersFunction(number, randomNumber)) return 'Parabéns você ganhou'
	return 'Tente novamente'
}

console.log(drawResult(5, checkNumbers));