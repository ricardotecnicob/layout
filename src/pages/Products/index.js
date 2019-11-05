import React, { Component } from 'react'

import fotinha01 from '../../assets/images/fotinha01.jpg';
import fotinha02 from '../../assets/images/fotinha02.jpg';
import fotinha03 from '../../assets/images/fotinha03.jpg';
import fotinha04 from '../../assets/images/fotinha04.jpg';
import fotinha05 from '../../assets/images/fotinha05.jpg';
import fotinha06 from '../../assets/images/fotinha06.jpg';

import './style.css';

class Products extends Component {
    render() {
        return (
            <div className="divGeralProdutos">

				<div className="divLabelTitulo">
					<label className="tituloPrincipalProduto" >We bring tradition</label><br/>
					<label className="subTituloProduto" >TO YOUR PLATE</label>
				</div>

				<div className="divSubProdutos">
				
					<div className="linha01">

						<div className="linha01Div" >
							<div>
								<img src={fotinha01} alt="" />
							</div>
							<div className="linha01DivTextos" >
								<label>California Sushi</label><br/><br/>
								<p>Lorem Ipsum has been the industry's standard dummy text ever</p><br/>
								<strong>R$ 14,95</strong>
							</div>
						</div>

						<div className="linha01Div" >
							<div>
								<img src={fotinha02} alt="" />
							</div>
							<div className="linha01DivTextos">
								<label>Tradicional Wok</label><br/><br/>
								<p>Lorem Ipsum has been the industry's standard dummy text ever</p><br/>
								<strong>R$ 14,95</strong>
							</div>
						</div>

					</div>


					<div className="linha02">

						<div className="linha01Div" >
							<div>
								<img src={fotinha03} alt="" />
							</div>
							<div className="linha01DivTextos" >
								<label>Poké Bowl</label><br/><br/>
								<p>Lorem Ipsum has been the industry's standard dummy text ever</p><br/>
								<strong>R$ 14,95</strong>
							</div>
						</div>

						<div className="linha01Div" >
							<div>
								<img src={fotinha04} alt="" />
							</div>
							<div className="linha01DivTextos">
								<label>Fresh Salmon</label><br/><br/>
								<p>Lorem Ipsum has been the industry's standard dummy text ever</p><br/>
								<strong>R$ 14,95</strong>
							</div>
						</div>

					</div>

					<div className="linha03">

						<div className="linha01Div" >
							<div>
								<img src={fotinha05} alt="" />
							</div>
							<div className="linha01DivTextos" >
								<label>Avocado Sushi</label><br/><br/>
								<p>Lorem Ipsum has been the industry's standard dummy text ever</p><br/>
								<strong>R$ 14,95</strong>
							</div>
						</div>

						<div className="linha01Div" >
							<div>
								<img src={fotinha06} alt="" />
							</div>
							<div className="linha01DivTextos">
								<label>King Sushi</label><br/><br/>
								<p>Lorem Ipsum has been the industry's standard dummy text ever</p><br/>
								<strong>R$ 14,95</strong>
							</div>
						</div>

					</div>

				</div>
			</div>
        )
    }
}

export default Products;
