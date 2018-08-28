import { LazyLoadingDemoModule } from './lazy-loading-demo.module';

describe('LazyLoadingDemoModule', () => {
  let lazyLoadingDemoModule: LazyLoadingDemoModule;

  beforeEach(() => {
    lazyLoadingDemoModule = new LazyLoadingDemoModule();
  });

  it('should create an instance', () => {
    expect(lazyLoadingDemoModule).toBeTruthy();
  });
});
