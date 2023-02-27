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


export default function Gallery() {


    return (
        <div className="gallery_container container">
            <h1>Configure su Web</h1>
            <div className="structure_selector">
                <h2 className='pl-3'>Seleccione la estructura de la página</h2>
                <div className="gallery_images_container row">
                    <div className='col-12 col-sm-6 mb-3' >
                        <input type="radio" name='plant' id='plant1'/>
                        <label htmlFor="plant1"><img className="img_gallery img-fluid" src={Plantilla1} alt="plantilla 1" /></label>
                    </div>

                    <div className='col-12 col-sm-6 mb-3'>
                        <input type="radio" name='plant' id='plant2'/>
                        <label htmlFor="plant2"><img className="img_gallery img-fluid" src={Plantilla2} alt="plantilla 2" /></label>
                    </div>

                    <div className='col-12 col-sm-6 mb-3'>
                        <input type="radio" name='plant' id='plant3'/>
                        <label htmlFor="plant3"><img className="img_gallery img-fluid" src={Plantilla3} alt="plantilla 3" /></label>
                    </div>

                    <div className='col-12 col-sm-6 mb-3'>
                        <input type="radio" name='plant' id='plant4'/>
                        <label htmlFor="plant4"><img className="img_gallery img-fluid" src={Plantilla4} alt="plantilla 4" /></label>
                    </div>
                </div>
            </div>

            <div className="color_selector">
                <h2 className='pl-3'>Seleccione el esquema de color</h2>
                <div className="gallery_palettes_container row">
                    <div className='col-12 col-sm-6 col-lg-4 mb-3'>
                        <input type="radio" name='color' id='palette1'/>
                        <label htmlFor="palette1"><img className="img_gallery img-fluid" src={Palette1} alt="palette 1" /></label>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-4 mb-3'>
                        <input type="radio" name='color' id='palette2'/>
                        <label htmlFor="palette2"><img className="img_gallery img-fluid" src={Palette2} alt="palette 2" /></label>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-4 mb-3'>
                        <input type="radio" name='color' id='palette3'/>
                        <label htmlFor="palette3"><img className="img_gallery img-fluid" src={Palette3} alt="palette 3" /></label>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-4 mb-3'>
                        <input type="radio" name='color' id='palette4'/>
                        <label htmlFor="palette4"><img className="img_gallery img-fluid" src={Palette4} alt="palette 4" /></label>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-4 mb-3'>
                        <input type="radio" name='color' id='palette5'/>
                        <label htmlFor="palette5"><img className="img_gallery img-fluid" src={Palette5} alt="palette 5" /></label>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-4 mb-3'>
                        <input type="radio" name='color' id='palette6'/>
                        <label htmlFor="palette6"><img className="img_gallery img-fluid" src={Palette6} alt="palette 6" /></label>
                    </div>
                    
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