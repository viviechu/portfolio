'use strict';

xdescribe('Service: dragDrop', function () {

  // load the service's module
  beforeEach(module('profileApp'));

  // instantiate service
  var dragDrop;
  beforeEach(inject(function (_dragDrop_) {
    dragDrop = _dragDrop_;
  }));

  it('should do something', function () {
    expect(!!dragDrop).toBe(true);
  });

});
