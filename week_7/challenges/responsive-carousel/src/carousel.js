import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
	render() {
		return (
			<Carousel>
				<div>
					<img src="images/HongKong.jpg" alt="HongKong"/>
					<p className="legend">HongKong</p>
				</div>
				<div>
					<img src="images/Japan.png" alt="Japan"/>
					<p className="legend">Japan</p>
				</div>
				<div>
					<img src="images/LasVegas.png" alt="LasVegas"/>
					<p className="legend">LasVegas</p>
				</div>
				<div>
					<img src="images/Macao.png" alt="Macao"/>
					<p className="legend">Macao</p>
				</div>
			</Carousel>
		);
	}
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;