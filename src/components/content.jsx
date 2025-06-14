import React from "react";
import './content.css'
function Content() {
    return (
        <div className="main-container">
            <div className="content">
                <div className="circle-image">
                    <img src="/public/image/Circle-Image.png" alt="Circle-Image" id="Circle-Image" />
                </div>
                <div className="other-content">
                    <h3>Full Stack Developer</h3>
                    <img src="/public/image/DevRos.png" alt="DevRos" />
                    <p>
                        Potřebujete vytvořit webové stránky ? Při tvorbě webových stránek zajišťuji celkový design od návrhu až po realizaci. Perfektní technickou stránku zajistišťuji též, aby všechno běželo přesně jak má. Kdyby by Vás mé portofilo přípradně zkušenosti zaujaly - napište mi !
                    </p>
                    <div className="button-container">
                        <button className="toggle-btn">
                            Portfolio
                        </button>

                        {/* {`toggle-btn ${active === 'portfolio' ? 'active' : ''}`}
                            onClick={() => setActive('portfolio')} */}
                            
                        <button className="toggle-btn">
                            Kontakt
                        </button>

                        {/* {`toggle-btn ${active === 'kontakt' ? 'active' : ''}`}
                            onClick={() => setActive('kontakt')} */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content;