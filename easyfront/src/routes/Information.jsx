import logo from "../assets/Icon.webp"
import thinkingman from "../assets/thinkingMan.webp";
import ejemplo from "../assets/Plantilla_web_3.webp";

export default function Information() {
    return (
        <article className="container text-center">
            <section className="row mt-3 mb-3 align-items-center bg-blue">
                <img className="img-fluid col-2" src={logo} alt="" width="50" height="50" />
                <h1 className="col-8">EasyFront</h1>
                <img className="img-fluid col-2" src={logo} alt="" width="50" height="50"/>
            </section>

            <section className="row align-items-center">
                <h2 className="col-12"> Solución rápida y sencilla</h2>
                <section className="col-12 col-sm-8">
                    <p>¿Tiene un negocio y necesita una página web? </p>
                    <p> ¿No tiene ni idea de programar?</p>
                    <p>¡Con nuestra aplicación esta a unos pocos clics de conseguirlo!</p>
                </section>
                <section className="col-12 col-sm-4 text-center">
                    <img className="img-fluid" src={thinkingman} alt="" width="600" height="600"/>
                </section>

            </section>
            <section className="row align-items-center">
                <h2 className="col-12">Tecnología única</h2>
                <section className="col-4 text-center d-none d-sm-block">
                    <img className="img-fluid" src={ejemplo} alt="" width="500" height="500"/>
                </section>
                <section className="col-12 col-sm-8">
                    <p>
                        Gracias a nuestra tecnología <i>Plug&Display</i> usted solo tiene que elegir entre nuestro catálogo de diseños un estilo, una fuente y un color y nuestro software hará el resto.
                    </p>
                </section>
                <section className="col-12 text-center d-block d-sm-none mb-3">
                    <img className="img-fluid" src={ejemplo} alt="" width="500" height="500"/>
                </section>
            </section>
        </article>
    );
}