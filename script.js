// const filmes = [
//   {
//     titulo: 'O Auto da Compadecida',
//     ano: 2000,
//     diretor: 'Guel Arraes',
//     elenco: [
//       'Selton Mello',
//       'Mateus Nachtergaele',
//       'Marco Nanini',
//       'Fernanda Montenegro',
//     ],
//   },
//   {
//     titulo: 'Carandiru',
//     ano: 2001,
//     diretor: 'Hector Babenco',
//     elenco: [
//       'Wagner Moura',
//       'José Carlos Vasconcelos',
//       'Ailton Graça',
//       'Caio Blat',
//     ],
//   },
//   {
//     titulo: 'Aquarius',
//     ano: 2012,
//     diretor: 'Kléber Mendonça Filho',
//     elenco: [
//       'Sônia Braga',
//       'Humberto Carrão',
//       'Maeve Jinkings',
//       'Bárbara Colen',
//     ],
//   },

// ]



// escreva seu código abaixo 👇🏻

// exercicio 1


// const resultado1 = [2,4,6,8]
// const resultado2 = [1,3,5,7]
// const resultado3 = [0,8,10,12]
// const resultado4 = [9,11,13,15]

// const megaSena = [resultado1,resultado2,resultado3,resultado4]
// console.log(megaSena.length)

// if (megaSena.length === 4){
//   for(let i=0;i<megaSena.length;i++){
//        for(let z=0;z<megaSena [i].length;z++){
//           console.log(`sortei ${i+1}:${megaSena[i]}`)
//        } 
// } }
// else {
//  console.log("é nececssario alterar o número de itens ") }


 // exercicio 2 

//  if (megaSena.length === 4){
//   //key in value
//   for(let i in megaSena){
//        for(let z=0;z<megaSena [i].length;z++){
//           console.log(`sortei ${i}:${megaSena[i]}`)
//        } 
// } }
// else {
//  console.log("é nececssario alterar o número de itens ") }
//
//execicio 3
// if (megaSena.length === 4){
  //key in value
//   for(let i in megaSena){
//     // elemento do array
//        for(let z of megaSena){
//           console.log(`sortei ${i}:${megaSena[i]}`)
//        } 
// } }
// else {
//  console.log("é nececssario alterar o número de itens ") } 
// exercicio de fixação 

// const filme = ["o homem que copiava","2003","jorge furtado"]
// const elenco = ["lazaro ramos","leandro leal","pedro cardoso"]

const filme = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
    'Selton Mello',
    'Mateus Nachtergaele',
    'Marco Nanini',
    'Fernanda Montenegro',
     ],
   }]

  for (let i in filme){
    console.log(`${filme[i].titulo}, de ${filme[i].ano},dirigido por ${filme[i].diretor}`);

      for (let atores of filme){
        console.log(`Tem no elenco:${filme.elenco}`)
      }
  }
  // for (let i in filme){
  //   console.log(`${filme[i].titulo}, de ${filme[i].ano}, dirigido por ${filme[i].diretor})
  //     {
   