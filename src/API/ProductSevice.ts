import { IProduct } from "../types/IProduct";


export default class ProductService{
	
	static async getAll(){
		const response = await fetch ('/data/data.json')
		return await response.json()
	};

	static async getById(id:number){
		const products = await this.getAll()
		return products.find((product: IProduct ) => product.barcode === id);
	};
	
	static getUniqFieldValues( products: IProduct[], field: string): (number | string)[] {
		const values: (string | number)[] = [];

		products.forEach((product) => {
		  if (!values.includes(product[field as keyof IProduct])) {
			 values.push(product[field as keyof IProduct]);
		  }
		});
	 
		return values;
	}
}