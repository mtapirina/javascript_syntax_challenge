//Challenge Project: Mysterious Organism
console.log('Hi, Mysterious Organism P. aequor !!!') 

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  //factory function

  function pAequorFactory(n, array) {
    return {
        specimenNum: n,
        dna: array,
/*MUTATION metod - mutate() is responsible for randomly selecting a 
base in the object’s dna property and changing the current 
base to a different base. Then .mutate() will return the object’s dna.*/
        mutate(){
            //this.dna = arr to change
            const dnaBases = ['A', 'T', 'C', 'G'];
            const newDna =[];
            let y = [];
            for(let i = 0; i < this.dna.length; i++){
                dnaBases.forEach(el =>{if(el !== this.dna[i]){ y.push(el)}});
                newDna[i] = y[Math.floor(Math.random() * 3)];
                y.length = 0;
            }
            return this.dna = newDna ;
        },
/* COMPARE DNA metod 
compareDNA() has one parameter, another pAequor object.
compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
return 'specimen #1 and specimen #2 have 25% DNA in common'
*/    
        compareDNA(obj){
            const compare = this.dna.filter((el, i)=> el === obj.dna[i]);
            const percent = (compare.length/this.dna.length * 100).toFixed()
            console.log(percent  + ' == percent == ' + compare.length + ' this ' + compare  + ' = DNA in common') ;
            //console.log( `specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${percent}% DNA in common`);
            return `specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${percent}% DNA in common`
        },
/* method .willLikelySurvive()
.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
*/
        willLikelySurvive(){
            const countCorG = this.dna.reduce((total, amount)=>{
                if(amount === 'C'|| amount === 'G'){
                    total++;};
                return total;},0);
                //console.log((countCorG/this.dna.length*100).toFixed() + '%')
            return (countCorG/this.dna.length*100).toFixed()>= 60?true:false;
        },
/*If you’d like to challenge yourself further, you could consider the following:
* 		Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. 
The rules are that 'A's match with 'T's and vice versa. 
Also, 'C's match with 'G's and vice versa. (Check the hint for more details)
* 		Use the .compareDNA() to find the two most related instances of pAequor.*/
        complementStrand(){
            let complementDna = [];
            const  createComplement = this.dna.forEach((el)=>{
                switch (el){
                case 'A':
                complementDna.push('T');
                break;
                case 'T':
                complementDna.push('A');
                break;
                case 'C':
                complementDna.push('G');
                break;
                case 'G':
                complementDna.push('C');
                break;
                default:
                complementDna.push(el);
                break;};
                }); 
            return complementDna;
        }

    }
}

//Function for creating the required number (n) of instances (P. aequor )
const Create_N_pAequor = (n) => {
array = [];
let i = 0;
count = 0;
while(i < n){
    let specimen = pAequorFactory(count ,mockUpStrand());
    if(specimen.willLikelySurvive()){

    count++;
    array.push(specimen);
    i++
   };
};
//an array with n specimens than will Likely Survive
return array;
};

//test base dna
const testBase = mockUpStrand(returnRandBase())
const test_Base = mockUpStrand()
//console.log(testBase);
//console.log(test_Base);
//test example 1 pAequor
//console.log(pAequorFactory(1, testBase));
const ex1 = pAequorFactory(1, testBase);
const ex2 = pAequorFactory(2, test_Base);
//console.log('ex1 - ex2 obj'); 
//console.log(ex1);
//console.log(ex2); 
//test mutate metod en ex1
//console.log('ex1 - ORIGIN dna');
//console.log(ex1.dna); 
//console.log('ex2 - ORIGIN dna');
//console.log(ex2.dna);
//console.log('ex1 (1x mutation) - MUTATED dna'); 
//console.log(ex1.mutate());
ex1.mutate();
//console.log(' ex2 (3x mutation) - MUTATED dna'); 
//console.log(ex2.mutate());  
//console.log(ex2.mutate()); 
//console.log(ex2.mutate()); 
ex2.mutate();
ex2.mutate();
ex2.mutate();
//console.log('ex1 - NEW MUTATED dna');
//console.log(ex1.dna); 
//test compareDNA()
console.log(' COMPARE DNA ex 1 => ex 2');
console.log(ex1.dna); 
console.log(ex2.dna); 
console.log(ex1.compareDNA(ex2)); 
//test if specimen .willLikelySurvive()
console.log('specimen  willLikelySurvive')
console.log(ex1.willLikelySurvive());
console.log(ex2.willLikelySurvive());
//test Create_N_pAequor = (n = number of specimens)
//Create_N_pAequor (4);
console.log(Create_N_pAequor(4));
const pAequor_30 = Create_N_pAequor(30);
//console.log(pAequor_30)
const pAequor_15 = Create_N_pAequor(15);
//console.log(pAequor_15);
//test complementStrand() = return = array - complement dna)
console.log(pAequor_15[0].dna);
console.log(pAequor_15[0].complementStrand());