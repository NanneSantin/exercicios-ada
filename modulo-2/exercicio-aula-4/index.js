function formatarLista(lista) {
    const arrayLista = lista.trim().split(';');

    const listaDeVendas = [];

    for (const venda of arrayLista) {
        const produto = venda.split('/')[0];
        const valor = Number(venda.slice(venda.indexOf('valor') + 5, venda.indexOf('=')));
        const cupom = Number(venda.slice(venda.indexOf('cupom') + 5));
        let quantidade = 1;

        const indexProduto = listaDeVendas.findIndex((venda) => venda.produto === produto);

        if (indexProduto !== -1) {
            listaDeVendas[indexProduto].quantidade += 1;
        } else {
            listaDeVendas.push({
                produto,
                valor,
                cupom,
                quantidade
            })
        }
    }

    return listaDeVendas;
}

function totalPedido(lista) {
    const listaPedido = formatarLista(lista);
    let valorTotal = 0;
    let valorTotalDesconto = 0;
    let quantidadeDeProdutos = 0;

    for (const item of listaPedido) {
        valorTotal += item.quantidade * item.valor;
        valorTotalDesconto += (valorTotal * (item.cupom / 100)) + valorTotal;
        quantidadeDeProdutos += item.quantidade;
    }

    const totais = {
        valorTotal,
        valorTotalDesconto,
        quantidadeDeProdutos
    }

    return totais
}

const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'
console.log(formatarLista(reciboDeVenda))
console.log(totalPedido(reciboDeVenda))