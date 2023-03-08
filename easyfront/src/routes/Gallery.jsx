import './Gallery.css';
import Plantilla1 from "../assets/Plantilla_web_1.webp";
import Plantilla2 from "../assets/Plantilla_web_2.webp";
import Plantilla3 from "../assets/Plantilla_web_3.webp";
import Plantilla4 from "../assets/Plantilla_web_4.webp";
import Palette1 from "../assets/color_palette_1.webp";
import Palette2 from "../assets/color_palette_2.webp";
import Palette3 from "../assets/color_palette_3.webp";
import Palette4 from "../assets/color_palette_4.webp";
import Palette5 from "../assets/color_palette_5.webp";
import Palette6 from "../assets/color_palette_6.webp";
import { useState } from 'react';


export default function Gallery() {
    const [checkedPlant, setCheckedPlant] = useState("");
    const plantillas = [Plantilla1, Plantilla2, Plantilla3, Plantilla4];
    const [checkedColor, setCheckedColor] = useState("");
    const palettes =[Palette1, Palette2, Palette3, Palette4, Palette5, Palette6];

    return (
        <div className="gallery_container container text-center">
            <h1>Configure su Web</h1>
            <div className="structure_selector">
                <h2 className='pl-3'>Seleccione la estructura de la página</h2>
                <div className="gallery_images_container row">
                {plantillas.map((plantilla, i) =>
                        <div className='col-12 col-sm-6 mb-3 ' >
                        <input type="radio" name='plant' id={`plant${i}`} checked={checkedPlant === `plant${i}`} onChange={(e) => setCheckedPlant(e.target.id)} />
                        <label htmlFor={`plant${i}`} className={checkedPlant === `plant${i}` ? "shadow" : ""}><img className="img_gallery img-fluid" src={plantilla} alt={`plantilla ${i}`} width="1920" height="1080"/></label>
                    </div>
                )}
                </div>
            </div>

            <div className="color_selector">
                <h2 className='pl-3'>Seleccione el esquema de color</h2>
                <div className="gallery_palettes_container row">
                {palettes.map((palette, i) => 
                    <div className='col-12 col-sm-6 col-lg-4 mb-3'>
                        <input type="radio" name='color' id={`palette${i}`} checked={checkedColor === `palette${i}`} onChange={(e) => setCheckedColor(e.target.id)}/>
                        <label htmlFor={`palette${i}`} className={checkedColor === `palette${i}` ? "shadow" : ""}><img className="img_gallery img-fluid" src={palette} alt={`palette${i}`} width="1920" height="1080"/></label>
                    </div>
                    )}
                </div>
            </div>

            <div className="font_selector">
                <h2 className='pl-3'>Seleccione la fuente</h2>
                <div className="gallery_fonts_container">
                    <div className='col-12'>
                        <input type="radio" name='font' id='font1'/>
                        <label htmlFor="font1"><p className="font_example" id="shantell"> Shantell - Ejemplo de fuente</p></label>
                    </div>
                    <div className='col-12'>
                        <input type="radio" name='font' id='font2'/>
                        <label htmlFor="font2"><p className="font_example" id="glook"> Glook - Ejemplo de fuente</p></label>
                    </div>
                    <div className='col-12'>
                        <input type="radio" name='font' id='font3'/>
                        <label htmlFor="font3"><p className="font_example" id="ubuntu"> Ubuntu - Ejemplo de fuente</p></label>
                    </div>
                    <div className='col-12'>
                        <input type="radio" name='font' id='font4'/>
                        <label htmlFor="font4"><p className="font_example" id="bebas"> Bebas Neue - Ejemplo de fuente</p></label>
                    </div>
                    <div className='col-12'>
                        <input type="radio" name='font' id='font5'/>
                        <label htmlFor="font5"><p className="font_example" id="dancing"> Dancing Script - Ejemplo de fuente</p></label>
                    </div>
                    <div className='col-12'>
                        <input type="radio" name='font' id='font6'/>
                        <label htmlFor="font6"><p className="font_example" id="roboto"> Roboto - Ejemplo de fuente</p></label>
                    </div>
                    
                </div>
            </div>
        </div>
    );

}