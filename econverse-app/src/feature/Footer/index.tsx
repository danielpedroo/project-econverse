import "./styles/footer-newsletter.sass";
import "./styles/footer.sass";

export default function Footer() {
    return (
        <>
            <section className="footer-newsletter">
                <div className="footer-newsletter__content">
                    <div className="footer-newsletter__text">
                        <h2>Inscreva-se na nossa newsletter</h2>
                        <p>
                            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
                        </p>
                    </div>

                    <form className="footer-newsletter__form">
                        <div className="footer-newsletter__form__inputs">
                            <input type="text" placeholder="Digite seu nome" />
                            <input type="email" placeholder="Digite seu e-mail" />
                            <button type="submit">Inscrever</button>
                        </div>

                        <label className="footer-newsletter__checkbox">
                            <div className="footer-newsletter__checkbox__wrapper">
                                <input type="checkbox" />
                                <span>Aceito os termos e condições</span>
                            </div>
                        </label>
                    </form>
                </div>
            </section>

            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__brand">
                        <img src="../../../public/econverse-logo-header.svg" alt="Logo Econverse" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="footer__social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="../../../public/instagram-footer.svg" alt="Instagram" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="../../../public/facebook-footer.svg" alt="Facebook" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="../../../public/linkedin-footer.svg" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <div className="footer__separator-wrapper">
                        <hr className="footer__separator" />
                    </div>

                    <div className="footer__links">
                        <div className="footer__column">
                            <h3>Institucional</h3>
                            <ul>
                                <li><a href="/sobre-nos">Sobre Nós</a></li>
                                <li><a href="/movimento">Movimento</a></li>
                                <li><a href="/trabalhe-conosco">Trabalhe conosco</a></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h3>Ajuda</h3>
                            <ul>
                                <li><a href="/suporte">Suporte</a></li>
                                <li><a href="/fale-conosco">Fale Conosco</a></li>
                                <li><a href="/perguntas-frequentes">Perguntas Frequentes</a></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h3>Termos</h3>
                            <ul>
                                <li><a href="/termos-e-condicoes">Termos e Condições</a></li>
                                <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
                                <li><a href="/troca-e-devolucao">Troca e Devolução</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer__bottom">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </>
    );
}
