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
}