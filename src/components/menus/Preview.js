import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import chart from 'assets/chart.PNG';
// import map from 'assets/map.gif';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export const Preview = () => {
	return (
		<div className="py-8">
			<h1 className="px-24 text-3xl py-8">
				Comparison of Testing and Positivity Rates (Presentation Name)
            </h1>
            <Carousel arrows infinite className="grid grid-cols-2 gap-4 px-12 ">
			<div className="grid grid-cols-2 gap-2  slideHeight">
				
					<Card className="w-full h-auto ">
                        <CardContent className="bg-blue-300 h-full">
                        <p>map (Dashboard Item)</p>
						</CardContent>
					</Card>
					<Card className="w-full h-full ">
                        <CardContent className="bg-blue-300 h-full">
                        <p>Chart (Dashboard Item)</p>
						</CardContent>
					</Card>
            </div>
            </Carousel>
            
		</div>
	);
};
