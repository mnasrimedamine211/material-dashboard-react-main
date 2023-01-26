import * as React from 'react';
import { multipostingTable } from 'assets/utils/Multiposting';
import "./Multiposting.css"

export default function Multiposting() {
    // get static data from utils 
    let multiposting = multipostingTable;
    return (
        <div className='Multiposting'>
            <label className='titre'>
                Multiposting
            </label>
            {multiposting && multiposting.length > 0 &&
                multiposting.map((element, index) => (
                    <div key={index} className='MultipostingContainer'>
                        <img src={element.icon} />
                        <div className='DescriptionWebPost' >
                            <span className='webName'>
                                {element.webName}
                            </span>
                            <span className='webLink'>
                                {element.webLink}
                            </span>
                        </div>
                        <div className='DescriptionWebAnnonces'>
                            <span className='postAnnoncesActive'>
                                {element.webAnnoncesNombre}
                            </span>
                            <span className='postAnnonces'>
                                {element.webLinkAnnonecesNombre}
                            </span>
                        </div>
                    </div>
                ))
            }
            <button className='annoncesButton'>
                Voir les annonces
            </button>
        </div>

    );
}