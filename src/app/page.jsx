"use client"
import { Bell, User2Icon, Search, Shirt, Watch, Smartphone, Headphones, LayoutGrid, ShoppingCart, Fullscreen, InstagramIcon, Facebook } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {

  const [categoria, setCategoria] = useState('');

  const dados = [
    { id: 1, nome: "Iphone 15", categoria: "celular", avaliacao: 4.7, preco: "R$ 2.999,99", imagem: "/celular1.png" },
    { id: 2, nome: "Iphone 15 Pro Max", categoria: "celular", avaliacao: 4.3, preco: "R$ 1.499,99", imagem: "/celular4.png" },
    { id: 3, nome: "Iphone 15 Pro Max ", categoria: "celular", avaliacao: 4.7, preco: "R$ 2.999,99", imagem: "/celular2.png" },
    { id: 4, nome: "Iphone", categoria: "celular", avaliacao: 4.3, preco: "R$ 1.499,99", imagem: "/celular2.png" },
    { id: 5, nome: "Camisa Polo", categoria: "camisas", avaliacao: 4.8, preco: "R$ 89,99", imagem: "/casaco1.png" },
    { id: 6, nome: "Camisa Casual", categoria: "camisas", avaliacao: 4.6, preco: "R$ 79,99", imagem: "/casaco2.png" },
    { id: 7, nome: "Camisa Polo", categoria: "camisas", avaliacao: 4.8, preco: "R$ 89,99", imagem: "/casaco3.png" },
    { id: 8, nome: "Camisa Casual", categoria: "camisas", avaliacao: 4.6, preco: "R$ 79,99", imagem: "/casaco4.png" },
    { id: 9, nome: "Relógio de Metal", categoria: "relogio", avaliacao: 4.5, preco: "R$ 299,99", imagem: "/relogio1.png" },
    { id: 10, nome: "Relógio Esportivo", categoria: "relogio", avaliacao: 4.2, preco: "R$ 199,99", imagem: "/relogio2.png" },
    { id: 11, nome: "Relógio de Metal", categoria: "relogio", avaliacao: 4.5, preco: "R$ 299,99", imagem: "/relogio3.png" },
    { id: 12, nome: "Relógio Esportivo", categoria: "relogio", avaliacao: 4.2, preco: "R$ 199,99", imagem: "/relogio4.png" },
    { id: 13, nome: "Fone Bluetooth", categoria: "fone", avaliacao: 4.9, preco: "R$ 199,99", imagem: "/fone1.png" },
    { id: 14, nome: "Headset Gamer", categoria: "fone", avaliacao: 4.7, preco: "R$ 349,99", imagem: "/fone2.png" },
    { id: 15, nome: "Fone Bluetooth", categoria: "fone", avaliacao: 4.9, preco: "R$ 199,99", imagem: "/fone3.png" },
    { id: 16, nome: "Headset Gamer", categoria: "fone", avaliacao: 4.7, preco: "R$ 349,99", imagem: "/fone4.png" },
  ];

  const produtosFiltrados = categoria ? dados.filter(item => item.categoria === categoria) : dados;

  
  return (
    <div className='overflow-hidden'>
    <div className="p-2 lg:px-2 lg:mx-20  bg-white">
    
    <div className=" flex px-2 h-12 justify-between items-center bg-black text-white  shadow-md rounded-md">
      <h1 className="font-bold text-3xl">GROUP</h1>
      <div className="flex items-center gap-6">
  <div className="relative">
    <Bell className="w-8 h-8 cursor-pointer hover:bg-white hover:text-black rounded-full p-1" />
    <div className="bg-red-600 rounded-full p-1 absolute top-0 right-0"></div>
  </div>
  <Link href="/carrinho">
  <ShoppingCart className="w-8 h-8 hover:bg-white hover:text-black rounded-full p-1" /></Link>
  
  <User2Icon className="w-8 h-8 cursor-pointer hover:bg-white hover:text-black rounded-full p-1" />
</div>

    </div>


    
    
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-4  p-6 lg:p-10 rounded-xl shadow-xl">
  <div className="max-w-lg  text-center lg:text-left text-black">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
      Os <span className="text-blue-500">melhores produtos</span> para você!
    </h1>
    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6">
      Só na <span className="text-blue-500">GROUP</span> você encontra qualidade e inovação.
    </p>
    <p className="mt-4 sm:mt-6 text-base sm:text-lg  text-black">
      Descubra ofertas exclusivas e produtos que vão transformar sua experiência.
    </p>
    <button className="mt-6 sm:mt-8 px-6 py-3 bg-black text-white font-bold text-lg rounded-lg hover:bg-yellow-500 transition">
      Ver Ofertas
    </button>

  </div>
  <div className="mt-8 lg:mt-0">
    <Image 
      src="/marketing.png" 
      alt="Marketing" 
      height={450} 
      width={600} 
      className="rounded-lg shadow-lg h-[300px] lg:h-[500px] lg:w-[700px] md:hidden lg:flex"
    />
  </div>
</div>


<div className="flex items-center gap-2 border-2 rounded-md p-2 mt-4 max-w-md mx-auto lg:max-w-full">
  <Search className="text-gray-500" />
  <input type="text" placeholder="Buscar..." className="w-full outline-none text-lg p-2" />
</div>


    <div className="mt-6">
      <h1 className="text-lg font-bold">Categorias</h1>
      <div className="overflow-x-auto flex gap-4 mt-4">
        <button
          className="bg-gray-200 p-4 lg:p-8 rounded-md cursor-pointer hover:bg-slate-300 transition-all duration-200"
          onClick={() => setCategoria("")}
        >
          <LayoutGrid className="w-8 h-8 text-blue-600" />
        </button>
        <button
          className="bg-gray-200 p-4 lg:p-8 lg:text-3xl]  rounded-md cursor-pointer hover:bg-slate-300 transition-all duration-200"
          onClick={() => setCategoria("relogio")}
        >
          <Watch className="w-8 h-8 text-blue-600" />
        </button>
        <button
          className="bg-gray-200 p-4 lg:p-8 rounded-md cursor-pointer hover:bg-slate-300 transition-all duration-200"
          onClick={() => setCategoria("camisas")}
        >
          <Shirt className="w-8 h-8 text-blue-600" />
        </button>
        <button
          className="bg-gray-200 p-4 lg:p-8 rounded-md cursor-pointer hover:bg-slate-300 transition-all duration-200"
          onClick={() => setCategoria("celular")}
        >
          <Smartphone className="w-8 h-8 text-blue-600" />
        </button>
        <button
          className="bg-gray-200 p-4 lg:p-8 rounded-md cursor-pointer hover:bg-slate-300 transition-all duration-200"
          onClick={() => setCategoria("fone")}
        >
          <Headphones className="w-8 h-8 text-blue-600" />
        </button>
      </div>
    </div>

    <div className="mt-6">
      <h1 className="text-lg font-bold">Produtos</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {produtosFiltrados.map((item) => (
          <Link href={`/card/${item.id}`} key={item.id} className="bg-white shadow-md rounded-lg p-2">
            <Image 
  src={item.imagem} 
  alt={item.nome} 
  width={300} 
  height={200} 
  className="mx-auto w-full lg:max-w-[179px] max-w-[179px] h-[240px] object-cover rounded-lg"
/>

            <div className='mt-4'>
              <h2 className="text-md lg:text-2xl font-bold mt-2">{item.nome}</h2>
              <div className='flex justify-between mt-1'>
                <p className='text-gray-500 font-bold text-md lg:text-xl'>{item.preco}</p>
                <p className="text-gray-500 font-semibold  text-md lg:text-xl">⭐ {item.avaliacao}</p>           
              </div>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>

  <footer className="bg-black text-white py-10 mt-8">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-20">
     
      <div>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4">Sobre a GROUP</h3>
        <p className="text-sm lg:text-lg">
          A GROUP oferece os melhores produtos de tecnologia, moda e muito mais, sempre com qualidade e inovação.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-500 transition-colors duration-200 text-lg">Home</a></li>
          <li><a href="#" className="hover:text-blue-500 transition-colors duration-200 text-lg">Sobre nós</a></li>
          <li><a href="#" className="hover:text-blue-500 transition-colors duration-200 text-lg">Ofertas</a></li>
          <li><a href="#" className="hover:text-blue-500 transition-colors duration-200 text-lg">Contato</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Categorias</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-500 transition-colors duration-200 text-lg">Celulares</a></li>
          <li><a href="#" className="hover:text-blue-500 transition-colors duration-200 text-lg">Roupas</a></li>
          <li><a href="#" className="hover:text-blue-500 transition-colors duration-200 text-lg">Relógios</a></li>
          <li><a href="#" className="hover:text-blue-500 transition-colors duration-200 text-lg">Fones</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
        <div className="flex md:justify-start space-x-4">
          <a href="#" className="text-white hover:text-blue-500 transition-colors duration-200">
            <InstagramIcon size={30} />
          </a>
          <a href="#" className="text-white hover:text-blue-500 transition-colors duration-200">
            <Facebook size={30} />
          </a>
        </div>
      </div>
    </div>

    <div className="mt-10 border-t border-gray-700 pt-6 text-center w-full">
      <p className="text-sm">&copy; 2025 GROUP. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>

  </div>
  );
}
