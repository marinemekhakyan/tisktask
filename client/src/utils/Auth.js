class Auth {
  constructor() {
    this.authenticatedAsLandlord = false;
    this.authenticatedAsTenant = false;
  }

  landlordLlogin(cb) {
    this.authenticatedAsLandlord = true;
    cb();
  }

  tenantLlogin(cb) {
    this.authenticatedAsTenant = true;
    cb();
  }

  logout(cb) {
    this.authenticatedAsLandlord = false;
    this.authenticatedAsTenant = false;
    cb();
  }

  isAuthenticatedAsLandlord() {
    return this.authenticatedAsLandlord;
  }

  isAuthenticatedAsTenant() {
    return this.authenticatedAsTenant;
  }
}

export default new Auth();
