import React from 'react'

interface productImgProps {
    partnerImgProps: string;
}

export const ProductImage: React.FC<productImgProps> = ({ partnerImgProps }) => {
    return (
        <div className='product-image'>
            <div className="productMainImg">
                <img src={partnerImgProps} alt="" className='w-100'/>
            </div>
        </div>
    )
}
