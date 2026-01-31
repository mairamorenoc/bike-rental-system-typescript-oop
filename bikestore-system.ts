//CLASSES
// 1 Classe para criar novas bikes no sistema
class bike {
    codigo: string;
    tipo: string;
    status:string;
    preco: number;
    promo: boolean;

    constructor(codigo:string,tipo:string) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.status = "disponível" // novas bikes estão disponíveis by default!
        this.preco = 1;
        this.promo = false; // promoções são ocasionais!
    }

    // método da classe bike para aplicar cupons de desconto
    aplicarCupom(): void {
        this.promo = true;
    }

};

// 2 Classe para alugar bikes
class ordemAluguel {
    cliente: client;
    bike: bike;
    dataInicio: string; // usar === para comparar os valores. Ex.: let dates = "23.08.2025" === "28.08.2025"
    dataFim: string;
    duracao: number; // no. horas, dias, etc.
    status: string;

    constructor(cliente:client, bike:bike, dataInicio:string, dataFim:string, duracao:number) {
        this.cliente = cliente;
        this.bike = bike;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.duracao = duracao;
        this.status = "aberto"; // novas ordens de aluguel estão abertas até ser pagas!
    }

    // método para calcular preço da bike;
    calcularPreco(): number {
         if (this.bike.promo) {
            let actualPrice = (this.bike.preco * this.duracao) - 0.5
            return actualPrice;
         } else {
            let actualPrice = (this.bike.preco * this.duracao)
            return actualPrice;
         }

    }

    // método para cobrar e alugar uma bike
    alugarBike(): void {
        if (this.bike.status === "disponível") { // verifica status da bike
            this.bike.preco = this.calcularPreco(); // calcula preco real da bike
        }
        if (this.cliente.cartao.saldo) { // verifica saldo do cartao
            this.status = "fechado"; // se saldo.cartao TRUE, ordem fechada
            this.bike.status = "alugado"; // se saldo.cartao TRUE, bike alugada
            console.log("Pagamento realizado!"); // sucess msg
            const nfDate = new Date(); // testar
            console.log(`Nota Fiscal No. :\n`, `Data: `,nfDate, `Cliente: ${this.cliente.nome}, Produto: ${this.bike.codigo}, Total: ${this.bike.preco}`); //print nf
        } else {
            console.log("Pagamento recusado por saldo insuficiente."); // se saldo.cartao FALSE, error
        } 

    }
   
};

// 3 SUPERCLASSE para cadastrar cartão de crétido
class cartao { 
    protected numero: number; // o número do cartão precisa de senha para ser modificado!
    saldo: boolean; // preciso verificar se ha saldo para cobrar

    constructor(numero:number, saldo:boolean) {
        this.numero = numero;
        this.saldo = saldo;
    }
}

// 4 SUBCLASSE do cartao que permite modificar o número do cartao cadastrado
class modificarCartao extends cartao { // 'extends' indica que é subclasse!
    private senha: string; // propiedade PRIVADA da subclasse → código NÃO TEM ACESSO a senha!

    // No construtor de uma subclasse, precisso colocar como argumentos tanto as PROPIEDADES da SUPERCLASSE
    //como as PROPIEDADES NOVAS da SUBCLASSE
    constructor(numero:number, saldo:boolean, senha:string) {
        super(numero, saldo); // 'super' é OBRIGATÓRIO → "deixa" modificar as propiedades da superclasse 
        this.senha = senha;
    }
    
    // método opcional para mostrar o número do cartao cadastrado → útil para verificar mudanças feitas!
    showCardNumber() {
        console.log(`Novo número de cartão: ${this.numero}`); // 'numero' é o novo número cadastrado
    }
}

// 5 Classe para cadastrar clientes
class client {
    nome: string;
    endereco: string;
    telefone: number;
    cpf: number;
    cartao: cartao;

    constructor(nome:string, endereco:string, telefone:number, cpf:number, cartao:cartao) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.cpf = cpf;
        this.cartao = cartao;
    }

};

// 6 Classe para devolver bikes
class ordemDevolucao {
    dadosAluguel: ordemAluguel;
    dataDevolucao: string;
    status: string;

    constructor(dadosAluguel:ordemAluguel, dataDevolucao:string) {
        this.dadosAluguel = dadosAluguel;
        this.dataDevolucao = dataDevolucao;
        this.status = "aberto";
    }

    // método para calcular multa;
    devolverBike(): void {
         if (this.dadosAluguel.dataFim != this.dataDevolucao) {
            let multaPrice = this.dadosAluguel.duracao * 0.7;
            console.log(`Valor da multa: `, multaPrice, `R$`);
         } else {
            console.log("Sem multas a pagar.");
            this.status = "fechado"; // se saldo.cartao TRUE, ordem fechada
            this.dadosAluguel.bike.status = "disponível"; // se saldo.cartao TRUE, bike devolvida e disponível
         }

    }
                 

};

// 7 Classe para armazenar bikes num galpão
class galpao {
    numero: number;
    bikes: Array<bike>

    constructor(numero:number,bikes:Array<bike>) {
        this.numero = numero;
        this.bikes = bikes;
    }

    // método para consultar stock de bikes
    listarBikes(): void {
        this.bikes.forEach((bikeItem => {
            console.log(`Bike: ${bikeItem.codigo}, Tipo de bike: ${bikeItem.tipo}, Disponibilidade: ${bikeItem.status}, Promoção: ${bikeItem.promo}`)
        }));

    }

    // método para enviar bike para manutenção
    enviarPManutencao(sendIndex:number): void {
        if (this.bikes[sendIndex].status === "disponível") {
            this.bikes[sendIndex].status = "em manutenção";
        } else {
            console.log("A bike não está disponível no galpão para envio a manutenção");
        }
        
    }

    // método para liberar bike de manutenção
    retornarDManutencao(returnIndex:number): void {
        if (this.bikes[returnIndex].status === "em manutenção") {
            this.bikes[returnIndex].status = "disponível";
        } else {
            console.log("A bike não se encontra em manutenção no momento.");
        }

    }

};

// VARIAVÉIS
// cirando as bikes da loja
const bike1 = new bike("bx001", "electric");
const bike2 = new bike("bx002", "electric");
const bike3 = new bike("bx003", "electric");
const bike4 = new bike("b001", "manual");
const bike5 = new bike("b002", "manual");

// criando o array de bikes para usá-lo com as classes
const storeBikes = [bike1, bike2, bike3, bike4, bike5];

// Criando o galpao
const galpao1 = new galpao(1, storeBikes);

// criando cartao usuario
const creditCard1 = new cartao(1234, true);

// criando cliente
const user1 = new client("Maira", "Rua ABCDX, 1234", 567890, 892345678, creditCard1);

// criando novo número de cartao
const newCardNumb = new modificarCartao(469603, true, "Mm0923");

//TESTANDO MÉTODOS
// testando método bike
bike1.aplicarCupom();
console.log(bike1.promo);

// testando método para mostrar cartao
newCardNumb.showCardNumber();

// testando método para listar bikes
galpao1.listarBikes();

// testando enviar bikes para manutenção
galpao1.enviarPManutencao(2);
console.log(galpao1.bikes[2]);
galpao1.listarBikes();