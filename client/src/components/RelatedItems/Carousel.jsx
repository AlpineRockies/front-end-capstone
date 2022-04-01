import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//const Carousel = require("react-responsive-carousel").Carousel;

function RelatedItemsCarousel (props) {


  return (
    <div> RelatedItemsCarousel</div>
<Carousel
        showArrows={true}
        autoPlay={true}
        dynamicHeight={true}
        showThumbs={false}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            alt="Img 1"
          />
          <p className="c-img">Legend 1</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            alt="Img 2"
          />
          <p className="c-img">Legend 2</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Img 3"
          />
          <p className="c-img">Legend 3</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            alt="Img 4"
          />
          <p className="c-img">Legend 4</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Img 5"
          />
          <p className="c-img">Legend 5</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            alt="Img 6"
          />
          <p className="c-img">Legend 6</p>
        </div>
      </Carousel>




  )
}