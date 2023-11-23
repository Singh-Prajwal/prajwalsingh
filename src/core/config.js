class AppConfig {
  constructor() {
    this.baseURL = process.env.REACT_APP_BASE_URL ?? "http://localhost:3001"
    this.title = process.env.REACT_APP_PAGE_TITLE ?? "Prajwal'sPortfolio"
    this.apiUrl = process.env.REACT_APP_API_URL ?? "http://localhost:3000"
  }
}

export default new AppConfig()
