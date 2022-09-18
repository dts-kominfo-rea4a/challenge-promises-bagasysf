const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let jumlahPertama = [];
    let jumlahKedua = [];
    let jumlahTotal = [];

    promisePertama = await promiseTheaterIXX();
    promisePertama.forEach((element) => {
      if (element.hasil === emosi) {
        jumlahPertama.push(element.hasil);
      }
    });

    promiseKedua = await promiseTheaterVGC();
    promisePertama.forEach((element) => {
      if (element.hasil === emosi) {
        jumlahKedua.push(element.hasil);
      }
    });

    jumlahTotal = [...jumlahPertama, ...jumlahKedua];
    return jumlahTotal.length;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
