function criarElementoNavBar() {
    let body = document.querySelector("body");

    body.insertAdjacentHTML('afterbegin', `
    <header>   
    <div class="first">
        
        <div class="logo">
            <a href="../index.html"">
                <img id="logo1" src="/assets/waveorange.png" alt="">
            </a>
        </div>
        <nav class="menupc">
            <ul>
                <li><a href="../index.html">Início</a></li>
                <li><a href="../html/indexservicos.html">Serviços</a></li>
                <li><a href="../html/indexequipe.html">Equipe</a></li>
                <li><a href="../html/indexsobre.html">Sobre</a></li>
                <li><a href="../html/indexajuda.html">Ajuda</a></li>
                <li><a href="../html/indexcontato.html">Contato</a></li>
            </ul>
        </nav>
<div class="botao">
    <a href="#">
        <button>FALE CONOSCO</button>
    </a>
</div>
    </div>
</header>
    `);
}

addEventListener("load", () => {
    criarElementoNavBar()
});