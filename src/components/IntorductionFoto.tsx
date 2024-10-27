import React from 'react';
import './IntroductionFoto.css'

interface photosProps {
    fotoProps: string;
    nameProps: string;
    mainProps: string;
    classAdi: string;
    classParagraf: string
}

const IntroductionFoto: React.FC<photosProps> = ({ fotoProps, nameProps, mainProps, classAdi, classParagraf }) => {
    return (
        <div className='introductionFoto col-12 col-md-4'>
            <div className="photosProps">
                <img src={fotoProps} alt="" className="card-image" />
                <div className="overlay"></div>
                <div className="card-content">
                    <h2 className={classAdi}>{nameProps}</h2>
                    <h6 className={classParagraf}>{mainProps}</h6>
                </div>
            </div>
        </div>
    );
}

export default IntroductionFoto;

