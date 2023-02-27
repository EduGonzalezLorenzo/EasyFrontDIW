export default function Rates() {
    return (
        <article className="container text-center">
            <h1>El mejor servicio al mejor precio</h1>
            <p>Nuestras tarifas se adaptan a lo que usted y su empresa necesitan, con variedad de precios y servicios.</p>
            <section className="row justify-content-around rates">
                <section className="col-7 col-lg-3 p-3 rate-low d-flex flex-column mb-3">
                    <h2>"Lo justo".</h2>
                    <p>Para los que no necesitan más.</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item rate-low-item">6 esquemas de color</li>
                        <li className="list-group-item rate-low-item">6 tipos de fuente</li>
                        <li className="list-group-item rate-low-item">4 plantillas base</li>
                    </ul>
                    <h2 className="mt-auto p-2">8 €/mes</h2>
                </section>
                <section className="col-7 col-lg-3 p-3 rate-medium d-flex flex-column mb-3">
                    <h2>"Bien servido".</h2>
                    <p>Para los que buscan variedad.</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item rate-medium-item">20 esquemas de color</li>
                        <li className="list-group-item rate-medium-item">10 tipos de fuente</li>
                        <li className="list-group-item rate-medium-item">Hasta 5 fuentes propias</li>
                        <li className="list-group-item rate-medium-item">8 plantillas base</li>
                        <li className="list-group-item rate-medium-item">Hasta 5 fondos propios</li>
                    </ul>
                    <h2 className="mt-auto p-2">12 €/mes</h2>
                </section>
                <section className="col-7 col-lg-3 p-3 rate-full d-flex flex-column mb-3">
                    <h2>"Full equip".</h2>
                    <p>Para los que lo quieren todo.</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item rate-full-item">25 esquemas de color</li>
                        <li className="list-group-item rate-full-item">15 tipos de fuente</li>
                        <li className="list-group-item rate-full-item">Hasta 20 fuentes propias</li>
                        <li className="list-group-item rate-full-item">10 plantillas base</li>
                        <li className="list-group-item rate-full-item">Hasta 10 fondos propios</li>
                        <li className="list-group-item rate-full-item">Plantilla personalizado por nuestro equipo*</li>
                        <li className="list-group-item rate-full-item">Diseño personalizado por nuestro equipo*</li>
                    </ul>
                    <p>*Al contratar más de 6 meses</p>
                    <h2 className="mt-auto p-2">20 €/mes</h2>
                </section>
            </section>

        </article>
    );
}