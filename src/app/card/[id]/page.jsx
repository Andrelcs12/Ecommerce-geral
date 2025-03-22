"use client"
import { useState, useEffect } from 'react'
import { use } from 'react'
import Link from 'next/link';


import  { ChevronRight, ClipboardList, EthernetPort, ChevronLeft, ArrowUpRight  } from 'lucide-react'
import Image from 'next/image'

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



export default function Card({params}) {
    
    const { id } = use(params)
    const idNumerico = Number(id);
    const item = dados.find((item) => item.id === idNumerico);

    const [carrinho, setCarrinho] = useState(() => {
      const carrinhoSalvo = localStorage.getItem("ListaCarrinho");
      return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    });
    
    useEffect(() => {
      localStorage.setItem("ListaCarrinho", JSON.stringify(carrinho));
    }, [carrinho]);
    
    const handleAddToCart = () => {
      if (!corEscolhida || !tamanhoEscolhido) {
        alert("Por favor, selecione uma cor e um tamanho antes de continuar!");
      } 
    
    
      const novoItem = {
        nome: item.nome, 
        imagem: item.imagem,
        corEscolhida: corEscolhida,
        tamanhoEscolhido: tamanhoEscolhido,
        preco: item.preco, 
        quantidade: 1, 
      };
    

      const itemExistente = carrinho.find(
        (item) =>
          item.nome === novoItem.nome &&
          item.corEscolhida === novoItem.corEscolhida &&
          item.tamanhoEscolhido === novoItem.tamanhoEscolhido
      );
    
      if (itemExistente) {
        
        const novoCarrinho = carrinho.map((item) =>
          item.nome === novoItem.nome &&
          item.corEscolhida === novoItem.corEscolhida &&
          item.tamanhoEscolhida === novoItem.tamanhoEscolhido
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
        setCarrinho(novoCarrinho);
      } else {
        
        setCarrinho([...carrinho, novoItem]);
      }
    };
    

    const converterPreco = (precoString) => {
      return Number(precoString.replace("R$ ", "").replace(".", "").replace(",", "."));
  };
  
  const porcentagem = (precoString) => {
      const preco = converterPreco(precoString);
      return `${(preco * 0.8).toFixed(2)}`;
  };
  

  const [footer, setFooter] = useState();

const toggleFooter = (section) => {
  setFooter(footer === section ? null : section);
};

const [corEscolhida, setCorEscolhida] = useState("");
const [tamanhoEscolhido, setTamanhoEscolhido] = useState("")
const cores = [
  { cor: "bg-red-600" },
  { cor: "bg-white border-2" },
  { cor: "bg-black" },
  { cor: "bg-blue-600" },
  { cor: "bg-green-600" },
  { cor: "bg-purple-600" },
];

const tamanhos = ["P", "M", "G"];

  return (
    <div  className='mx-4 mt-7'>

      <div className='flex '>  
      <Link href="/">
          <ChevronLeft className='cursor-pointer hover:bg-slate-300' />
      </Link>  
      </div>


      <div className='lg:flex gap-20 lg:mx-20 xl:mx-40  lg:justify-between xl:justify-around'>

        
      <div className='lg:hidden'>
      <Image 
      className='mx-auto'
      src={item.imagem} 
      alt="foto icone"
      height={300}
      width={320}
      priority={true}>
      </Image>
      </div>


      <div className='hidden lg:grid lg:grid-cols-2 lg:gap-2'>
      <Image 
      className='border-2 border-black rounded-2xl p-2'
      src={item.imagem} 
      alt="foto icone"
      height={300}
      width={320}
      priority={true}>
      </Image>
      <Image
      className='border-2 border-black rounded-2xl p-2' 
      src={item.imagem} 
      alt="foto icone"
      height={300}
      width={320}
      priority={true}>
      </Image>
      <Image
      className='border-2 border-black rounded-2xl p-2' 
      src={item.imagem} 
      alt="foto icone"
      height={300}
      width={320}
      priority={true}>
      </Image>
      <Image
      className='border-2 border-black rounded-2xl p-2' 
      src={item.imagem} 
      alt="foto icone"
      height={300}
      width={320}
      priority={true}>
      </Image>

      </div>

      <div className='mt-8 md:mt-0 lg:w-[500px]'>
    <h1 className="font-bold text-2xl lg:text-5xl">{item.nome}</h1>
    <h3 className="font-medium lg:text-2xl">⭐ {item.avaliacao}</h3>

    <div className="mt-4">
      <del className="text-xl text-gray-500">De: R$ {item.preco}</del>
      <h1 className="font-bold text-3xl text-red-600">R$ {porcentagem(item.preco)} no Pix</h1>
    </div>

    <div className="mt-4">
      <h1 className="font-semibold">Cor do produto</h1>
      <div className="flex gap-3 mt-2">
        {cores.map(({ cor }, index) => (
          <div onClick={() => setCorEscolhida(cor)} key={index} className={`${cor} p-3 w-8 h-8 rounded-full cursor-pointer border  ${corEscolhida === cor ? "border-4 border-gray-800" : "border-gray-300"}`   
          }></div>
        ))}
      </div>
    </div>

    <div className="mt-4">
      <h1 className="font-semibold">Tamanho do produto</h1>
      <div className="flex gap-4 mt-2">
        {tamanhos.map((tamanho, index) => (
          <div
          onClick={() => setTamanhoEscolhido(tamanho)}
            key={index}
            className={`border-2 p-2 w-10 h-10 flex items-center justify-center cursor-pointer rounded-md hover:bg-slate-300 
              ${tamanhoEscolhido === tamanho ? "border-4 border-blue-700" : ""}`}
          >
            <h1>{tamanho}</h1>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-8 flex flex-col gap-4">
      
      <Link 
        href='/carrinho' 
        className="w-full text-center hover:opacity-70 cursor-pointer py-3 font-bold text-xl rounded-md bg-red-600 text-white hover:bg-red-700 transition"
      >
        Comprar
      </Link>

      
      <Link 
        href = '/carrinho'
        onClick={handleAddToCart} 
        className="text-center py-3 rounded-md border-2 cursor-pointer text-red-600 font-bold border-red-700 hover:bg-red-100 transition"
      >
        Adicionar ao carrinho
      </Link>
    </div>


      
      
      <div className='mt-4'>
        <h1 className='font-bold'>Calcular frete</h1>
        <div className='flex justify-between border-2 p-2 rounded-md'>
          <input type='text' placeholder='Digite o CEP' className='outline-none p-2 flex-1' />
          <button className='px-4 py-2 rounded-md hover:opacity-70 cursor-pointer bg-red-600 text-white font-bold'>Calcular</button>
        </div>
        <h1 className="flex justify-end">
          <span className="text-red-500 border-b-2 hover:opacity-65 border-red-500 cursor-pointer inline-block">
            Não sei meu CEP
          </span>
        </h1>

      </div>

      </div>

      </div>
      
      

    <div className='lg:mx-40'>
      <div className="mt-8 space-y-4">
      <div className="flex justify-between items-center p-2 border-b-2 hover:bg-slate-200 cursor-pointer">
        <div className="flex items-center gap-2 ">
          <ClipboardList size={25} />
          <div>
            <h1 className="font-bold">Informações do produto</h1>
            <h3 className="text-sm text-gray-600">Veja todos os detalhes sobre o produto</h3>
          </div>
        </div>
        <ChevronRight size={20} />
      </div>
      
      <div className="flex justify-between items-center p-2 border-b-2 hover:bg-slate-200 cursor-pointer">
        <div className="flex items-center gap-2">
          <EthernetPort size={25} />
          <div>
            <h1 className="font-bold">Compartilhe por WhatsApp</h1>
            <h3 className="text-sm text-gray-600">Compartilhe para quem confia</h3>
          </div>
        </div>
        <ChevronRight size={20} />
      </div>
      
      <div className="flex justify-between items-center p-2 border-b-2 hover:bg-slate-200 cursor-pointer">
        <div className="flex items-center gap-2">
        <ArrowUpRight size={25}/>
          <div>
            <h1 className="font-bold">Mais vendidos</h1>
            <h3 className="text-sm text-gray-600">Confira o ranking com os campeões de venda</h3>
          </div>
        </div>
      </div>
    </div>
      
      <div className='p-4 border rounded-lg mt-8 lg:flex lg:justify-around gap-8 '>

        <div className='lg:flex-col  lg:my-auto lg:w-80'>
        <h1 className='text-xl font-bold lg:text-3xl'>Receba ofertas e descontos exclusivos</h1>
        <h4 className='text-md lg:text-xl text-gray-500'>Cadastre-se na nossa newsletter!</h4>

        </div>
        
        <div className='lg:flex lg:flex-col'>

        <div className='mt-4'>
          <input type='text' placeholder='Nome' className='w-full p-2 border rounded-md' />
        </div>
        <div className='mt-4'>
          <input type='email' placeholder='E-mail' className='w-full p-2 border rounded-md' />
        </div>
        


        

        <p className='mt-2 text-xl'>Prefere receber ofertas de produtos:</p>
        <div className='flex gap-4 mt-2'>
          <label className='flex items-center gap-2 font-medium text-xl'>
            <input type='radio' name='genero' value='masculino'className='w-full' /> Masculino
          </label>
          <label className='flex items-center gap-2 font-medium text-xl'>
            <input type='radio' name='genero' value='feminino' /> Feminino
          </label>
        </div>

        </div>



        <div className='lg:flex lg:flex-col lg:items-center lg:my-auto'>

        <button className='mt-4 w-full cursor-pointer  hover:opacity-60
         bg-red-800 text-white text-xl font-bold py-2 rounded-md lg:w-full lg:py-4'>Aceitar e Cadastrar</button>
        <p className='mt-2 text-sm text-gray-500 lg:text-1xl'>
          Ao concluir, você aceitará nossos <strong>termos de uso e política de privacidade</strong>
        </p>
        </div>
        
      </div>

      
      <div className="mt-8">
    {[
      { id: "ajuda", title: "Ajuda e entendimento", content: "Página de ajuda" },
      { id: "politicas", title: "Políticas e regulamentos", content: "Página de políticas" },
      { id: "servicos", title: "Serviços GROUP", content: "Página de serviços" },
      { id: "institucional", title: "Institucional", content: "Página Institucional" },
    ].map(({ id, title, content }) => (
      <div key={id}>
        <div
          onClick={() => toggleFooter(id)}
          className="cursor-pointer p-2 border-b flex justify-between hover:bg-slate-200"
        >
          <h1 className="font-bold">{title}</h1>
          <ChevronRight />
        </div>
        {footer === id && (
          <div className="bg-red-500 text-white p-4 rounded-mds">
            <h1>{content}</h1>
          </div>
        )}
      </div>
    ))}
         </div>
        
      <footer className='my-4 text-center text-gray-600 text-sm'>
        <h1>Todos os direitos reservados para @AndreLucas</h1>
      </footer>
    </div>
    </div>
    

    
  )
}


