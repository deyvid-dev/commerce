db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "proteínas",
      percentual: {
        $lte: 40,
        $gte: 30,
      },
    },
  },
}, {
  _id: false,
  nome: true,
});
