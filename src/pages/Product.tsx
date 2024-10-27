import { useState } from 'react';
import './Product.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ProductImage } from './ProductImage';

// AccordionItem komponentinin interfeysi
interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

// AccordionItem komponenti
const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onToggle}>
        <h3>{title}</h3>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

// Product komponenti
const Product = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    { title: 'Description', content: 'Zenna Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website. Amadea Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website. I would now like to introduce you to your second mind, the hidden and mysterious subconscious.' },
    { title: 'Information', content: 'Fabric:	Cotton (100%)' },
    { title: 'Reviews', content: 'This template is so awesome. I didn’t expect so many features inside. E-commerce pages are very useful, you can launch your online store in few seconds. I will rate 5 stars.' },
  ];

  return (
    <div className='shopProduct container py-5'>
      <div className="row">
        <div className="product-left col-12 col-md-6">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><ProductImage partnerImgProps='/public/image/product/product1.jpg' /></SwiperSlide>
            <SwiperSlide><ProductImage partnerImgProps='/public/image/product/product2.jpg' /></SwiperSlide>
            <SwiperSlide><ProductImage partnerImgProps='/public/image/product/product3.jpg' /></SwiperSlide>
            <SwiperSlide><ProductImage partnerImgProps='/public/image/product/product4.jpg' /></SwiperSlide>
          </Swiper>
        </div>

        <div className="product-right col-12 col-md-6">
          <span>Home / Shop / Catalog</span>
          <h5 className='py-2'>SPORT T-SHIRT</h5>
          <hr />
          <span> $1250.00</span>
          <p className='py-4'>Our Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>

          <div className="color d-flex py-3">
            <h6> Color:</h6>
            <button className='black'></button>
            <button className='blue'></button>
            <button className='white'></button>
          </div>

          <div className="size d-flex py-3">
            <h6>Size:</h6>
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>

          <div className="category py-3">
            <a href="#" className='d-block'><span>SKU:</span> 111763</a>
            <a href="#" className='d-block'><span>Category:</span> Men T-shirt</a>
            <a href="#" className='d-block'><span>Tags:</span> Sport, T-shirt, Blue</a>
          </div>

         
          <div className="accordion col-12 py-3">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={activeIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
