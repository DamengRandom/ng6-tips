let major = 0;
let minor = 0;

function mainVersion(param) {
  major = major + param;
  minor = 0;
  return `${major}.${minor}`;
}

function miniVersion(param) {
  return minor = minor + param;
}

describe('version changes', () => {
  it('Should update major or minor verison number', () => {
    expect(mainVersion(1)).toEqual('1.0');
    expect(miniVersion(1)).toEqual(1);
  });

  it('Should not add string as a version number', () => {
    expect(mainVersion('1')).not.toEqual('1.0');
    expect(miniVersion('1')).toEqual('01');
  });
});
