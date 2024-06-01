function criarElementoFooter() 
    let body = document.querySelector("body");
//Corrigir problema do link das imagens
    body.insertAdjacentHTML'beforeend', `
        <footer>
            <div class="rodape">
                <div class="logorodape">
                    <a href="">
                        <img src="../assets/waveblack.png" alt="">
                    </a>
                </div>

                <div class="navega">
                    <ul>
                        <li><a href="/store/html/index.html">Início</a></li>
                        <li><a href="/store/html/indexservicos.html">Serviços</a></li>
                        <li><a href="/store/html/indexequipe.html">Equipe</a></li>
                    </ul>

                    <ul>
                        <li><a href="/store/html/indexsobre.html">Sobre</a></li>
                        <li><a href="/store/html/indexajuda.html">Ajuda</a></li>
                        <li><a href="/store/html/indexcontato.html">Contato</a></li>
                    </ul>
                </div>

                <div class="more">
                    <h1>Quer saber mais sobre contabilidade e manter seu negócio ainda mais estável?<br> Assine nossa newsletter!</h1>
                    <input placeholder="   Insira seu e-mail:" type="text">
                    <button type="submit">INSCREVER-SE</button>
                </div>
            </div>

            <div class="crafted"></div>
        </footer>
    `;


addEventListener("load", () => {
    criarElementoFooter()
});