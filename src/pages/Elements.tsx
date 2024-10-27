import React from 'react'
import './Elements.css'
import { BsChevronRight } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";



const Elements: React.FC = () => {
  return (
    <div className='elements-main container'>
      <div className="typography py-5 text-center">
        <h4>TYPOGRAPHY</h4>
        <p>Home / Pages / Typography</p>
      </div>
      <div className="heading py-5">
        <div className="row">
          <div className="heading1 col-md-6 col-12">
            <h1>Heading H1</h1>
            <p>Axes Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
          <div className="heading2 col-md-6 col-12">
            <h2>Heading H2</h2>
            <p>Axes Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
        </div>

        <div className="row">
          <div className="heading3 col-md-6 col-12">
            <h1>Heading H3</h1>
            <p>Axes Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
          <div className="heading4 col-md-6 col-12">
            <h2>Heading H4</h2>
            <p>Axes Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
        </div>

        <div className="row">
          <div className="heading5 col-md-6 col-12">
            <h1>Heading H5</h1>
            <p>Axes Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
          <div className="heading6 col-md-6 col-12">
            <h2>Heading H6</h2>
            <p>Axes Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
        </div>

      </div>
      <div className="blockquotes container py-5">
        <h5 className='py-3'>BLOCKQUOTES</h5>
        <hr className='py-3' />
        <div className="row">
          <div className="blockquotes-left blockquotes-style-1 col-12 col-md-6">
            <p>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind”</p>
            <small>Bernard M. Baruch</small>
          </div>
          <div className="blockquotes-right blockquates-style-2 col-12 col-md-6">
            <p>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind”</p>
            <small>Bernard M. Baruch</small>
          </div>
        </div>
      </div>
      <div className="dropcaps container py-5">
        <h5 className='py-3'>DROPCAPS</h5>
        <hr className='py-3' />
        <div className="row">
          <div className="dropcaps-left col-12 col-md-6">
            <p><small className='dropcap style-1'>D</small>eoThemes is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</p>
          </div>
          <div className="dropcaps-right col-12 col-md-6">
            <p><small className='dropcap style-2'>D</small>eoThemes is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</p>
          </div>
        </div>
      </div>
      <div className="html-style container py-5">
        <h5 className='py-3'>HTML STYLE</h5>
        <hr className='py-3' />
        <p>Our Theme is a very slick and clean e-commerce text link with endless possibilities. Creating an awesome <strong className='text-dark'>bold text</strong> store with this Theme is easy than you can imagine. We possess within us two minds. So far I have written only of the italic text. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally bold text the imagination. We know that this subconscious mind controls and orchestrates our <span className='text'>highlighted text</span> functions, from pumping blood to all parts of our body to egulating our breathing and digestion. We further know that the subconscious has recorded every event that has ever happened to us.</p>
      </div>
      <div className="bullents container py-5">
        <h5 className='py-3' >BULLENTS & LISTS</h5>
        <hr className='py-3' />
        <div className="row">
          <div className="list1 col-12 col-md-3">
            <ul className='list'>
              <li>Our Theme is a very slick</li>
              <li>Clean & minimal design</li>
              <li>The best theme ever</li>
              <li>Super flexible template</li>
              <li>Tons of features</li>
            </ul>
          </div>
          <div className="list2 col-12 col-md-3">
            <ul>
              <li><span><BsChevronRight /></span>Our Theme is a very slick</li>
              <li><span><BsChevronRight/></span>Clean & minimal design</li>
              <li><span><BsChevronRight /></span>The best theme ever</li>
              <li><span><BsChevronRight /></span>Super flexible template</li>
              <li><span><BsChevronRight /></span>Tons of features</li>
            </ul>
          </div>
          <div className="list3 col-12 col-md-3">
            <ul>
              <li><span><BsCheckLg /></span>Our Theme is a very slick</li>
              <li><span><BsCheckLg /></span>Clean & minimal design</li>
              <li><span><BsCheckLg /></span>The best theme ever</li>
              <li><span><BsCheckLg /></span>Super flexible template</li>
              <li><span><BsCheckLg /></span>Tons of features</li>
            </ul>
          </div>
          <div className="list4 col-12 col-md-3">
            <ul>
              <li><span>1.</span>Our Theme is a very slick</li>
              <li><span>2.</span>Clean & minimal design</li>
              <li><span>3.</span>The best theme ever</li>
              <li><span>4.</span>Super flexible template</li>
              <li><span>5.</span>Tons of features</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="columns container py-5">
        <h5 className='py-3'>COLUMN</h5>
        <hr className='py-3'/>
        <div className="row py-3">
          <div className="col-12 col-md-6">
            <h6>1/2 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
          <div className="col-12 col-md-6">
            <h6>1/2 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
        </div>
        <div className="row py-3">
          <div className='col-12 col-md-4'>
            <h6>1/3 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
          <div className='col-12 col-md-4'>
            <h6>1/3 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
          <div className='col-12 col-md-4'>
            <h6>1/3 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
        </div>
        <div className="row py-3">
          <div className='col-12 col-md-3'>
            <h6>1/4 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
          <div className='col-12 col-md-3'>
            <h6>1/4 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
          <div className='col-12 col-md-3'>
            <h6>1/4 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
          <div className='col-12 col-md-3'>
            <h6>1/4 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
        </div>
        <div className="row py-3">
          <div className='col-12 col-md-4'>
            <h6>1/3 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
          <div className='col-12 col-md-8'>
            <h6>2/3 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
        </div>
        <div className="row py-3">
          <div className='col-12 col-md-3'>
          <h6>1/4 COLUMN</h6>
          <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
          <div className='col-12 col-md-9'>
          <h6>3/4 COLUMN</h6>
          <p>Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine. Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine.</p>
          </div>
          
        </div>
        <div className="row py-3">
          <div className="col-12 col-md-2">
            <h6>1/6 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
          <div className="col-12 col-md-2">
            <h6>1/6 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
          <div className="col-12 col-md-2">
            <h6>1/6 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
          <div className="col-12 col-md-2">
            <h6>1/6 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
          <div className="col-12 col-md-2">
            <h6>1/6 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
          <div className="col-12 col-md-2">
            <h6>1/6 COLUMN</h6>
            <p>Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elements