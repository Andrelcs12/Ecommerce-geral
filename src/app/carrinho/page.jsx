"use client";

import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import { Bell, ShoppingCart, User2, Trash2, Plus, Minus } from "lucide-react";

const Page = () => {
  
  const [carrinhoArray, setCarrinhoArray] = useState([]);

  console.log(carrinhoArray)

  useEffect(() => {
    const storedCarrinho = JSON.parse(localStorage.getItem("ListaCarrinho")) || [];
    setCarrinhoArray(storedCarrinho);
  }, []);

  const atualizarCarrinho = (novoCarrinho) => {
    setCarrinhoArray(novoCarrinho);
    localStorage.setItem("ListaCarrinho", JSON.stringify(novoCarrinho));
  };

  const removerItem = (index) => {
    const novoCarrinho = carrinhoArray.filter((_, i) => i !== index);
    atualizarCarrinho(novoCarrinho);
  };

  const alterarQuantidade = (index, delta) => {
    const novoCarrinho = carrinhoArray.map((item, i) => {
      if (i === index) {
        const novaQuantidade = Math.max(1, (item.quantidade || 1) + delta);
        return { ...item, quantidade: novaQuantidade };
      }
      return item;
    });
    atualizarCarrinho(novoCarrinho);
  };

  

  
  const precoReal = carrinhoArray.map((item) => parseFloat(item.preco.replace("R$ ", "").replace(".", "").replace(",", ".")));

const subtotal = carrinhoArray.map((item, index) => precoReal[index] * item.quantidade);


const total = subtotal.reduce((acc, item) => acc + item, 0);


const totalFormatado = total.toFixed(2);


  const desconto = totalFormatado * 0.2;
  const frete = totalFormatado * 0.01;
  const totalItens = carrinhoArray.reduce((total, item) => total + (item.quantidade || 1), 0);

  const totalFinal = totalFormatado - desconto + frete;
  const apagar = () => {
    localStorage.clear();
    setCarrinhoArray([]);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="p-2 xl:px-20 lg:px-20 bg-white shadow-md">

        <div className="flex px-2 h-16 justify-between items-center bg-black text-white shadow-md rounded-md">
          <Link href='/'  className="font-bold text-2xl hover:bg-slate-50 hover:text-black p-2 rounded-md lg:text-3xl">GROUP</Link>
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="relative">
              <Bell className="w-8 h-8 cursor-pointer hover:bg-white hover:text-black rounded-full p-1" />
              <div className="bg-red-600 rounded-full w-2.5 h-2.5 absolute top-0 right-0 "></div>
            </div>
            <Link href="/"><ShoppingCart className="w-8 h-8 cursor-pointer hover:bg-white hover:text-black rounded-full p-1" /></Link>
            <User2 className="w-8 h-8 cursor-pointer hover:bg-white hover:text-black rounded-full p-1" />
          </div>
        </div>
      </div>

      <div className=" xl:mx-20  lg:p-4 ">
        
      <div className="lg:flex  lg:justify-between gap-6 lg:gap-1 mx-4 sm:mx-0">
        
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
  {carrinhoArray.length > 0 ? (
    carrinhoArray.map((item, index) => (
      <div 
        key={index} 
        className="flex gap-4 mt-4 sm:px-1 p-2 border rounded-lg shadow-sm items-center"
      >
        
        <Image 
          src={item.imagem} 
          alt={`Imagem do produto ${item.nome}`} 
          height={100} 
          width={100} 
          className="object-cover rounded-lg "
        />
        
        <div className="flex  justify-between sm:flex-row flex-col w-full gap-1 sm:gap-6  ">
          <h1 className="font-bold text-md sm:text-md md:text-lg lg:text-xl sm:w-12 md:w-20">{item.nome}</h1>
          
          

          
          <div className="text-black flex sm:flex-col gap-2 ">
              <h1 className="text-md:text-md font-bold ">Cor:</h1>
              <div className={`w-6 h-6 rounded-full border-2 ${item.corEscolhida}`}></div>
            </div>
          

          
          
        

          <div className="text-black flex sm:flex-col gap-2 ">
            <h2 className="text-md sm:text-md font-bold">Tamanho:</h2>
            <h1 className="text-sm sm:text-md font-semibold">{item.tamanhoEscolhido}</h1>
          </div>
          
          <div className="sm:w-24  sm:flex-col flex w-full items-center ">
            <h2 className="text-md sm:text-md font-bold">Preço:</h2>
            <h1 className="font-semibold text-md sm:text-lg">{item.preco}</h1>
          </div>
          
          <div className="flex flex-col sm:items-start gap-2">
            <h1 className="text-md sm:text-md font-bold">Quantidade</h1>
            <div className="flex gap-2 items-center">
              <button 
                onClick={() => alterarQuantidade(index, -1)} 
                className="text-black cursor-pointer bg-slate-200 hover:bg-slate-600 hover:text-white p-2 rounded-md"
              >
                <Minus className="w-4 h-4" />
              </button>
              <h2 className="text-sm sm:text-md md:text-lg text-gray-600">{item.quantidade || 1}</h2>
              <button 
                onClick={() => alterarQuantidade(index, 1)} 
                className="p-2 rounded-md cursor-pointer bg-slate-200 hover:bg-slate-600 hover:text-white"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => removerItem(index)} 
            className="text-red-600 sm:block hidden my-auto   hover:text-red-800"
          >
            <Trash2 className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-150" />
          </button>
        </div>
        <button 
            onClick={() => removerItem(index)} 
            className="text-red-600 sm:hidden block my-auto  hover:text-red-800"
          >
            <Trash2 className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-150" />
          </button>
      </div>
    ))
  ) : (
    <p className="mt-4 text-gray-500 text-center text-sm sm:text-md md:text-lg">Seu carrinho está vazio.</p>
  )}
</div>


          <div className="flex flex-col gap-4 mt-6 lg:mt-0  p-6 rounded-lg shadow-md lg:w-96 border-2">
            <h1 className="text-xl font-semibold">Resumo do Pedido:</h1>
            <div className="space-y-2">
              <div className="flex justify-between text-md font-medium">
                <h2>Itens no carrinho</h2>
                <h1>{totalItens}</h1>
              </div>
              <div className="flex justify-between text-md font-medium">
                <h2>Subtotal</h2>
                <h1>R$ {totalFormatado}</h1>
              </div>
              <div className="flex justify-between text-md font-medium ">
                <h2>Desconto (-20%)</h2>
                <h1 className="text-red-500">- R${desconto.toFixed(2)}</h1>
              </div>
              <div className="flex justify-between text-md font-medium">
                <h2>Frete</h2>
                <h1>R$ {frete.toFixed(2)}</h1>
              </div>
            </div>

            <div className="flex justify-between text-lg font-semibold mt-4">
              <h2>Total</h2>
              <h1>R$ {totalFinal.toFixed(2)}</h1>
            </div>

            <button className="bg-green-600 hover:bg-green-500 text-white font-bold  w-full cursor-pointer py-3 rounded-md mt-6 lg:mt-10">
              Ir para o Checkout
            </button>
            
            <button onClick={apagar} className="bg-red-500 hover:bg-red-400 font-bold text-white w-full cursor-pointer py-3 rounded-md mt-2">
              Limpar Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;