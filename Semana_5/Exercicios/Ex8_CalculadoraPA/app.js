const inicial = 1;
const raiz = 3;

function calculaPA(inicial, raiz) {
  const pa = [inicial];
  for (let i = 1; i < 10; i++) {
    pa.push(pa[i - 1] + raiz);
  }
  console.log(pa);
}
calculaPA(inicial, raiz);
