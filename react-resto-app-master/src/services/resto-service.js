export default class RestoService {
  _apiBase = 'http://localhost:3000';
  
  async getResource(url) {
    const response = await fetch(this._apiBase + url);
    if (!response.ok) {
      throw new Error(`Server could not fetch ${url}`);
    }
    const result = await response.json();
    return result;
  }

  async getMenuItems() {
    return await this.getResource('/menu/');
  }

  async setOrder(order) {
    const number = await this.getOrderNumber();
    const newOrder = {
        id: number,
        order: order
    }
    const response = await fetch(`${this._apiBase}/orders`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newOrder)
    });
    if (!response.ok){
        throw new Error('json error'); 
    }
  }

  async clearOrder() {
    console.log('clear order');
  }
  
  async getOrderNumber(){
    const res = await this.getResource('/orders/');
    const orderNumber = res.length + 1;

    return orderNumber;
}
}