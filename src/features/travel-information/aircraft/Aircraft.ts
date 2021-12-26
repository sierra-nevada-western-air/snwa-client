import Image from '../../../assets/images/Image';

export default interface Aircraft {
	image: Image;
	name: string;
	speed: number;
	capacity: number;
	range: number;
	title: string;
}
