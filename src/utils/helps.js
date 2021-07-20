export const helps = [
  {
    id: "Home",
    title: "Home",
    help: "Utilize os menus laterais para navegar pelo aplicativo. No menu esquerdo é possível acessar a página Veículos e também a seção de funcionários. Já no menu direito é possível visualizar informações de finanças assim como a seção ajuda",
  },
  {
    id: "Vehicles",
    title: "Veículos",
    help: "Confira o número de veículos estacionados em quantidades específicas.",
  },
  {
    id: "Staff",
    title: "Staff",
    help: "Seção com informações dos funcionários do estacionamento. Utilize os botões para trocar o funcionário em destaque.",
  },
  {
    id: "SubmitVehicle",
    title: "Cadastrar Veículos",
    help: "Formulário para cadastro de veículos, todos campos são obrigatórios, preencha os campos devidamente, clique no botão de cadastrar e aguarde o aviso confirmando o cadastro.",
  },
  {
    id: "Shift",
    title: "Turnos",
    help: "Seção com informações dos turnos dos funcionários.",
  },
  {
    id: "Birthdays",
    title: "Aniversários",
    help: "Nessa seção é possível conferir os aniversariantes do mês.",
  },
  {
    id: "Accounts",
    title: "Fechamento do Dia",
    help: "Confira os valores arrecadados nas últimas 24h de",
  },
  {
    id: "SubmitedForm",
    title: "Cadastro Realizado",
    help: "Cadastro realizado com sucesso, clique em voltar para retornar à página inicial ou faça a navegação pelo menu lateral esquerdo.",
  },
  {
    id: "SingleVehicle",
    title: "Veículo Estacionado",
    help: "Aqui é possível conferir informações específicas dos veículos cadastrados",
  },
];

export function getSinglePrice(a, b) {
  const carPrice = 20;
  const carHour = 8;
  const motoPrice = 10;
  const motoHour = 4;
  if (a === "carro" && b == 1) {
    let a = carPrice;
    let b = 0;
    return a + b;
  }
  if (a === "carro" && b > 1) {
    let a = carPrice;
    let c = carHour * b;
    let d = c - carHour;
    return a + d;
  }
  if (a === "moto" && b == 1) {
    let a = motoPrice;
    let b = 0;
    return a + b;
  }
  if (a === "moto" && b > 1) {
    let a = motoPrice;
    let c = motoHour * b;
    let d = c - motoHour;
    return a + d;
  }
}

export function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((uni) => uni[type]);
  return [...new Set(unique)];
};

export const reducerMethod = (accumulator, currentValue) =>
  accumulator + currentValue;

export const paginate = (num) => {
  const itemsPerPage = 6;
  const pages = Math.ceil(num.length / itemsPerPage);

  const newNum = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;

    return num.slice(start, start + itemsPerPage);
  });

  return newNum;
};
