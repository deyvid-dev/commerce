db.produtos.countDocuments({
  nome: {
    $regex: /mc/ig,
  },
});