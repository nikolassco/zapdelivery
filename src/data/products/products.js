export const productsList = [
  // { id: 1, category: "warning", itemName: "Confirmar Pedido Pelo Whatsapp", itemDescription: "Ao fazer pedido pelo site, o mesmo redireciona para o whatsapp , só é válido após a confirmação do restaurante pelo WHATSAPP" },
  // { id: 99, category: "promotion", itemName: "5X Tudos (10% off)", itemDescription: ["pão", "carne", "ovo", "bacon", "queijo", "presunto", "tomate", "alface", "milho", "batata"], itemPrice: 70 },
  // { id: 98, category: "promotion", itemName: "2 X Tudos + coca 1,5 ZERO", itemDescription: ["pão", "carne", "bacon", "mussarela", "ovo", "presunto", "tomate", "alface", "milho", "batata"], itemPrice: 37 },
  // { id: 97, category: "promotion", itemName: "2 X TUDOS + Guarana 1,5 ", itemDescription: ["pão", "carne", "bacon", "mussarela", "ovo", "presunto", "tomate", "alface", "milho", "batata"], itemPrice: 37 },
  // { id: 96, category: "promotion", itemName: "Açaí Puro 1L ", itemDescription: [], itemPrice: 20 },
  { id: 1, category: "burguer", itemName: "Hamburguer Simples", itemDescription: ["pão", "carne", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 9 }, { option: "carne picanha", price: 11 }, { option: "carne caseira", price: 12 }], promotion: false },
  { id: 2, category: "burguer", itemName: "X Burguer", itemDescription: ["pão", "carne", "queijo", "presunto", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 12 }, { option: "carne picanha", price: 13.5 }, { option: "carne caseira", price: 15 }], promotion: false },
  { id: 3, category: "burguer", itemName: "X Egg Burguer", itemDescription: ["pão", "carne", "ovo", "queijo", "presunto", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 13 }, { option: "carne picanha", price: 15 }, { option: "carne caseira", price: 16 }], promotion: false },
  { id: 4, category: "burguer", itemName: "Triplo Egg", itemDescription: ["pão", "3 carnes", "ovo", "queijo", "presunto", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 18 }, { option: "carne picanha", price: 20 }, { option: "carne caseira", price: 22 }], promotion: false },
  { id: 5, category: "burguer", itemName: "X Caribe", itemDescription: ["pão", "carne", "banana da terra", "queijo", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 13 }, { option: "carne picanha", price: 15 }, { option: "carne caseira", price: 16 }], promotion: false },
  { id: 6, category: "burguer", itemName: "X Bacon", itemDescription: ["pão", "carne", "bacon", "queijo", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 14 }, { option: "carne picanha", price: 15 }, { option: "carne caseira", price: 16 }], promotion: true },
  { id: 7, category: "burguer", itemName: "X Egg Bacon", itemDescription: ["pão", "carne", "ovo", "bacon", "queijo", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 15 }, { option: "carne picanha", price: 16 }, { option: "carne caseira", price: 17 }], promotion: false },
  { id: 8, category: "burguer", itemName: "X Bacon + Frango", itemDescription: ["pão", "carne", "bacon", "frango", "queijo", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 16 }, { option: "carne picanha", price: 17 }, { option: "carne caseira", price: 18 }], promotion: false },
  { id: 9, category: "burguer", itemName: "X Calabresa + Frango", itemDescription: ["pão", "carne", "calabresa", "frango", "queijo", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 16 }, { option: "carne picanha", price: 17 }, { option: "carne caseira", price: 18 }], promotion: false },
  { id: 10, category: "burguer", itemName: "X Egg Calabresa", itemDescription: ["pão", "carne", "calabresa", "ovo", "queijo", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 15 }, { option: "carne picanha", price: 16 }, { option: "carne caseira", price: 17 }], promotion: false },
  { id: 11, category: "burguer", itemName: "X Egg Burguer + Frango", itemDescription: ["pão", "carne", "ovo", "queijo", "frango", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 15.5 }, { option: "carne picanha", price: 16.5 }, { option: "carne caseira", price: 17.5 }], promotion: false },
  { id: 12, category: "burguer", itemName: "X Tudo", itemDescription: ["pão", "carne", "bacon", "ovo", "queijo", "presunto", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 15.5 }, { option: "carne picanha", price: 17 }, { option: "carne caseira", price: 18 }], promotion: true },
  { id: 13, category: "burguer", itemName: "X Tudo + Calabresa", itemDescription: ["pão", "carne", "bacon", "ovo", "queijo", "presunto", "calabresa", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 17 }, { option: "carne picanha", price: 18 }, { option: "carne caseira", price: 19 }], promotion: false },
  { id: 14, category: "burguer", itemName: "X Tudo + Frango", itemDescription: ["pão", "carne", "bacon", "ovo", "queijo", "presunto", "frango", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 17.5 }, { option: "carne picanha", price: 18.5 }, { option: "carne caseira", price: 19.5 }], promotion: false },
  { id: 15, category: "burguer", itemName: "X Tudo Triplo", itemDescription: ["pão", "carne tradicional", "carne picanha", "carne caseira", "ovo", "bacon", "queijo", "presunto", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "", price: 25 }], promotion: false },
  { id: 16, category: "burguer", itemName: "X Guloso", itemDescription: ["pão", "2 carnes", "2 ovos", "bacon", "calabresa", "queijo", "presunto", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "carne tradicional", price: 20 }, { option: "carne picanha", price: 25 }, { option: "carne caseira", price: 26 }], promotion: false },
  { id: 17, category: "burguer", itemName: "X Vegetariano", itemDescription: ["pão", "2 ovos", "2 queijos", "alface", "tomate", "milho", "batata palha"], itemOptionPrice: [{ option: "", price: 9 }], promotion: false }
];
