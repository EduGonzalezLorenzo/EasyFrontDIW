import './Gallery.css';
import Plantilla1 from "../assets/Plantilla_web_1.jpg";
import Plantilla2 from "../assets/Plantilla_web_2.jpg";
import Plantilla3 from "../assets/Plantilla_web_3.jpg";
import Plantilla4 from "../assets/Plantilla_web_4.jpg";
import Palette1 from "../assets/color_palette_1.png";
import Palette2 from "../assets/color_palette_2.png";
import Palette3 from "../assets/color_palette_3.png";
import Palette4 from "../assets/color_palette_4.png";
import Palette5 from "../assets/color_palette_5.png";
import Palette6 from "../assets/color_palette_6.png";

import { useState, useEffect } from 'react';

export default function Gallery() {

    const [selected, setSelected] = useState("");

    function showSelected(id) {
        // console.log(id);
        let selection = document.getElementById(id).parentNode;
        console.log(selection);
        if(selection.className.includes("selected")) {
            selection.className = "col-12 col-sm-6 mb-3";
        } else {
            selection.className = "col-12 col-sm-6 mb-3 selected";
        }

    }

    useEffect(() => {

    }, []);




    return (
        <div className="gallery_container container">
            <div className="structure_selector">
                <h2>Seleccione la estructura de la página</h2>
                <div className="gallery_images_container row">
                    <div className='col-12 col-sm-6 mb-3' >
                        <input type="radio" name='plant' id='plant1' onChange={(event) => showSelected(event.target.id)}/>
                        <label htmlFor="plant1"><img className="img_gallery img-fluid" src={Plantilla1} alt="plantilla 1" /></label>
                    </div>

                    <div className='col-12 col-sm-6 mb-3'>
                        <input type="radio" name='plant' id='plant2' onChange={(event) => showSelected(event.target.id)}/>
                        <label htmlFor="plant2"><img className="img_gallery img-fluid" src={Plantilla2} alt="plantilla 2" /></label>
                    </div>

                    <div className='col-12 col-sm-6 mb-3'>
                        <input type="radio" name='plant' id='plant3' onChange={(event) => showSelected(event.target.id)}/>
                        <label htmlFor="plant3"><img className="img_gallery img-fluid" src={Plantilla3} alt="plantilla 3" /></label>
                    </div>

                    <div className='col-12 col-sm-6 mb-3'>
                        <input type="radio" name='plant' id='plant4'  onChange={(event) => showSelected(event.target.id)}/>
                        <label htmlFor="plant4"><img className="img_gallery img-fluid" src={Plantilla4} alt="plantilla 4" /></label>
                    </div>
                </div>
            </div>

            <div className="color_selector">
                <h2>Seleccione el esquema de color</h2>
                <div className="gallery_palettes_container row">
                    <img className="palette_gallery col-12 col-sm-6 col-lg-4 mb-3" src={Palette1} alt="color palette" />
                    <img className="palette_gallery col-12 col-sm-6 col-lg-4 mb-3" src={Palette2} alt="color palette" />
                    <img className="palette_gallery col-12 col-sm-6 col-lg-4 mb-3" src={Palette3} alt="color palette" />
                    <img className="palette_gallery col-12 col-sm-6 col-lg-4 mb-3" src={Palette4} alt="color palette" />
                    <img className="palette_gallery col-12 col-sm-6 col-lg-4 mb-3" src={Palette5} alt="color palette" />
                    <img className="palette_gallery col-12 col-sm-6 col-lg-4 mb-3" src={Palette6} alt="color palette" />
                </div>
            </div>

            <div className="font_selector">
                <h2>Seleccione la fuente</h2>
                <div className="gallery_fonts_container">
                    <p className="font_example" id="shantell"> Shantell - Ejemplo de fuente</p>
                    <p className="font_example" id="glook"> Glook - Ejemplo de fuente</p>
                    <p className="font_example" id="ubuntu"> Ubuntu - Ejemplo de fuente</p>
                    <p className="font_example" id="bebas"> Bebas Neue - Ejemplo de fuente</p>
                    <p className="font_example" id="dancing"> Dancing Script - Ejemplo de fuente</p>
                    <p className="font_example" id="roboto"> Roboto - Ejemplo de fuente</p>
                </div>
            </div>
        </div>
    );

}