import { useState } from "react";

export default function Contact() {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const alterPhone = (event) => { setPhone(event.target.value) };
    const alterEmail = (event) => { setEmail(event.target.value) };

    return (
        <article className="container">
            <h1>¿Necesita ayuda personalizada?</h1>
            <section>
                <p>
                    Puede contacta con nosotros por teléfono ya sea llamandonos al <a href="tel:+34697443132">123 45 67 89</a> o vía <a href="https://wa.me/34123456789" target="_blank" rel="noreferrer">Whatsapp</a>.
                </p>
                <p>
                    También puede enviarnos un correo a la dirección de correo electrónico <a href="mailto:help@easyfront.com" target="_blank" rel="noreferrer">help@easyfront.com</a>.
                </p>
            </section>
            <section>
                <h2 className='pl-3'>Formulario de contacto</h2>
                <p>Si lo prefiere, puede dejarnos aquí sus datos y nos pondremos en contacto con usted en la mayor brevedad posible.
                </p>
                <form>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Nombre: </label>
                        <div className="col-sm-10">
                            <input type="text" id="name" name="name" className="form-control" placeholder="Nombre" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Email: </label>
                        <div className="col-sm-10">
                            <input type="email" id="email" name="email" className="form-control" placeholder="email@email.com" onChange={alterEmail} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Teléfono: </label>
                        <div className="col-sm-10">
                            <input type="tel" id="phone" name="phone" className="form-control" placeholder="123 456 789" onChange={alterPhone} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="info" className="col-sm-2 col-form-label">Información adicional: </label>
                        <div className="col-sm-10">
                            <textarea id="info" name="info" className="form-control" rows="3" placeholder="Text" />
                        </div>
                    </div>
                    <div className=" form-check">
                        <input className="form-check-input" type="checkbox" id="condiciones" name="condiciones" required />
                        <label className="form-check-label" htmlFor="condiciones">Aceptar el envio de los datos introducidos en este formulario.</label>
                    </div>
                    <div className="text-center">
                        <input className="btn" type="submit" value="Contactar" disabled={email === "" && phone === ""} />
                        <p className="hide" hidden={!(email === "" && phone === "")}>Introduzca un email o un teléfono</p>
                    </div>
                    <input type="hidden" name="_next" value="http://localhost:3000" />
                </form>
            </section>
        </article>
    );
}