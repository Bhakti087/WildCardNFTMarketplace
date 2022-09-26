import React from 'react';
import Style from './Partners.module.css'

export default function Partners() {
  return (
  <div>
<div className={Style.client}>
	<div className={Style.container}>
		<div className={Style.row}>

			<div className={Style.title}>
				<h2> Nos références clients : </h2>
			</div>

			<div>
				<div className={Style.slide}><img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png"/></div>
				<div className={Style.slide}img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png"/></div>
				<div className={Style.slide}><img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png"/></div>
				<div className={Style.slide}><img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png"/></div>
				<div className={Style.slide}><img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png"/></div>
				<div className={Style.slide}><img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png"/></div>
			</div>
		</div>
	</div>
</div>

  )
}
