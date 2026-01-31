# 🚲 Bike Rental System – TypeScript OOP

## 📌 Descrição do Projeto

Este projeto consiste no desenvolvimento de um **sistema simples de aluguel de bicicletas**, implementado em **TypeScript**, com o objetivo de aplicar conceitos fundamentais de **Análise de Sistemas** e **Programação Orientada a Objetos (POO)**.

O sistema simula o funcionamento básico de uma loja de aluguel de bikes, contemplando cadastro de bicicletas, clientes, cartões de crédito, ordens de aluguel, devoluções, controle de estoque e manutenção.

---

## 🎯 Objetivo

O principal objetivo deste projeto é:

- Aplicar conceitos de **Programação Orientada a Objetos**
- Modelar entidades e regras de negócio de um sistema real
- Praticar encapsulamento, herança e reutilização de código
- Desenvolver um sistema organizado e de fácil manutenção

---

## 🧩 Funcionalidades Implementadas

✔ Cadastro de bicicletas (elétricas e manuais)  
✔ Aplicação de cupons promocionais  
✔ Controle de status da bike (disponível, alugada, em manutenção)  
✔ Cadastro de clientes  
✔ Associação de cliente a cartão de crédito  
✔ Verificação de saldo para pagamento  
✔ Criação de ordens de aluguel  
✔ Cálculo de preço com e sem promoção  
✔ Emissão de informações da nota fiscal  
✔ Devolução de bicicletas  
✔ Cálculo de multa por atraso  
✔ Controle de estoque em galpão  
✔ Envio e retorno de bicicletas da manutenção  

---

## 🧱 Estrutura do Sistema

O sistema foi dividido em classes para representar as principais entidades do domínio:

### 📌 Classes principais

- `bike` → Representa as bicicletas disponíveis no sistema
- `client` → Representa os clientes
- `cartao` → Superclasse para cadastro de cartão
- `modificarCartao` → Subclasse que permite alteração segura do número do cartão
- `ordemAluguel` → Gerencia o processo de aluguel
- `ordemDevolucao` → Gerencia a devolução e cálculo de multas
- `galpao` → Responsável pelo controle do estoque e manutenção das bikes

---

## 🧠 Conceitos de Programação Utilizados

- Programação Orientada a Objetos (POO)
- Classes e Objetos
- Construtores
- Métodos
- Encapsulamento (`private`, `protected`)
- Herança (`extends`)
- Regras de negócio
- Tipagem estática com TypeScript

---

## 🛠 Tecnologias Utilizadas

- **TypeScript**
- **Node.js** (para execução do código)
- Console para simulação das operações do sistema

---

## ▶️ Como Executar o Projeto

1. Certifique-se de ter o **Node.js** e o **TypeScript** instalados
2. Clone o repositório:
   ```bash
   git clone https://github.com/mairamorenoc/bike-rental-system-typescript-oop.git
3. Compile o arquivo TypeScript:
    ```bash
    tsc bikestore-system.ts
4. Execute o arquivo JavaScript gerado:
   ```bash
   node bikestore-system.js

## 📚 Observações

Este projeto foi desenvolvido exclusivamente para fins educacionais, não tendo como objetivo uso comercial ou em produção.
