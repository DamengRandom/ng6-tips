import { CustomersLazyLoadModule } from './customers-lazy-load.module';

describe('CustomersLazyLoadModule', () => {
  let customersLazyLoadModule: CustomersLazyLoadModule;

  beforeEach(() => {
    customersLazyLoadModule = new CustomersLazyLoadModule();
  });

  it('should create an instance', () => {
    expect(customersLazyLoadModule).toBeTruthy();
  });
});
